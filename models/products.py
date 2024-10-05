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
        # Construye las condiciones LIKE para cada nombre en la lista
        like_conditions = " OR ".join([f"product_name LIKE '%{name}%'" for name in names])
        
        # Arma la consulta final
        query = self.db.build_select_query(
            'inventory.complete_product_instances',
            ['*'],
            condition=f'({like_conditions}) AND site_id = {site_id} AND restaurant_id = {restaurant_id}'
        )
        
        
        return self.db.fetch_all(query)
    

    def create_temp_order(self, wsp_id: str, json_data: dict):
        
        # Convertir el JSON a texto
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


    def create_temp_user(self, user_name: str,user_phone:str, user_address: str,id_wsp_customer:str):
        
        class User(BaseModel):
            user_name: str
            user_phone: str
            user_address: str
            id_wsp_customer:str# Almacenar como string en lugar de dict

        query, params = self.db.build_insert_query(
            'orders.temp_user',
            User(
                user_name=user_name,
                user_phone=user_phone,
                user_address=user_address,
                id_wsp_customer=id_wsp_customer),
            returning='id'
        )
        
        id = self.db.execute_query(query, params, fetch=True)
        return id
    
    

    def i_have_temp_order(self,customer_id:str):
        query = self.db.build_select_query('orders.temp_order',["*"],f"id_wsp_customer = '{customer_id}'")
        my_order = self.db.execute_query(query,fetch=True)
        return my_order
    
    
    def i_am_registered(self,customer_id:str):
        query = self.db.build_select_query('orders.temp_user',["*"],f"id_wsp_customer = '{customer_id}'")
        I = self.db.execute_query(query,fetch=True)
        return I
    
    
    def deleteMyTempOrder(self,customer_id:str):
        query = self.db.build_delete_query('orders.temp_order',f"id_wsp_customer = '{customer_id}'")
        self.db.execute_query(query)
        
    def insert_order(self, order_products: list, order_aditionals: list, user:dict, site_id: int, payment_method_id: int, delivery_price: int, order_notes: str):
        # Definir la URL del endpoint
        URI = 'https://backend.salchimonster.com/'
        url = f"{URI}/order"

        # Crear el cuerpo del pedido con la estructura correcta
        order = {
            "order_products": order_products,
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
            "order_aditionals": order_aditionals  # Agregar los adicionales
        }

        # Realizar la solicitud POST
        response = requests.post(url, json=order)

        # Manejar la respuesta
        if response.status_code == 200:
            print("Order placed successfully!")
            return response.json()
        else:
            print(f"Failed to place order. Status code: {response.status_code}")
            print(response.text) 
    
    def close_connection(self):
        self.db.conn.close()