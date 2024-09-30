from fastapi import FastAPI
from route.chat import chat_router
from route.products import product_router
from route.train import train_router
app = FastAPI()
app.include_router(chat_router)
app.include_router(product_router)
app.include_router(train_router)
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
