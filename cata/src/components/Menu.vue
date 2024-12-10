<script setup>
import { onMounted, ref } from 'vue'
import productCard from './productCard.vue'
import { fetchService } from '@/services/services/fetchService'

import { useCartStore } from '@/stores/cart'
import { formatPesos } from '@/services/services/formatoPesos'
import { URI } from '@/services/services/conection'
import router from '@/router'
import { useRoute, useRouter } from 'vue-router'
import Tag from 'primevue/tag'
import Button from 'primevue/button'



const cart = useCartStore()
const route = useRoute()
const current_pos = ref(0)


const current_categorie = ref(cart?.categories?.[0])

const moveCarousel = (dir) => {
    const maxPosition = (cart.categories.length - 1) * -100

    // Si estamos en el inicio y se intenta mover a la derecha
    if (current_pos.value < 0 && dir > 0) {
        current_pos.value += dir * 100
        current_categorie.value = cart.categories[Math.abs(current_pos.value / 100)]

        // Navegar al inicio de la página sin smooth
        window.scrollTo({
            top: 0,
            behavior: 'auto' // sin suavizado
        })

        return
    }

    // Si estamos en la última posición y se intenta mover a la izquierda
    if (current_pos.value > maxPosition && dir < 0) {
        current_pos.value += dir * 100
        current_categorie.value = cart.categories[Math.abs(current_pos.value / 100)]

        // Navegar al inicio de la página sin smooth
        window.scrollTo({
            top: 0,
            behavior: 'auto' // sin suavizado
        })

        return
    }

    // Si llegamos a un límite, reiniciar el carrusel
    current_pos.value = 0
    current_categorie.value = cart.categories[0]
}

onMounted(async () => {


    const route = useRoute()
    if (!cart.user?.site?.site_name) {
        router.push(`/ubicacion/${route.params.user_id}`)
    }

    const user_wsp_id = route.params.user_id
    // alert(user_wsp_id)

    cart.user.user_wsp_id = user_wsp_id


    const temp_categories = await fetchService.get('https://backend.salchimonster.com/get-categorized-products/6149/1') || []
    // Filtrar y ordenar categorías
    const filteredAndSortedCategories = temp_categories
        ?.filter(c => codigos.includes(parseInt(c.categoria_id))) // Filtrar por codigos
        .sort(
            (a, b) =>
                codigos.indexOf(parseInt(a.categoria_id)) - codigos.indexOf(parseInt(b.categoria_id)) // Ordenar por codigos
        );

    if (filteredAndSortedCategories?.length > 0) {
        cart.categories = filteredAndSortedCategories; // Asignar solo si hay categorías válidas
    }


    console.log(cart.categories)
    current_categorie.value = cart.categories[0] // Inicializar con la primera categoría
    const add = await fetchService.get(`${URI}/adicionales-unique-site/1`)


    console.log(cart.categories)
    const cambios = add['CAMBIOS']


    const adiciones = add['ADICIONES']
    const salsas = add['SALSAS']

    const formateCambios = cambios.map((c) => {
        return {
            product_name: c.aditional_item_name,
            id: c.aditional_item_instance_id,
            price: c.aditional_item_price,
            product_description: '',
            tag: 'CAMBIO'
        }
    })

    const formateAdiciones = adiciones.map((c) => {
        return {
            product_name: c.aditional_item_name,
            id: c.aditional_item_instance_id,
            price: c.aditional_item_price,
            product_description: '',
            tag: 'ADICION'
        }
    })

    const formateSalsas = salsas.map((c) => {
        return {
            product_name: c.aditional_item_name,
            id: c.aditional_item_instance_id,
            price: c.aditional_item_price,
            product_description: '',
            tag: 'SALSA'
        }
    })

    // categories.value.push({
    //     category_name: 'CAMBIOS',
    //     products: formateCambios
    // })

    // categories.value.push({
    //     category_name: 'ADICIONES',
    //     products: formateAdiciones
    // })

    // categories.value.push({
    //     category_name: 'SALSAS',
    //     products: formateSalsas
    // })
})


const codigos = [

    10, //COMBOS 2 PERSONAS
    26, //COMBOS PERSONALES
    // 25, //COMBOS 2X1 BURGER + PAPAS
    8, //SALCHIPAPAS 2 PERSONAS
    9, //SALCHIPAPAS PERSONALES
    13, //PRODUCTO NUEVO
    27, //POLLO
    11,   //SHOWW
    4, //BEBIDAS
    5, //CERVEZAS
    14,//ADICIONES SALCHIPAPAS
]

const borrar = () => {
    cart.cart = {
        products: [],
        salsas: [],
        adiciones: []
    }

    cart.total = 0
}



console.log(cart.user)

const push = () => {
    if (!(cart.cart.products.length > 0)) {
        alert("no hay productos seleccionados")
        return
    }

    window.location.href = `/register/${route.params.user_id}`
}


</script>

