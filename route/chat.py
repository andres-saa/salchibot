import json
import os
import random
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from fastapi import Depends, HTTPException, Security

import secrets
from models.secure.security import verify_api_key
from models.chatbot import Chatbot
from models.products import Products
import re
import requests




class User(BaseModel):
    user_name:str
    user_phone:str
    user_address:str
    



def build_json(order_products: list, order_aditionals: list, user, site_id: int, payment_method_id: int, delivery_price: int, order_notes: str):
   
    order = {
        "order_products": order_products,
        "site_id": site_id,
        "delivery_person_id": 4,
        "payment_method_id": payment_method_id,
        "delivery_price": delivery_price,
        "order_notes": order_notes,
        "user_data": {
            "user_name": user.user_name,
            "user_phone": user.user_phone,
            "user_address": user.user_address
        },
        "order_aditionals": order_aditionals  # Agregar los adicionales
    }

    return order




    
   
   

   
   


chat_router = APIRouter()

productos_disponibles = [
    {"id": 1, "nombre": "hamburguesa", "precio": 12000},
    {"id": 2, "nombre": "pizza", "precio": 18000},
    {"id": 3, "nombre": "perro caliente", "precio": 10000},
    {"id": 4, "nombre": "papas fritas", "precio": 5000}
]



def computed_variables(user_id:str):
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

        "carta":("https://bot.salchimonster.com/carta/"),
        "registro":("https://bot.salchimonster.com/registro/"),
        "cambio_direccion":("https://bot.salchimonster.com/direccion/"),
        "nombre":f'*{get_my_self(user_id).capitalize()}*'
    }

    return variables



def get_my_self(user_id):
    chat_instance = Products()
    i = chat_instance.i_am_registered(user_id)
    if i :
        return i[0]["user_name"]
    return ""



def get_my_data(user_id):
    chat_instance = Products()
    
    user = chat_instance.i_am_registered(user_id)[0]
    
    response = f"""\n
    *Nombre*: {user["user_name"]} \n
    *Direccion*: {user["user_address"]} \n
    *Telefono*: {user["user_phone"]}
    """ 
    
    return response


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
    
   
    
    user_input_set = set(user_input_lower.split())
                
    for intent in datos:
        for pattern in  intent["data"]['patterns']:
            pattern_set = set(pattern)
            if pattern_set.issubset(user_input_set):
                return random.choice(intent['data']['responses'])

                
    update_last_response("Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?",client_id)
    return "Lo siento, no entiendo tu solicitud. ¿Puedes repetirla?"





def extraer_productos(texto,wsp_id):
    # Verifica que el texto empiece con "Mi pedido:"
    if not texto.strip().startswith("Mi pedido:"):
        return "El texto no comienza con 'Mi pedido:'"
    
    # Limpiar el texto eliminando los asteriscos y reemplazando comas por puntos en los precios
    texto_limpio = texto.replace('*', '').replace(',', '.')
    
    # Regex para extraer nombre del producto, cantidad y precio (aunque el precio no es necesario aquí)
    pattern = re.compile(r'-\s(.+?)\sx\s(\d+)')
    
    # Buscar todos los matches
    matches = pattern.findall(texto_limpio)
    
    if not matches:
        return "No se encontraron productos en el texto."
    
    # Extraer nombres y cantidades
    nombres_productos = [match[0].strip() for match in matches]
    cantidades = [int(match[1]) for match in matches]

    # Instancia de la clase Products para obtener los IDs de los productos
    chabot_instance = Products()
    productos_con_id = chabot_instance.getProductsIdByNames(nombres_productos, site_id=1, restaurant_id=1)
    
    # Verificar si se encontraron los IDs correspondientes
    if not productos_con_id:
        return "No se encontraron productos coincidentes en la base de datos."
    
    # Crear una lista de diccionarios combinando los nombres, cantidades e IDs
    productos_finales = []
    for i, producto in enumerate(productos_con_id):
        productos_finales.append({
            'nombre': nombres_productos[i],
            'quantity': cantidades[i],
            'product_instance_id': producto['id']  # Asumiendo que 'producto' es un diccionario con el campo 'id'
        })
    
    
    order_json = build_json(productos_finales,[], User(user_name='andres',user_phone='11111111',user_address='esta direcccion'),12,5,5000,'prueba de wps')
    
    
    def convertir_pedido(productos):
        resultado = []
        for producto in productos:
            linea = f"- {producto['nombre']} x *{producto['quantity']}* =  *$0.00*"
            resultado.append(linea)
        return "\n".join(resultado)
    
    chabot_instance.create_temp_order(wsp_id=wsp_id,json_data=order_json)
    return f"Listo papi, Ya tengo tu pedido registrado \n {convertir_pedido(productos_finales)} \n {get_my_data(wsp_id)} \n\n si todo es correcto porfa ingresa la palabra confirmar para enviarlo a preparacion"



