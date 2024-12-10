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
        "delivery_person_id": delivery_price,
        "payment_method_id": payment_method_id,
        "delivery_price": delivery_price,
        "order_notes": order_notes,
        "user_data": {
            "user_name": user.user_name,
            "user_phone": user.user_phone,
            "user_address": user.user_address
        },
        "order_aditionals": order_aditionals,
        "inserted_by":1082
        # Agregar los adicionales
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
            "*Salchimonster Usaquen* - Carrera 19 #150-69\n\n"
            
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
            "*Montes*\n"
            "*Chapinero*\n"
            "*Usaquen*\n\n"
            "⏰ Horario: Lunes a domingo 12:00 PM a 11:30 PM\n\n"
            
            "*🔥 SEDE MEDELLÍN LAURELES 🔥*\n"
            "*Laureles*\n\n"
            "⏰ Horario: Lunes a jueves 5:00 PM a 11:30 PM\n"
            "⏰ Horario: Viernes a domingo 12:00 PM a 11:30 PM\n"
        ),

        "carta":(f"https://bot.salchimonster.com/ubicacion/{user_id} "),
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
    *Nombre*: {user["user_name"]}
    *Direccion*: {user["user_address"]}
    *Telefono*: {user["user_phone"]}
    *Metodo de pago*: {user["payment_method"]}
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
    # # Comprueba si la información del usuario comienza con la cadena de inicio esperada
    # if user_info.startswith('registro cliente'):
    #     # Separa la información en partes usando el salto de línea
    #     info_parts = user_info.split('\n')

    #     # Ignora la primera línea, que es el título, y comienza a procesar desde la segunda línea
    #     client_data = {}
    #     for part in info_parts[1:]:  # Comienza desde el segundo elemento de la lista
    #         key, value = part.split(': ')
    #         client_data[key.strip().lower()] = value.strip()
        
    #     # Suponiendo que 'data' es un diccionario que ya ha sido inicializado en algún lugar de tu código
    #     data["clientes_registrados"][client_id] = client_data  # Usar el ID proporcionado
    #     save_data(data)  # Asegúrate de que la función save_data esté definida y funcione correctamente
    #     return "¡Registro completado exitosamente! Aquí está tu ID de cliente: " + client_id
    
    # Retorna un mensaje si el formato no es correcto

    # Remueve los asteriscos y emojis
    temp_data = re.sub(r'[\*😊📱📍💰]', '', user_info)

    # Divide las líneas
    parts = temp_data.split('\n')

    # Mapea cada línea para crear el objeto clave-valor
    data_object = {}
    for part in parts:
        key_value = part.split(":")
        if len(key_value) == 2:
            key, value = key_value
            key = key.strip()  # Limpia espacios alrededor de la clave
            value = value.strip()  # Limpia espacios alrededor del valor
            data_object[key] = value  # Asigna clave-valor

    print(data_object)

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

                
    update_last_response("Un asesor lo atendera en breve, muchas gracias",client_id)
    return "Un asesor lo atendera en breve, muchas gracias"





