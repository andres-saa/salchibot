from fastapi import FastAPI
from route.chat import chat_router


app = FastAPI()
app.include_router(chat_router)


