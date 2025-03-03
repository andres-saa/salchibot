from typing import Optional
from pydantic import BaseModel
import psycopg2
from dotenv import load_dotenv
import os
from models.db import Db as DataBase
import json
import requests


class Products:
    def __init__(self):
        self.db = DataBase()

    def get_all_products(self,restaurtan_id):
        query =  self.db.build_select_query(table_name=' inventory.bot_categories',fields=['*'],condition=f'resturant_id = {restaurtan_id}')
        return self.db.fetch_all(query)
    

   
    def getProductsIdByNames(self, names: list[str], site_id: int, restaurant_id: int):
    # Construye las condiciones ILIKE para cada nombre en la lista
        ilike_conditions = " OR ".join([f"product_name ILIKE '%{name}%'" for name in names])
        
        # Arma la consulta final
        query = self.db.build_select_query(
            'inventory.complete_product_instances',
            ['*'],
            condition=f'({ilike_conditions}) AND site_id = {site_id} AND restaurant_id = {restaurant_id}'
        )
        
        return self.db.fetch_all(query)

    

    def getAditionaldByNames(self, names: list[str], site_id: int):
        # Construye las condiciones LIKE para cada nombre en la lista
        like_conditions = " OR ".join([f"additional_item_name ILIKE '%{name}%'" for name in names])
        
        # Arma la consulta final con DISTINCT
        query = self.db.build_select_query(
            'orders.vw_additional_item_details_bot',
            ['DISTINCT ON (additional_item_name) id', 'price', 'additional_item_name'],
            condition=f'({like_conditions}) AND site_id = {site_id}'
        )
        
        return self.db.fetch_all(query)
    
    

    def create_temp_order(self, wsp_id: str, json_data: dict):
        
        # Convertir el JSON a texto
        
        self.deleteMyTempOrder(wsp_id)
        
        
        json_text = json.dumps(json_data)
        
        class Data(BaseModel):
            id_wsp_customer: str
            pedido_temporal: str  # Almacenar como string en lugar de dict
        
        # Construir la consulta con el JSON convertido a texto
        query, params = self.db.build_insert_query(
            'orders.temp_order',
            Data(id_wsp_customer=wsp_id, pedido_temporal=json_text),
            returning='id'
        )
        
        # Ejecutar la consulta y retornar el resultado
        data = self.db.execute_query(query, params, fetch=True)
        return data
            # print(data(id_wsp_customer=wsp_id, pedido_temporal=json_data))


    def create_temp_user(self, user_name: str, user_phone: str, user_address: str, user_city: str, user_barrio: str, id_wsp_customer: str, payment_method: str):
        class User(BaseModel):
            user_name: str
            user_phone: str
            user_address: str
            id_wsp_customer: str
            user_city: str
            user_barrio: str
            payment_method: str  # Almacenar como string en lugar de dict

        # Crear el objeto User
        user = User(
            user_name=user_name,
            user_phone=user_phone,
            user_address=user_address,
            id_wsp_customer=id_wsp_customer,
            user_city=user_city,
            user_barrio=user_barrio,
            payment_method=payment_method
        )

        # Construir la consulta SQL para insertar o actualizar si el ID ya existe
        query = """
        INSERT INTO orders.temp_user (user_name, user_phone, user_address, user_city, user_barrio, id_wsp_customer, payment_method)
        VALUES (%(user_name)s, %(user_phone)s, %(user_address)s, %(user_city)s, %(user_barrio)s, %(id_wsp_customer)s, %(payment_method)s)
        ON CONFLICT (id_wsp_customer) 
        DO UPDATE SET
            user_name = EXCLUDED.user_name,
            user_phone = EXCLUDED.user_phone,
            user_address = EXCLUDED.user_address,
            user_city = EXCLUDED.user_city,
            user_barrio = EXCLUDED.user_barrio,
            payment_method = EXCLUDED.payment_method
        RETURNING id;
        """

        # Ejecutar la consulta con los parámetros del objeto User
        params = user.dict()  # Convertir el objeto en un diccionario de parámetros
        id = self.db.execute_query(query, params, fetch=True)
        
        return id

    

    def i_have_temp_order(self, customer_id: str):
        # Modificamos la consulta para obtener el último registro basado en el campo "created_at" o un identificador único
        query = self.db.build_select_query(
            'orders.temp_order',
            ["*"],
            f"id_wsp_customer = '{customer_id}'",
            order_by="id DESC",  # Puedes cambiar 'created_at' por otro campo que haga sentido en tu base de datos
            limit=1
        )
        my_order = self.db.execute_query(query, fetch=True)
        return my_order
    
    
    def i_am_registered(self,customer_id:str):
        query = self.db.build_select_query('orders.temp_user',["*"],f"id_wsp_customer = '{customer_id}'")
        I = self.db.execute_query(query,fetch=True)
        return I
    

    def get_my_neighborhood(self, city_name, barrio_name):
        # Construimos el query correctamente con TRIM e ILIKE para ignorar mayúsculas y espacios
        query = self.db.build_select_query(
            'orders.city_barrios', 
            ["*"], 
            f"TRIM(city_name) ILIKE TRIM('{city_name}') AND TRIM(name) ILIKE TRIM('{barrio_name}')"
        )

        # Ejecutamos la consulta

     
        mi_barrio = self.db.execute_query(query=query, fetch=True)

        return mi_barrio

    
    
    
    def deleteMyTempOrder(self,customer_id:str):
        query = self.db.build_delete_query('orders.temp_order',f"id_wsp_customer = '{customer_id}'")
        self.db.execute_query(query)
        
    def insert_order(self, order_products: list, order_aditionals: list, user:dict, site_id: int, payment_method_id: int, delivery_price: int, order_notes: str, pe_json:object, pe_site_id:int, total:int, order_type_id:int, placa:str):
        # Definir la URL del endpoint
        URI = 'https://backend.salchimonster.com'
        url = f"{URI}/order"

        # Crear el cuerpo del pedido con la estructura correcta
        order = {
            "order_products": [],
            "site_id": site_id,
            "delivery_person_id": 4,
            "payment_method_id": payment_method_id,
            "delivery_price": delivery_price,
            "order_notes": order_notes,
            "user_data": {
                "user_name": user['user_name'],
                "user_phone": user['user_phone'],
                "user_address": user['user_address']
            },
            "order_aditionals": order_aditionals,
            "inserted_by":1082,  # Agregar los adicionales
            "pe_json":pe_json,
            "pe_site_id":pe_site_id,
            "total":total,
            "order_type_id":order_type_id,
            "placa":placa
        }


     

      
        response = requests.post(url, json=order)


        print(response)
        if response.status_code == 200:
            print("Order placed successfully!")
            return response.json()
        else:
            print(f"Failed to place order. Status code: {response.status_code}")
            print(response.text) 
    
    def close_connection(self):
        self.db.conn.close()