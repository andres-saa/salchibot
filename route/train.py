from fastapi import APIRouter
from models.chatbot import Chatbot
from schema.bot_schema import train
# from route.chat import base,change_base
from schema.bot_schema import Intent
import json
train_router = APIRouter()




@train_router.get('/intents')
def get_intents():
    Chatbot_instance = Chatbot()
    data = Chatbot_instance.get_intents()
    Chatbot_instance.close_connection()
    return data


@train_router.post('/train')
def get_intents(data: train):
    Chatbot_instance = Chatbot()
    data = Chatbot_instance.train(data)
    # Obtener los patrones actualizados después del entrenamiento
    updated_patterns = Chatbot_instance.get_patters()

    # Escribir los patrones actualizados al archivo JSON
    with open('data_patterns.json', 'w') as file:
        json.dump(updated_patterns, file, indent=4)

    Chatbot_instance.close_connection()
    return data

@train_router.get('/get_tags')
def get_intents():
    Chatbot_instance = Chatbot()
    data = Chatbot_instance.get_intents()
    # change_base(Chatbot_instance.get_patters())
    Chatbot_instance.close_connection()
    return data


@train_router.post('/create_tag')
def get_intents(data:Intent):
    Chatbot_instance = Chatbot()
    data = Chatbot_instance.create_tag(data)
    # change_base(Chatbot_instance.get_patters())
    Chatbot_instance.close_connection()
    return data