def generar_mensaje_pedido(pedido):
    # Verificar que el pedido contenga productos
    if not pedido['pedido_temporal']['order_products']:
        return "El carrito está vacío. Agrega productos antes de enviar el pedido."

    # Inicializar el mensaje
    mensaje = 'Hola tienes un pedido en proceso si vas a realizar otro o necesitas eleminarlo escribe *cancelar* o "confirmar para seguir con el \n"  \n *PRODUCTOS* \n'
    
    # Recorrer los productos y agregar su información al mensaje
    for producto in pedido['pedido_temporal']['order_products']:
        nombre = producto['nombre']
        cantidad = producto['quantity']
        precio = producto.get('price', 0)  # Suponer que el precio puede no estar en los datos
        mensaje += f"- {nombre} x *{cantidad}* = *${precio:,.2f}*\n"
    
    # Añadir el total al mensaje (en este caso asumimos que el total está en el 'delivery_price' como ejemplo)
    total = pedido['pedido_temporal']['delivery_price']  # Usar el precio del delivery como ejemplo de total
    mensaje += f"*Total: ${total:,.2f}*\n"
    
    # Añadir notas adicionales si existen
    notas = pedido['pedido_temporal'].get('order_notes')
    if notas:
        mensaje += f"*Notas adicionales*: {notas}\n"
    
    return mensaje




def extraer_datos_usuario(cadena: str) -> dict:
    # Expresión regular para extraer los datos
    patron = r"Nombre:\s*(?P<name>.+)\s*Teléfono:\s*(?P<phone>\d+)\s*Dirección:\s*(?P<address>[\w\s#-]+)\s*Ciudad:\s*(?P<city>[\w\s]+)\s*Barrio:\s*(?P<neighborhood>[\w\s]+)"
    
    # Buscar coincidencias
    coincidencias = re.search(patron, cadena)
    
    print(patron)
    
    if coincidencias:
        # Limpiar los valores extraídos (eliminar espacios o saltos de línea al inicio y final)
        return {
            "user_name": coincidencias.group("name").strip(),
            "user_phone": coincidencias.group("phone").strip(),
            "user_address": coincidencias.group("address").strip(),
            "city": coincidencias.group("city").strip(),  # Incluido por si se necesita
            "neighborhood": coincidencias.group("neighborhood").strip()
        }
    else:
        # Retornar un diccionario vacío si no se encuentran datos
        return {}
    




def confirm_order(wsp_id:str,data):
    chatbot_instance = Products()
    
    json_data = data[0]
    
    order_id = chatbot_instance.insert_order(
        json_data["pedido_temporal"]["order_products"],
        json_data["pedido_temporal"]["order_aditionals"],
        json_data["pedido_temporal"]['user_data'],
        json_data["pedido_temporal"]['site_id'],
        json_data["pedido_temporal"]['payment_method_id'],
        json_data["pedido_temporal"]['delivery_person_id'],
        json_data["pedido_temporal"]["order_notes"])
    
    
    if order_id:
        chatbot_instance.deleteMyTempOrder(wsp_id)
    return order_id

    



@chat_router.post('/chat', dependencies=[Depends(verify_api_key)])
def chatbot(userInput: UserInput):
    
    def replace_variables(text):
        pattern = re.compile(r'\{(\w+)\}')  # Patrón para identificar variables dentro de llaves
        return pattern.sub(lambda match: computed_variables(userInput.client_id).get(match.group(1), f"{match.group(0)}"), text)
    # Cargar datos de un archivo JSON loca


    with open('data_patterns.json', 'r') as file:
        datos = json.load(file)
        
        
    if not data_responses.get(userInput.client_id):
            update_last_response('hola', userInput.client_id)
    chatbot_instance = Products()
    
    I = chatbot_instance.i_am_registered(userInput.client_id)
    
    

    
    
    
    if (userInput.answer.strip().startswith('Resgistrame')):
        print('here')
        user = extraer_datos_usuario(userInput.answer.replace('*',''))
        print(user)
        
        if user:
            created_user =  chatbot_instance.create_temp_user(user["user_name"],user["user_phone"],user["user_address"],userInput.client_id)
            return {"response":f"Listo *{user['user_name'].capitalize()}* Tu registro ha sido exitoso\n como te gustaria proceder?\n, Te armamos un pedido?\n, deseas consultar el estado de tu orden?\n"}
    

    if not I:
        for intent in datos:
            if intent["intent"] == "no registrado":   
                data =  random.choice(intent["data"]["responses"])
                clean = replace_variables(data)
                return {"response":clean}
    


   
    
    
    my_current_order = chatbot_instance.i_have_temp_order(userInput.client_id)
    
    if (my_current_order and userInput.answer.lower().strip().startswith('cancelar')):
        chatbot_instance.deleteMyTempOrder(userInput.client_id)
        return {"response":"listo vamos desde cero"}
    
    if (my_current_order and userInput.answer.strip().lower().startswith('confirmar')):
        response = confirm_order(userInput.client_id,my_current_order)
        output = replace_variables("Listo {nombre} Tu pedido ha sido resitrado exitoxamente con este codigo puedes rastrearlo en https://salchimonster.com/rastrear-pedido  *Tu codigo* " + response )
        return {"response":f"Listo {output}"}
    
    
    
    if my_current_order:
        return {"response":generar_mensaje_pedido(my_current_order[0])}

    if  userInput.answer.strip().startswith("Mi pedido:"):
       return {"response":extraer_productos(userInput.answer,userInput.client_id)}
    
    
    


    # Generar respuesta inicial
    response = match_pattern(userInput.answer, userInput.client_id, datos)

    # Buscar y reemplazar variables en la respuesta
    

    # Aplicar reemplazo de variables a la respuesta
    response = replace_variables(response)

    return {"response": response}


init_data()


