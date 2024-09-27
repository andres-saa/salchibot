from fastapi import APIRouter

from models.products import Products


product_router = APIRouter()




@product_router.get('/products/{restaurant_id}')
def get_products (restaurant_id:int):
    product_instance = Products()
    return product_instance.get_all_products(restaurant_id)