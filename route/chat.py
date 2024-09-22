import json
import os
import random
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

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
    question: str  # Pregunta previa que se le hizo al usuario
    client_id: int = None  # ID del cliente para verificar si está registrado

# Iniciar el archivo data.json si no existe
def init_data():
    if not os.path.exists("data.json"):
        data = {
            "clientes_registrados": {},
            "productos_disponibles": [
                {"id": 1, "nombre": "hamburguesa", "precio": 12000},
                {"id": 2, "nombre": "pizza", "precio": 18000},
                {"id": 3, "nombre": "perro caliente", "precio": 10000},
                {"id": 4, "nombre": "papas fritas", "precio": 5000}
            ],
            "carrito": {}
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

def save_data(data):
    with open("data.json", "w") as file:
        json.dump(data, file, indent=4)

data = load_data()

def generate_client_id():
    return str(random.randint(1000000, 9999999))

def register_client(user_info):
    info_parts = user_info.split('\n')
    client_data = {}
    client_id = generate_client_id()  # Generar un nuevo ID para el cliente
    for part in info_parts:
        key, value = part.split(': ')
        client_data[key.strip().lower()] = value.strip()
    data["clientes_registrados"][client_id] = client_data
    save_data(data)
    return client_id, "¡Registro completado exitosamente! Aquí está tu ID de cliente: " + client_id

def check_client_registration(client_id):
    return client_id in data["clientes_registrados"]


def match_pattern(user_input: str, previous_question: str, client_id: str):
    user_input_lower = user_input.lower()
    
 
    if previous_question.startswith("Parece que aún no estás registrado"):
        client_id, response = register_client(user_input)
        return response
    
    

    user_input_set = set(user_input_lower.split())
    for pattern in base['pedido']['patterns']:
            print('filtro 1')
            pattern_set = set(pattern)
            if pattern_set.issubset(user_input_set):
                if  client_id is None or not check_client_registration(client_id):
                    print('pedido iniciado')
                    return "Parece que aún no estás registrado. Por favor, proporciona tu información para registrarte. http://127.0.0.1:5500/info/info.html"
                
                return random.choice(base['pedido']['responses'])
    



   
    if previous_question in base['pedido']['responses']:
        # Convertir la entrada del usuario en un conjunto de palabras
        user_input_set = set(user_input_lower.split())

        # Verificar si alguna de las listas de patrones de 'pedido' está completamente contenida en la entrada del usuario
        for pattern in base['pedido']['patterns']:
            print('filtro 1')
            pattern_set = set(pattern)
            if pattern_set.issubset(user_input_set):                
                return random.choice(base['pedido']['responses'])
                


    # # Verificar y responder según otros patrones de entrada
    # for category, content in base.items():
    #     for pattern in content['patterns']:
    #         pattern_str = ' '.join(pattern)
    #         if pattern_str in user_input_lower:
    #             return random.choice(content['responses'])
            


    

    return "Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?"

@chat_router.post('/chat')
def chatbot(userInput: UserInput):
    response = match_pattern(userInput.answer, userInput.question, userInput.client_id)
    return {"response": response}

# Ejecutar init_data al iniciar para asegurar que data.json está presente
init_data()
