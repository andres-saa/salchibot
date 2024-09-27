import json
import os
import random
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi import Depends, HTTPException, Security
from fastapi.security import APIKeyHeader
import secrets



API_KEY_NAME = "Authorization"
api_key_header = APIKeyHeader(name=API_KEY_NAME, auto_error=False)

def verify_api_key(api_key: str = Security(api_key_header)):
    expected_api_key = os.getenv("API_SECRET_TOKEN")
    print(expected_api_key)
    if api_key != expected_api_key:
        raise HTTPException(status_code=403, detail="Invalid API Key")
    return api_key

chat_router = APIRouter()

productos_disponibles = [
    {"id": 1, "nombre": "hamburguesa", "precio": 12000},
    {"id": 2, "nombre": "pizza", "precio": 18000},
    {"id": 3, "nombre": "perro caliente", "precio": 10000},
    {"id": 4, "nombre": "papas fritas", "precio": 5000}
]

base = {
    "pedido": {   
        "patterns": [
            ['hola', 'hacer', 'pedido'],
            ['hola','para','un', 'pedido'],
            ['para','un', 'pedido'],
            ['hacer', 'pedido'],
            ['buenas', 'hacer', 'pedido'],
            ['hola', 'gustaria', 'hacer', 'pedido']
        ],
        "responses": [
            "Claro, te comparto nuestra carta inteligente, al agregas los productos y le das a finalizar, eso te traera de vuelta aca",
            "De una, solo dime qué vas a pedir."
        ]
    },
    "saludos": {
        "patterns": [
            ['hola'],
            ['buenos', 'dias'],
            ['buenas', 'tardes'],
            ['buenas', 'noches']
        ],
        "responses": [
            "¡Hola! ¿En qué puedo ayudarte?",
            "¡Buen día! ¿Qué te gustaría hacer hoy?",
            "¡Buenas tardes! ¿Cómo puedo asistirte?",
        ]
    },
    "despedidas": {
        "patterns": [
            ['adios'],
            ['hasta', 'luego'],
            ['nos', 'vemos'],
            ['gracias', 'adios']
        ],
        "responses": [
            "¡Adiós! ¡Que tengas un buen día!",
            "¡Hasta luego! Gracias por tu visita.",
            "¡Nos vemos pronto!",
            "Gracias, ¡adiós!"
        ]
    },
    "agradecimientos": {
        "patterns": [
            ['gracias'],
            ['muchas', 'gracias'],
            ['te', 'agradezco']
        ],
        "responses": [
            "¡De nada! Estoy aquí para ayudar.",
            "¡Con mucho gusto!",
            "¡Siempre es un placer ayudarte!"
        ]
    }
}

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

print(data_responses)

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
    for pattern in base['pedido']['patterns']:
        pattern_set = set(pattern)
        if pattern_set.issubset(user_input_set):
            if not check_client_registration(client_id):
                update_last_response("Parece que aún no estás registrado. Por favor, proporciona tu información para registrarte.",client_id)
                return "Parece que aún no estás registrado. Por favor, proporciona tu información para registrarte."

            response = random.choice(base['pedido']['responses'])
            update_last_response(response,client_id)  # Actualiza la última respuesta
            return response


    for category, content in base.items():
        if category != 'pedido':  # Evitar duplicar la comprobación de 'pedido'
            for pattern in content['patterns']:
                pattern_set = set(pattern)
                if pattern_set.issubset(user_input_set):
                    
                    response  = random.choice(content['responses'])
                    update_last_response(response,client_id)  # Actualiza la última respuesta
                    return response
                
    update_last_response("Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?",client_id)
    return "Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?"

@chat_router.post('/chat', dependencies=[Depends(verify_api_key)])
def chatbot(userInput: UserInput):
    if not data_responses.get(userInput.client_id):
        update_last_response('hola', userInput.client_id)
    response = match_pattern(userInput.answer, userInput.client_id)
    return {"response": response}

init_data()
