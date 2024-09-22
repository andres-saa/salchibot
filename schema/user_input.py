from pydantic import BaseModel




class UserInput(BaseModel):
    answer:str
    question:str