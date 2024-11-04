<template>
  <div class="container">




    <div class="container-form">
      <!-- <p style="color: white">{{ data }}</p> -->


      <div class="header">

        
        <i>🔥</i>
        <img src="/src/icons/logo.png" alt="" />
        <i>🔥</i>
      </div>

      <h1 style="font-weight: 900 !important; color: white;text-align: center; text-transform: uppercase;">Bienvenido a Salchimonster </h1>
      <h2 style="font-weight: 300 !important; color: white;text-align: center;">Vamos a buscar tu sede mas cercana, calcular el valor de tu domicilio y confirmar el menu disponible en tu zona</h2>
   
      <div class="container-field">
        <Select placeholder="📍 Selecciona una ciudad" v-model="cart.user.city" :options="cities" class="select"
          optionLabel="city_name"></Select>
      </div>
      <div class="container-field">
        <Select :disabled="!cart.user.city" :options="neigborghoods"
          filterPlaceholder=" 📍 Escribe el nombre de tu barrio" placeholder="📍 selecciona tu barrio" filter
          v-model="cart.user.neigborghood" optionLabel="name" class="select"></Select>
      </div>

      <!-- {{ cart.user.neigborghood }} -->


      <div v-if="cart.user?.neigborghood?.delivery_price"  style="width: 100%;color: white;display: flex;padding: 1rem; align-items: center;justify-content: center; font-weight:500;background-color: #000000">
          <h2 style="font-weight: bold;">El domicilio a {{ cart.user.neigborghood.name }} cuesta {{  formatPesos(cart.user.neigborghood.delivery_price ) }}
 
          Tu pedido se despacha desde la sede {{ cart?.user?.site?.site_name }}  <span v-if="cart?.site_status?.status == 'open'">  <br> Melooo, esta sede se encuentra <Tag severity="danger" style="background-color: yellow; color: black;">Abierta</Tag> ahora</span>   <span v-else> <br> <br>  En este momento la sede <b>{{ cart?.user?.site?.site_name }}</b>  Se encuantra <Tag severity="danger" style="background-color: red; color: white;">cerrada</Tag>  pero te invitamos a ver nuestra carta </span> </h2>
      </div>


      
      <Button @click="navigate" style="" size="large" class="submit-button" label="🔥 VEAMOS ESA CARTA PUES 🔥"></Button>



    </div>
  </div>
</template>

<script setup>
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { onMounted, ref, watch } from 'vue'
import { fetchService } from '@/services/services/fetchService'
import { URI } from '@/services/services/conection'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'
import router from '@/router'
import { useCartStore } from '@/stores/cart'
import { useRoute } from 'vue-router'
import { formatPesos } from '@/services/services/formatoPesos'
import Textarea from 'primevue/textarea'
const cities = ref([])
const neigborghoods = ref([])
const paymentMethods = ref([])
const selectedPaymentMethod = ref({})
const name = ref('')
const address = ref('')
const phone = ref()
const selectedCity = ref({})
const selectedNeigborhood = ref({})

const cart = useCartStore()
const order_notes = ref('')

const route = useRoute()




const updateNeigborhoods = async (city_id) => {
  neigborghoods.value = await fetchService.get(`${URI}/neighborhoods/by-city/${city_id}`)
}

onMounted(async () => {

  const instagramScript = document.createElement('script');
  instagramScript.src = "https://www.instagram.com/embed.js";
  instagramScript.async = true;
  document.body.appendChild(instagramScript);

  cities.value = await fetchService.get(`${URI}/cities`)
  paymentMethods.value = await fetchService.get(`${URI}/payment_methods/`)
  if (cart.user.city) {
    updateNeigborhoods(cart.user.city.city_id)
  }


  if (cart.user?.site?.site_id){
    cart.site_status = await fetchService.get(`${URI}/site/${cart.user.site.site_id}/status`)

  }
})






watch(() => cart.user.site, async (newval) => {

  if (newval?.site_id){
    cart.site_status = await fetchService.get(`${URI}/site/${newval.site_id}/status`)

  }


},{
deep: true
})


watch(() => cart.user.city, async (newval) => {

    updateNeigborhoods(newval.city_id)
    cart.user.neigborghood = {}


},{
  deep: true
})


const data = ref({})


const navigate = () => {
  if (!cart.user.neigborghood?.name) {
    alert("Selecciona un barrio por favor")
    return
  }
  router.push(`/carta/${route.params.user_id}`)
}


watch(() => cart.user.neigborghood, async (newval) => {

  if (newval?.site_id){
    cart.user.site = await fetchService.get(`${URI}/site/${newval.site_id}`)

  }


},{
deep: true
})

</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  font-size: 4rem !important;
  text-shadow: 0 0 4px rgb(255, 238, 0);
}

.container-form {
  width: 100%;
  max-width: 30rem;

  height: min-content;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: start;
  /* justify-content: start; */
  gap: .5rem;
}

input {
  width: 100%;
  min-width: 100%;
  height: 3.5rem;
}

img {
  width: 30%;
  margin: auto;
}

.select,
input {
  width: 100%;
  min-width: 100%;
  height: 3.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
}

.container {
  /* display: flex; */
  background-color: #ff6200;
  height: max-content;
  min-height: 100vh;
  /* overflow: hidden; */
}

.submit-button {
  font-weight: bold;
  /* background: black; */
  border: none;
  height: 3.5rem;
}

.submit-button:hover {
  border: none;

  outline: none;
}

.notas {
  height: 100vh;
  width: 100vw;
  background-color: red;
  position: fixed;
  z-index: 900;
}
</style>
