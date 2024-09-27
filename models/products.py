from typing import Optional
from pydantic import BaseModel
import psycopg2
from dotenv import load_dotenv
import os
from models.db import Db as DataBase



class Products:
    def __init__(self):
        self.db = DataBase()

    def get_all_products(self,restaurtan_id):
        query =  self.db.build_select_query(table_name=' inventory.bot_categories',fields=['*'],condition=f'resturant_id = {restaurtan_id}')
        return self.db.fetch_all(query)
    

    def close_connection(self):
        self.db.conn.close()