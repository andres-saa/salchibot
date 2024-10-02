import json
import os
import random
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi import Depends, HTTPException, Security

import secrets
from models.secure.security import verify_api_key
from models.chatbot import Chatbot
import re





chat_router = APIRouter()

productos_disponibles = [
    {"id": 1, "nombre": "hamburguesa", "precio": 12000},
    {"id": 2, "nombre": "pizza", "precio": 18000},
    {"id": 3, "nombre": "perro caliente", "precio": 10000},
    {"id": 4, "nombre": "papas fritas", "precio": 5000}
]



    # Cargar variables (suponiendo que están definidas)
variables = {

    "sedes": (
        "\n\n*CALI*\n"
        "En Cali tenemos estas sedes:\n"
        "*Salchimonster Bretaña* - Calle 10#21-42 Bretaña\n"
        "*Salchimonster Flora* - Calle 44 Norte Av 3E-89 la Flora\n"
        "*Salchimonster Caney* - Carrera 85 # 37-10, Caney\n\n"
        
        "*BOGOTÁ*\n"
        "En Bogotá tenemos estas sedes:\n"
        "*Salchimonster Montes* - Calle 8 sur #32a-08\n"
        "*Salchimonster Modelia* - Carrera 75 # 25C-45\n"
        "*Salchimonster Suba* - Carrera 92 # 147B-17\n"
        "*Salchimonster Kennedy* - Carrera 78B # 38 sur-79\n"
        "*Salchimonster Chapinero* - Cra 10 A # 70-24\n\n"
        
        "*JAMUNDÍ*\n"
        "En Jamundí tenemos esta sede:\n"
        "*Salchimonster Jamundí* - Carrera 22 # 5A sur-60\n\n"
        
        "*MEDELLÍN*\n"
        "En Medellín tenemos esta sede:\n"
        "*Salchimonster Laureles* - Transversal 39 #74 B-14 Primer Piso\n"
    ),



    "horarios": (
        "\n\n*🔥 SEDES CALI 🔥*\n"
        "*Flora*\n"
        "*Caney*\n"
        "*Bretaña*\n"
        "*Jamundí*\n\n"
        "⏰ Horario: Lunes a domingo 5:00 PM a 11:30 PM\n\n"
        
        "*🔥 SEDES BOGOTÁ 🔥*\n"
        "*Modelia*\n"
        "*Kennedy*\n"
        "*Suba*\n"
        "*Montes*\n\n"
        "⏰ Horario: Lunes a domingo 12:00 PM a 11:30 PM\n\n"
        
        "*🔥 SEDE MEDELLÍN LAURELES 🔥*\n"
        "*Laureles*\n\n"
        "⏰ Horario: Lunes a jueves 5:00 PM a 11:30 PM\n"
        "⏰ Horario: Viernes a domingo 12:00 PM a 11:30 PM\n"
    ),

    "carta":("carta-bot.salchimonster.com"),
    "registro":("registro-bot.salchimonster.com"),
    "cambio direccion":("dir-bot.salchimonster.com"),



}






def change_datos(data):
    global datos
    datos = data

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

    Chatbot_instance = Chatbot()
    updated_patterns = Chatbot_instance.get_patters()

    # Escribir los patrones actualizados al archivo JSON
    with open('data_patterns.json', 'w') as file:
        json.dump(updated_patterns, file, indent=4)


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
    # Comprueba si la información del usuario comienza con la cadena de inicio esperada
    if user_info.startswith('registro cliente'):
        # Separa la información en partes usando el salto de línea
        info_parts = user_info.split('\n')

        # Ignora la primera línea, que es el título, y comienza a procesar desde la segunda línea
        client_data = {}
        for part in info_parts[1:]:  # Comienza desde el segundo elemento de la lista
            key, value = part.split(': ')
            client_data[key.strip().lower()] = value.strip()
        
        # Suponiendo que 'data' es un diccionario que ya ha sido inicializado en algún lugar de tu código
        data["clientes_registrados"][client_id] = client_data  # Usar el ID proporcionado
        save_data(data)  # Asegúrate de que la función save_data esté definida y funcione correctamente
        return "¡Registro completado exitosamente! Aquí está tu ID de cliente: " + client_id
    
    # Retorna un mensaje si el formato no es correcto
    return 'Estoy a la espera de los datos, el formato no es correcto, por favor use el link proporcionado http://127.0.0.1:5500/info/info.html'