def extraer_productos(texto, wsp_id):
    # Verifica que el texto empiece con "Mi pedido:"
    if not texto.strip().startswith("Mi pedido:"):
        return "El texto no comienza con 'Mi pedido:'"
    
    # Limpiar el texto eliminando los asteriscos y reemplazando comas por puntos en los precios
    texto_limpio = texto.replace('*', '').replace(',', '.')

    # Diccionario para almacenar los productos y sus categorías
    pedido = {
        "productos": [],
        "salsas": [],
        "adicionales": [],
        "cambios": []
    }

    # Identificar las secciones del texto
    secciones = {
        "productos": re.search(r'PRODUCTOS(.*?)(SALSAS|ADICIONALES|CAMBIOS|$)', texto_limpio, re.DOTALL),
        "salsas": re.search(r'SALSAS(.*?)(ADICIONALES|CAMBIOS|$)', texto_limpio, re.DOTALL),
        "adicionales": re.search(r'ADICIONALES(.*?)(CAMBIOS|$)', texto_limpio, re.DOTALL),
        "cambios": re.search(r'CAMBIOS(.*)', texto_limpio, re.DOTALL),
        "notas_adicionales": re.search(r'NOTAS ADICIONALES:(.*)', texto_limpio, re.DOTALL)
    }

    # Expresión regular para extraer el nombre del producto, la cantidad y otras descripciones si es necesario
    pattern = re.compile(r'-\s(.+?)\sx\s(\d+)\n')

    for categoria, match in secciones.items():
        if match and categoria != "notas_adicionales":  # Excepto notas adicionales
            texto_seccion = match.group(1)
            matches = pattern.findall(texto_seccion)
            for producto, cantidad in matches:
                pedido[categoria].append({"producto": producto.strip(), "cantidad": int(cantidad)})
        elif categoria == "notas_adicionales" and match:
            pedido["notas_adicionales"] = match.group(1).strip()

    if not pedido["productos"]:
        return "No se encontraron productos en el texto."
    
    
    
    
    if not pedido["productos"]:
        return "No se encontraron productos en el texto."
    



    nombres_productos = [match["producto"].strip() for match in pedido["productos"]]
    cantidades_productos = [int(match["cantidad"]) for match in pedido["productos"]]

    # Crear listas separadas para adiciones, salsas y cambios junto con sus cantidades
    nombres_adiciones = [match["producto"].strip() for match in pedido["adicionales"] ]
    cantidades_adiciones = [int(match["cantidad"]) for match in pedido["adicionales"] ]

    nombres_salsas = [match["producto"].strip() for match in pedido["salsas"] ]
    cantidades_salsas = [int(match["cantidad"]) for match in pedido["salsas"] ]

    nombres_cambios = [match["producto"].strip() for match in pedido["cambios"]]
    cantidades_cambios = [int(match["cantidad"]) for match in pedido["cambios"]]

    # Crear instancia del manejador de productos
    chabot_instance = Products()

    # Obtener IDs y detalles de los productos principales
    productos_con_id = chabot_instance.getProductsIdByNames(nombres_productos, site_id=1, restaurant_id=1)

    # Crear instancia del manejador de adiciones
    adiciones_instance = Products()


    adiciones_con_id = []
    salsas_con_id = []
    cambios_con_id = []

    if (nombres_adiciones):
        adiciones_con_id = adiciones_instance.getAditionaldByNames(nombres_adiciones, site_id=1)

    if (nombres_salsas):
        salsas_con_id = adiciones_instance.getAditionaldByNames(nombres_salsas, site_id=1)

    if (nombres_cambios):
    # Obtener IDs y detalles de los cambios
        cambios_con_id = adiciones_instance.getAditionaldByNames(nombres_cambios, site_id=1)
    

    



    if not productos_con_id:
        return "No se encontraron productos coincidentes en la base de datos."




    adiciones_finales = []

    if adiciones_con_id:  # Verifica si la lista no está vacía
        for i, producto in enumerate(adiciones_con_id):
            adiciones_finales.append({
                'nombre': producto["additional_item_name"],
                'quantity': 1,
                'aditional_item_instance_id': producto['id'],
                'price': producto['price'],
                'tag':'ADICION'
            })

    if salsas_con_id:  # Verifica si la lista no está vacía
        for i, producto in enumerate(salsas_con_id):
            adiciones_finales.append({
                'nombre': producto["additional_item_name"],
                'quantity': 1,
                'aditional_item_instance_id': producto['id'],
                'price': producto['price'],
                'tag':'SALSA'
            })
            
    if cambios_con_id:  # Verifica si la lista no está vacía
        for i, producto in enumerate(cambios_con_id):
            adiciones_finales.append({
                'nombre': producto["additional_item_name"],
                'quantity': 1,
                'aditional_item_instance_id': producto['id'],
                'price': producto['price'],
                'tag':'CAMBIO'
            })
        
    # Crear una lista de diccionarios combinando los nombres, cantidades e IDs
    productos_finales = []
    for i, producto in enumerate(productos_con_id):
        productos_finales.append({
            'nombre': producto["product_name"],
            'quantity': cantidades_productos[i],
            'product_instance_id': producto['id'],
            'price': producto['price'],
            
          # Asumiendo que 'producto' es un diccionario con el campo 'id'
        })
    
    print(productos_con_id)


    I = chabot_instance.i_am_registered(wsp_id)

    location = chabot_instance.get_my_neighborhood(I[0]['user_city'],I[0]['user_barrio'])

    site_id = location[0]["site_id"]
    delivery_price = location[0]["delivery_price"]
    barrio = location[0]["name"]

    payment_methods = [
            {
                "id": 5,
                "name": "TARJETA (DATAFONO)"
            },
            {
                "id": 6,
                "name": "TRANSFERENCIA"
            },
            {
                "id": 7,
                "name": "RECOGER EN LOCAL"
            },
            {
                "id": 8,
                "name": "EFECTIVO"
            }
        ]

    user_payment_method = I[0]["payment_method"].strip().lower()  # Limpia y convierte a minúsculas
    selected_payment_method_id = 5
    for payment in payment_methods:
        if payment["name"].strip().lower() == user_payment_method:
            selected_payment_method_id = payment["id"]
            break 

    
    order_json = build_json(productos_finales,adiciones_finales, User(user_name=I[0]['user_name'],user_phone=I[0]['user_phone'],user_address=I[0]['user_address'] + " Barrio  " + barrio),site_id,selected_payment_method_id,round(delivery_price) ,pedido.get("notas_adicionales", "Sin notas"))
    
    
    def convertir_pedido(productos):
        resultado = []
        total = 0
        for producto in productos:
            subtotal = producto['quantity'] * producto['price']
            total += subtotal
            linea = f"{producto['nombre']} x *{producto['quantity']}* = ${int(subtotal):,}\n"
            resultado.append(linea.title())  # Capitaliza la primera letra de cada palabra
        
        
        return "\n".join(resultado)
    

    def convertir_adicionales(adiciones):
        
        # Inicializar mensajes
        salsas_message = ""
        adiciones_message = ""
        cambios_message = ""

        salsas = []
        adicionales = []
        cambios = []


        for adicion in adiciones:
            if adicion["tag"] == "ADICION":
                adicionales.append(adicion)
            elif adicion["tag"] == "CAMBIO":
                cambios.append(adicion)
            elif adicion["tag"] == "SALSA":
                salsas.append(adicion)

        # Procesar salsas si no está vacío
        if salsas:
            salsas_message = "\n*Salsas*\n"
            for salsa in salsas:
                message = salsa["nombre"]
                salsas_message += (message + '\n')

        # Procesar adicionales si no está vacío
        if adicionales:
            adiciones_message = "\n*Adiciones*\n"
            for adicion in adicionales:
                message = adicion["nombre"] + " x " + str(adicion["price"]) 
                adiciones_message += (message + '\n')

        # Procesar cambios si no está vacío
        if cambios:
            cambios_message = "\n*Cambios*\n"
            for cambio in cambios:
                message = cambio["nombre"] + " x " + str(cambio["price"])
                cambios_message += (message + '\n')

        # Combinar todos los mensajes no vacíos
        final_message = salsas_message + adiciones_message + cambios_message

        
        print(final_message)

        return final_message
    

    def calcular_total(productos, adicionales, delivery_price):
        subtotal_productos = 0
        subtotal_adicionales = 0

        # Calcular el subtotal de los productos
        for producto in productos:
            subtotal_productos += producto['quantity'] * producto['price']
        
        # Calcular el subtotal de los adicionales
        for adicional in adicionales:
            subtotal_adicionales += adicional['quantity'] * adicional['price']

        # Sumar los subtotales y el precio del domicilio
        subtotal = subtotal_productos + subtotal_adicionales
        total = subtotal + delivery_price

        # Formatear el mensaje final con los precios
        mensaje = f"""
        Subtotal Productos: ${int(subtotal_productos):,}
        Subtotal Adiciones: ${int(subtotal_adicionales):,}
        Precio del Domicilio: ${int(delivery_price):,}
        Total Pedido: ${int(total):,}
            """
            
        return mensaje
 
    chabot_instance.create_temp_order(wsp_id=wsp_id,json_data=order_json)
    return f"""Listo papi, Ya tengo tu pedido registrado\n\n{convertir_pedido(productos_finales)} 
    {convertir_adicionales(adiciones_finales)} {calcular_total(productos_finales,adiciones_finales,delivery_price)}  {get_my_data(wsp_id)}\nsi todo es correcto porfa ingresa la palabra *confirmar* para enviarlo a preparacion si necesitas cambiar la direccion registrada o el metodo de pago puedes hacerlo aqui https://bot.salchimonster.com/registro/"""


