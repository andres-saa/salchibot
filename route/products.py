from fastapi import APIRouter

from models.products import Products


product_router = APIRouter()




@product_router.get('/products/{restaurant_id}')
def get_products (restaurant_id:int):
    product_instance = Products()
    return product_instance.get_all_products(restaurant_id)



@product_router.get('/user/{wsp_id}')
def get_products (wsp_id:str):
    product_instance = Products()
    return product_instance.i_am_registered(wsp_id)



@product_router.post('/crete-temp-order/{wsp_id}')
def get_products (wsp_id:str, data:dict):
    product_instance = Products()
    return product_instance.create_temp_order(wsp_id,data)