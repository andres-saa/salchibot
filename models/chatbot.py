from typing import Optional
from pydantic import BaseModel
import psycopg2
from dotenv import load_dotenv
import os
from models.db import Db as DataBase
from schema.bot_schema import train,Intent



class Chatbot:
    def __init__(self):
        self.db = DataBase()

    def get_patters(self):
        query =  self.db.build_select_query(table_name='chatbot.intent_data_view',fields=['*'])
        return self.db.fetch_all(query)
    

    def get_intents(self):
        query =  self.db.build_select_query(table_name='chatbot.intents',fields=['*'])
        return self.db.fetch_all(query)
    
    def train(self,data:train):
        lista = [[]]
        for pattern in data.paterns:
            pattern_id = self.db.execute_query('insert into chatbot.patterns (pattern) values (%s) returning id',[pattern],fetch=True)
            
            if(pattern_id[0]['id'] and data.intent_id):
                self.db.execute_query('INSERT INTO chatbot.intent_patterns( intent_id, pattern_id) VALUES (%s, %s) ;',[data.intent_id,pattern_id[0]['id']])
            

        for response in data.responses:
            response_id = self.db.execute_query('insert into chatbot.responses (response) values (%s) returning id',[response],fetch=True)
            if(response_id[0]['id'] and data.intent_id):
                self.db.execute_query('INSERT INTO chatbot.intent_responses( intent_id, response_id) VALUES (%s, %s);',[data.intent_id,response_id[0]['id']])


    def create_tag(self,data:Intent):
        query, params = self.db.build_insert_query('chatbot.intents',data,'id')
        tag_id = self.db.execute_query(query=query,params=params)
        return tag_id 
    

    def get_tags(self):
        query = self.db.build_select_query(table_name='chatbot.intents',fields='*',condition='',order_by='id')
        data = self.db.execute_query(query=query)
        return data
       

    def close_connection(self):
        self.db.conn.close()