def generar_mensaje_pedido(data):
    # Inicializar secciones del mensaje
    productos_message = ""
    mis_datos_message = ""
    total_final = 0  # Para calcular el total final

    # Procesar productos desde el campo pedido_temporal["pe_json"]
    if "pe_json" in data["pedido_temporal"]:
        productos_message += "Listo papi!!, seria asi, me digiste\n\n🍔 *PRODUCTOS*\n"
        for product in data["pedido_temporal"]["pe_json"]:
            cantidad = product["pedido_cantidad"]
            precio = float(product["pedido_precio"])
            nombre_producto = product["pedido_nombre_producto"]
            total_producto = cantidad * precio
            productos_message += f"🍽️ *{cantidad}* - {nombre_producto} = ${total_producto:,.2f}\n"
            total_final += total_producto

    # Procesar mis datos
    if "user_data" in data["pedido_temporal"]:
        user_data = data["pedido_temporal"]["user_data"]
        mis_datos_message += "\n📝 *TUS DATOS PAPI*\n"
        mis_datos_message += f"👤 Nombre: {user_data.get('user_name', 'Nombre no disponible')}\n"
        mis_datos_message += f"📞 Teléfono: {user_data.get('user_phone', 'Teléfono no disponible')}\n"
        mis_datos_message += f"🏠 Dirección: {user_data.get('user_address', 'Dirección no disponible')}\n"
        mis_datos_message += f"🌆 Ciudad: {user_data.get('user_city', 'Ciudad no disponible')}\n"
        mis_datos_message += f"🏘️ Barrio: {user_data.get('user_neigborhood', 'Barrio no disponible')}\n"
        mis_datos_message += f"💳 Método de Pago: {user_data.get('user_payment', 'Método de pago no disponible')}\n"

    # Procesar notas
    if "order_notes" in data["pedido_temporal"]:
        notas = data["pedido_temporal"]["order_notes"]
        mis_datos_message += "\n📝 *NOTAS PARA LA COCINA*\n"
        mis_datos_message += f"{notas}\n\n"

    # Añadir el total de precio de entrega si existe
    if "delivery_price" in data["pedido_temporal"]:
        total_final += data["pedido_temporal"]["delivery_price"]
        mis_datos_message += f"🚚 Precio del Domicilio: ${data['pedido_temporal']['delivery_price']:,}\n"

    # Añadir el total final
    total_message = f"\n💰 *TOTAL FINAL: ${total_final:,.2f}*\nsi todo es correcto escribe *confirmar* para salir volando con tu pedido o *cancelar* para ignorar este y hacer otro."

    # Construir el mensaje final
    final_message = productos_message + mis_datos_message + total_message
    return final_message

