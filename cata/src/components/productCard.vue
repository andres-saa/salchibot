<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';

import { formatPesos } from '@/services/services/formatoPesos';
// Definir el uso de la tienda de carrito
const cartStore = useCartStore()

// Props que recibe el componente
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

// Estado local para manejar la selección del producto
const selected = ref(false);

// Computed para obtener la cantidad del producto en el carrito
const quantity = computed(() => {
    const productInCart = cartStore.cart.products.find(p => p.product.id === props.product.id);
    return productInCart ? productInCart.quantity : 0;
});

// Función para agregar una unidad del producto al carrito
const addProductToCart = () => {
    cartStore.addProduct(props.product, 1);
}

// Función para eliminar todas las instancias del producto del carrito
const removeAllProductFromCart = () => {
    const productInCart = cartStore.cart.products.find(p => p.product.id === props.product.id);
    if (productInCart) {
        cartStore.removeProduct(props.product, productInCart.quantity);
    }
}

// Función para disminuir la cantidad de producto en el carrito
const decrementQuantity = () => {
    if (quantity.value > 1) {
        cartStore.removeProduct(props.product, 1);
        return
    } if (quantity.value == 1) {
        removeAllProductFromCart();
        selected.value = !selected.value;
    }
}

// Función para manejar el cambio de selección
const toggleSelection = () => {
    selected.value = !selected.value;
    if (selected.value) {
        addProductToCart(); // Agregar producto al seleccionarlo
    } else {
        removeAllProductFromCart(); // Eliminar todas las instancias del producto al deseleccionarlo
    }
}

onMounted(() => {
    cartStore.products?.find(p => p.product) ? selected.value = true : false
})


</script>

<template>


    <div class="container"
        :class="cartStore.cart.products?.find(p => p?.product?.id == props.product?.id) ? 'selected' : ''">
        <div class="click-area" @click="toggleSelection">


            <div class="foto">
                <img v-if="!props.product.tag" class="foto-img"
                    :src="`https://backend.salchimonster.com/read-product-image/300/${props.product.product_name}`"
                    alt="">

                <img v-else class="foto-img" src="/public//icons/logo.png" alt="">

                <div style="display: flex;flex-direction: column;align-items: end;">
                    <div>
                        <p v-if="props.product?.price" class="price">{{ formatPesos(props.product.price) }}</p>
                    </div>

                    <div>
                        <p style="text-align: end;" class="name">{{ props.product.product_name }}</p>
                    </div>
                </div>



            </div>

            <div class="texto">


                <div>
                    <p class="description">{{ props.product.product_description }}</p>
                </div>


            </div>

        </div>

        <!-- Botones para manejar la cantidad -->
        <div class="quantity"
            :class="cartStore.cart.products?.find(p => p?.product?.id == props.product?.id) ? 'quantity-selected' : ''">
            <button class="btn_quantity" @click="decrementQuantity" :disabled="quantity === 0">

                <img v-if="quantity < 2" style="" class="trash" src="/public/icons/trash.svg" alt="">
                <span v-else> <b>-</b> </span>
            </button>
            <input readonly v-model="quantity" class="input-quantity" type="text">
            <button class="btn_quantity" @click="addProductToCart"> + </button>
        </div>
    </div>
</template>



<style scoped>
.container {
    width: max-content;

    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 1rem 20px rgba(0, 0, 0, 0.295);
    padding: 1rem;
    height: 100%;
    min-height: 10rem;
    width: 100%;
    /* max-width: 15rem; */
    border-radius: .5rem;
    background-color: #fff;
    position: relative;
    overflow: hidden;
    transition: all ease .2s
}


.click-area {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: start; */
    /* align-items: start; */
    /* display: flex; */
}

.foto {
    display: flex;
    justify-content: space-between;
}

.quantity {
    display: flex;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    transition: all ease .3s;
    transform: translateY(10rem);
    height: 4rem;
}

.quantity-selected {

    transform: translateY(0);
}

.btn_quantity {
    width: 4rem;
    background-color: rgba(0, 0, 0, 0.767);
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 300%;
    height: 4rem;
}

.selected {
    background-color: rgb(0, 255, 191);
}

.description {
    text-justify: justify;
    text-transform: lowercase;

    /* margin: 1rem 0; */
    /* background-color: red; */
}

.description::first-letter {
    text-transform: uppercase;
}

.price {
    width: min-content;
    font-weight: bold;
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
}

.header {
    display: flex;
    justify-content: end;
    width: 100%;
}

.name {
    font-weight: bold;
    /* font-size: 1.3rem; */
    /* padding: 2rem; */
}

.input-quantity {
    width: 100%;
    aspect-ratio: 1 /1;
    font-weight: bold;
    text-align: center;
    font-size: 300%;
    height: 4rem;

}

.foto-img {
    width: 50%;
    object-fit: contain;
    mix-blend-mode: multiply;
    border-radius: .5rem;
}

.trash {
    height: 60%;
    object-fit: contain;

}
</style>