<template>
    <div class="container">
        <div class="decoration-left"></div>

        <div class="header12" style="position: sticky   ;top: 0;z-index: 2000;">

            <div style="background-color: #000000;display: flex ;
            padding:  .2rem .2rem;
            justify-content: space-between; width: 100%;height: 2rem;">

                <Tag class="indicador"
                    :style="cart?.site_status.status == 'open' ? 'background-color:yellow;color:black' : 'background-color:red;color:white'"
                    style=" border-radius: .1rem;"> {{ cart?.site_status.status == 'open' ? 'Abierto' : 'Cerrado' }}
                </Tag>
                <p style="color: #fff;font-weight: bold;"><b>SEDE - {{ cart.user.site.site_name }}</b> </p>
                <Button @click="router.push(`/Ubicacion/${route.params.user_id}`)"
                    style="background-color: orange;color: black;padding: 0  1rem !important; border:none; border-radius: .1rem;cursor: pointer;"
                    label="Cambiar ciudad"> </Button>


            </div>
            <div class="header">
                <button @click="moveCarousel(1)" style="width: 4rem; position: absolute;  left: 0" class="btn-left">
                    <img class="img_flecha" src="/src/icons/angles-left.png" alt="" />
                </button>

                <div class="categorie-carousel">
                    <p class="category_name" style="text-transform: uppercase;"
                        :style="`transform: translateX(${current_pos}%); `" :key="i.id"
                        v-for="i in cart.categories?.filter(c => codigos.includes(parseInt(c.categoria_id)))">
                        {{ i.categoria_descripcion }}
                    </p>
                </div>

                <button style="position: absolute;height: 4rem; width: 4rem; right: 0" @click="moveCarousel(-1)"
                    class="btn-right">
                    <img class="img_flecha" src="/src/icons/angles-right.png" alt="" />
                </button>
            </div>

        </div>

        <div class="carousel">
            <div v-for="categori in cart.categories" :key="categori.id" class="grid-container"
                :style="`transform: translateX(${current_pos}%);`">
                <productCard :product="product" v-for="product in categori.products">
                </productCard>
            </div>
        </div>

        <div class="bottom-bar" v-if="cart.site_status?.status == 'open'">
            <button @click="borrar" v-if="cart.total > 0" id="trash">
                <img src="/src/icons/trash.svg" alt="" />
            </button>

            <div>
                <p style="font-size: .7rem;" v-if="cart.total < 1" class="advice">
                    Los productos se registran dando click en la foto



                </p>
            </div>
            <div class="price-container">
                <span class="price">{{ formatPesos(cart.total) }}</span>
                <button class="button" @click="push()" id="listo">
                    LISTO
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    margin: 0;
    width: 100%;
    min-width: 100%;
    padding: 2rem;
    padding-bottom: 7rem;
    transition: 0.3s all ease;
    justify-content: start;
    /* padding: 1rem; */
}

.container {
    width: 100%;
    margin: auto;
    max-width: 30rem;
    position: relative;
    /* padding-bottom: 5rem; */
    /* background-color: red; */
}

.categorie-carousel {
    width: 100%;
    display: flex;
}




.indicador {
    animation: alternate .5s ease-in-out infinite;
}

@keyframes alternate {
    0% {
        opacity: 0;
    }

    25% {
        opacity: 0.3;
    }

    50% {
        opacity: 0.6;
    }

    75% {
        opacity: 0.85;
    }

    100% {
        opacity: 1;
    }
}



.carousel {
    display: flex;
    align-items: start;
    overflow: hidden;
    width: 100%;
}

.bottom-bar {
    width: 100%;
    height: 4rem;
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0;
    gap: 1rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.418);

}

.buttom {
    padding: 0 4rem;
    display: flex;

}

img {
    width: 2rem;
    /* filter: invert(); */
}

#listo img {
    filter: invert();
    min-height: 2rem;
    /* padding: 0 5rem; */
}

.advice {
    padding: 0 rem;
}

.icon-listo {
    height: 50%;
    object-fit: contain;
}

.price-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.header {
    display: flex;
    position: sticky;
    z-index: 100;
    margin-bottom: 0.5rem;
    width: 100%;
    min-height: 4rem;
    top: 0;
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.404);
    left: 0;
    background-color: #ffffff;
    overflow: hidden;
    height: 3rem;
    padding: 0rem 3rem;
    align-items: center;
}


.header2 {
    display: flex;
    position: sticky;
    z-index: 100;
    margin-bottom: 0.5rem;
    width: 100%;
    min-height: 4rem;
    top: 0;
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.404);
    left: 0;
    background-color: #ffffff;
    overflow: hidden;
    height: 3rem;
    padding: 0rem 3rem;
    align-items: center;
}

.category_name {
    color: #ff6200;
    font-weight: 900;
    width: 100%;
    min-width: 100%;
    text-align: center;
    /* margin: 0rem 1rem; */
    font-size: 1rem;
    text-justify: center;
    display: flex;
    align-items: center;

    justify-content: center;

    transition: all ease 0.5s;
    /* background-color: blue; */
}

.category_name {
    padding: 0 1rem;
    width: 100%;
}

.btn-left,
.btn-right {
    border: none;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: black;


}

.btn-left img,
.btn-right img {
    filter: invert();
}

#listo {

    font-weight: 900;
    background-color: rgb(0, 186, 12);
    display: flex;
    align-items: center;
    box-shadow: none;
    border-radius: 0.4rem;
    font-size: 1rem;
    padding: 1rem;
    border: none;

}

#trash {
    height: 100%;
    font-weight: bold;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    box-shadow: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: none;
    padding: 0.5rem;
}

.price {
    font-size: 1.5rem;
    font-weight: bold;
    min-width: max-content;
}
</style>