def extraer_datos_usuario(cadena: str) -> dict:
    # Remueve los asteriscos y emojis
    temp_data = re.sub(r'[\*\U0001F600-\U0001F64F]', '', cadena)  # Añadido rango de emojis

    # Divide las líneas
    parts = temp_data.split('\n')[1:]

    # Mapea cada línea para crear el objeto clave-valor
    data_object = {}
    for part in parts:
        key_value = part.split(":")
        if len(key_value) == 2:
            key, value = key_value
            key = key.strip()  # Limpia espacios alrededor de la clave
            value = value.strip()  # Limpia espacios alrededor del valor
            data_object[key] = value  # Asigna clave-valor
        else:
            print(f"Formato inválido detectado en la línea: {part}")

    return data_object

def confirm_order(wsp_id:str,data):
    chatbot_instance = Products()
    
    json_data = data[0]
    
    order_id = chatbot_instance.insert_order(
        json_data["pedido_temporal"]["order_products"],
        json_data["pedido_temporal"]["order_aditionals"],
        json_data["pedido_temporal"]['user_data'],
        json_data["pedido_temporal"]['site_id'],
        json_data["pedido_temporal"]['payment_method_id'],
        json_data["pedido_temporal"]['delivery_price'],
        json_data["pedido_temporal"]["order_notes"],
        json_data["pedido_temporal"]["pe_json"],
        json_data["pedido_temporal"]["pe_site_id"])

    if order_id:
        chatbot_instance.deleteMyTempOrder(wsp_id)
    return order_id

    



@chat_router.post('/chat', dependencies=[Depends(verify_api_key)])
def chatbot(userInput: UserInput):
    
    def replace_variables(text):
        pattern = re.compile(r'\{(\w+)\}')  # Patrón para identificar variables dentro de llaves
        return pattern.sub(lambda match: computed_variables(userInput.client_id).get(match.group(1), f"{match.group(0)}"), text)

    with open('data_patterns.json', 'r') as file:
        datos = json.load(file)
         
    if not data_responses.get(userInput.client_id):
            update_last_response('hola', userInput.client_id)
    chatbot_instance = Products()
    
    my_current_order = chatbot_instance.i_have_temp_order(userInput.client_id)
    
    if (my_current_order and userInput.answer.lower().strip().startswith('cancelar')):
        chatbot_instance.deleteMyTempOrder(userInput.client_id)
        return {"response":f"listo vamos desde papi Explora nuestra carta automática aquí: https://bot.salchimonster.com/carta/{userInput.client_id}"}
    
    
    if (my_current_order and userInput.answer.strip().lower().startswith('confirmar')):
        response = confirm_order(userInput.client_id,my_current_order)
        output = replace_variables(" {nombre} Tu pedido ha sido resitrado exitoxamente con este codigo puedes rastrearlo en https://salchimonster.com/rastrear-pedido  *Tu codigo* " + response )
        return {"response":f"Listo {output}"}
    
    
    
    if my_current_order:
        return {"response":generar_mensaje_pedido(my_current_order[0])}

    response = match_pattern(userInput.answer, userInput.client_id, datos)

    response = replace_variables(response)

    return {"response": response}


init_data()


