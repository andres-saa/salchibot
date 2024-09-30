import json
import os
import random
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi import Depends, HTTPException, Security

import secrets
from models.secure.security import verify_api_key
from models.chatbot import Chatbot






chat_router = APIRouter()

productos_disponibles = [
    {"id": 1, "nombre": "hamburguesa", "precio": 12000},
    {"id": 2, "nombre": "pizza", "precio": 18000},
    {"id": 3, "nombre": "perro caliente", "precio": 10000},
    {"id": 4, "nombre": "papas fritas", "precio": 5000}
]




chat_response_model = Chatbot()

datos = chat_response_model.get_patters()

base = datos

def change_base(data):
    global base
    base = data

def get_intent(data,name):
    for item in data:
        if (item['intent'] == name):
            return item
    return None


def get_intent_patterns(data,name):
    for item in data:
        if (item['intent'] == name):
            return item['data']['patterns']
    return None


def get_intent_responses(data,name):
    for item in data:
        if (item['intent'] == name):
            return item['data']['responses']
    return None





class UserInput(BaseModel):
    answer: str  # Respuesta del usuario
    client_id: str  # ID del cliente para verificar si está registrado

# Iniciar el archivo data.json si no existe
def init_data():
    if not os.path.exists("data.json"):
        data = {
            "clientes_registrados": {},
            "productos_disponibles": productos_disponibles,
            "carrito": {},
            "ultima_respuesta": ""  # Solo una última respuesta
        }
        with open("data.json", "w") as file:
            json.dump(data, file, indent=4)
    else:
        with open("data.json", "r") as file:
            return json.load(file)



def load_data():
    if not os.path.exists("data.json"):
        return init_data()
    with open("data.json", "r") as file:
        return json.load(file)
    
def load_data_responses():
    with open("responses.json", "r") as file:
        return json.load(file)

def save_data(data):
    with open("data.json", "w") as file:
        json.dump(data, file, indent=4)

def save_data_responses(data):
    with open("responses.json", "w") as file:
        json.dump(data, file, indent=4)

data = load_data()
data_responses = load_data_responses()

def register_client(user_info, client_id):
    info_parts = user_info.split('\n')
    client_data = {}
    for part in info_parts:
        key, value = part.split(': ')
        client_data[key.strip().lower()] = value.strip()
    
    data["clientes_registrados"][client_id] = client_data  # Usar el ID proporcionado
    save_data(data)
    return "¡Registro completado exitosamente! Aquí está tu ID de cliente: " + client_id

def check_client_registration(client_id):
    return client_id in data["clientes_registrados"]

def get_previous_question(user_id:str):
    return data_responses[user_id]

def update_last_response(response,user_id:str):
    # Actualiza solo la última respuesta
    data_responses[user_id] = response
    save_data_responses(data_responses)

def match_pattern(user_input: str, client_id: str):
    user_input_lower = user_input.lower()
    
    # Obtener la última respuesta desde el archivo
    previous_question = get_previous_question(client_id)
    
    if previous_question and previous_question.startswith("Parece que aún no estás registrado"):
        response = register_client(user_input, client_id)
        update_last_response(response,client_id)
        return response
    
    user_input_set = set(user_input_lower.split())

    for pattern in get_intent_patterns(base,'pedido'):
        pattern_set = set(pattern)
        if pattern_set.issubset(user_input_set):
            if not check_client_registration(client_id):
                update_last_response("Parece que aún no estás registrado. Por favor, proporciona tu información para registrarte.",client_id)
                return "Parece que aún no estás registrado. llename esta info y le das a listo. el sistema te registra de manera automatica http://127.0.0.1:5500/info/info.html"

            response = random.choice(get_intent_responses(base,'pedido'))
            update_last_response(response,client_id)  # Actualiza la última respuesta
            return response


                
    for intent in base:
        if intent['intent'] != 'pedido':
            for pattern in  intent["data"]['patterns']:
                pattern_set = set(pattern)
                if pattern_set.issubset(user_input_set):
                    return random.choice(intent['data']['responses'])

                
    update_last_response("Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?",client_id)
    return "Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?"

@chat_router.post('/chat', dependencies=[Depends(verify_api_key)])
def chatbot(userInput: UserInput):
    if not data_responses.get(userInput.client_id):
        update_last_response('hola', userInput.client_id)
    response = match_pattern(userInput.answer, userInput.client_id)
    return {"response": response}

init_data()
