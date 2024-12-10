<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart';
import { formatPesos } from '@/services/services/formatoPesos';

const cartStore = useCartStore();

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const selected = ref(false);

const quantity = computed(() => {
    const productInCart = cartStore.cart.products.find((p) => cartStore.getProductId(p.product)  === cartStore.getProductId(props.product));
    return productInCart ? productInCart.quantity : 0;
});








const addProductToCart = () => {
    cartStore.addProduct(props.product, 1);

    console.log(cartStore.cart)
}; 

const removeAllProductFromCart = () => {
    cartStore.removeProduct(props.product, quantity.value);
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        cartStore.removeProduct(props.product, 1);
    } else {
        removeAllProductFromCart();
        selected.value = false;
    }
};

const toggleSelection = () => {
    
    if (selected.value) {
       
        removeAllProductFromCart();
    } else {
        addProductToCart();
    }
    selected.value = !selected.value;
};

onMounted(() => {
    const productInCart = cartStore.cart.products.find((p) => cartStore.getProductId(p.product)  === cartStore.getProductId(props.product));
    if (productInCart) {
        selected.value = true
    }
});
</script>


<template>


    <div class="container"
    :class="cartStore.cart.products?.find(p => cartStore.getProductId(p?.product)  == cartStore.getProductId(props.product))? 'selected' : ''">
        <div class="click-area" @click="toggleSelection">


            <div class="foto">
                <img v-if="!props.product.tag" class="foto-img"
                    :src="`https://img.restpe.com/${props.product.productogeneral_urlimagen}`"
                    alt="">

                <img v-else class="foto-img" src="/src/icons/logo.png" alt="">

                <div style="display: flex;flex-direction: column;align-items: end;">
                    <div>
                        <p  class="price">{{ formatPesos(props.product.productogeneral_precio || props.product?.lista_presentacion[0]?.producto_precio) }}</p>
                    </div>

                    <div>
                        <p style="text-align: end;" class="name">{{ props.product.productogeneral_descripcion }}</p>
                    </div>
                </div>



            </div>

            <div class="texto">


                <div>
                    <p class="description">{{ props.product.productogeneral_descripcionweb }}</p>
                </div>


            </div>

        </div>

        <!-- Botones para manejar la cantidad -->
        <div class="quantity"
            :class="cartStore.cart.products?.find(p => cartStore.getProductId(p?.product)  == cartStore.getProductId(props.product))? 'quantity-selected' : ''">
            <button class="btn_quantity" @click="decrementQuantity" :disabled="quantity === 0">

                <img v-if="quantity < 2" style="" class="trash" src="/src/icons/trash.svg" alt="">
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