def check_client_registration(client_id):
    return client_id in data["clientes_registrados"]

def get_previous_question(user_id:str):
    return data_responses[user_id]

def update_last_response(response,user_id:str):
    # Actualiza solo la última respuesta
    data_responses[user_id] = response
    save_data_responses(data_responses)

def match_pattern(user_input: str, client_id: str, datos):
    user_input_lower = user_input.lower()
    
    # Obtener la última respuesta desde el archivo
    previous_question = get_previous_question(client_id)
    
    if previous_question and previous_question.startswith("Parece que aún no estás registrado"):
        response = register_client(user_input, client_id)
        update_last_response(response,client_id)
        return response
    
    user_input_set = set(user_input_lower.split())

    for pattern in get_intent_patterns(datos,'pedido'):
        pattern_set = set(pattern)
        if pattern_set.issubset(user_input_set):
            if not check_client_registration(client_id):
                update_last_response("Parece que aún no estás registrado. Por favor, proporciona tu información para registrarte.",client_id)
                return "Parece que aún no estás registrado. llename esta info y le das a listo. el sistema te registra de manera automatica http://127.0.0.1:5500/info/info.html"

            response = random.choice(get_intent_responses(datos,'pedido'))
            update_last_response(response,client_id)  # Actualiza la última respuesta
            return response


                
    for intent in datos:
        if intent['intent'] != 'pedido':
            for pattern in  intent["data"]['patterns']:
                pattern_set = set(pattern)
                if pattern_set.issubset(user_input_set):
                    return random.choice(intent['data']['responses'])

                
    update_last_response("Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?",client_id)
    return "Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?"





def extraer_productos(texto):
    # Verifica que el texto empiece con "Mi pedido:"
    if not texto.strip().startswith("Mi pedido:"):
        return "El texto no comienza con 'Mi pedido:'"
    
    # Limpiar el texto eliminando los asteriscos y reemplazando comas por puntos en los precios
    texto_limpio = texto.replace('*', '').replace(',', '.')
    
    # Regex para extraer nombre del producto, cantidad y precio
    pattern = re.compile(r'-\s(.+?)\sx\s(\d+)\s=\s\$(\d+[.,]?\d*)')
    
    # Buscar todos los matches
    matches = pattern.findall(texto_limpio)
    
    # Crear una lista de diccionarios con la información extraída
    productos = [{'nombre': match[0].strip(), 'cantidad': int(match[1])} for match in matches]
    
    return productos





@chat_router.post('/chat', dependencies=[Depends(verify_api_key)])
def chatbot(userInput: UserInput):
    # Cargar datos de un archivo JSON local


    if  userInput.answer.strip().startswith("Mi pedido:"):
       return {"response":extraer_productos(userInput.answer)}
    

    with open('data_patterns.json', 'r') as file:
        datos = json.load(file)

    if not data_responses.get(userInput.client_id):
        update_last_response('hola', userInput.client_id)


    # Generar respuesta inicial
    response = match_pattern(userInput.answer, userInput.client_id, datos)

    # Buscar y reemplazar variables en la respuesta
    def replace_variables(text):
        pattern = re.compile(r'\{(\w+)\}')  # Patrón para identificar variables dentro de llaves
        return pattern.sub(lambda match: variables.get(match.group(1), f"{match.group(0)}"), text)

    # Aplicar reemplazo de variables a la respuesta
    response = replace_variables(response)

    return {"response": response}


init_data()


