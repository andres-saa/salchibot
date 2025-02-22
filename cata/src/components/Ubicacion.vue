<template>
  <div class="container">
    <div class="container-form">
      <!-- HEADER -->
      <div class="header">
        <i>🔥</i>
        <img src="/src/icons/logo.png" alt="logo" />
        <i>🔥</i>
      </div>

      <!-- TITLE -->
      <h1
        style="
          font-weight: 900 !important;
          color: white;
          text-align: center;
          text-transform: uppercase;
        "
      >
        Bienvenido a Salchimonster
      </h1>
      <h2
        style="
          font-weight: 300 !important;
          color: white;
          text-align: center;
        "
      >
        Vamos a buscar tu sede más cercana, calcular el valor de tu domicilio y
        confirmar el menú disponible en tu zona
      </h2>

      <!-- SELECT CITY -->
      <div class="container-field">
        <Select
          placeholder="📍 Selecciona una ciudad"
          v-model="cart.user.city"
          :options="cities"
          class="select"
          optionLabel="city_name"
        />
      </div>

      <!-- SELECT NEIGHBORHOOD (only shows if there's more than 1) -->
      <div
        class="container-field"
        v-if="cart.user.city "
      >
        <Select
          :disabled="!cart.user.city"
          :options="neigborghoods"
          filterPlaceholder="📍 Escribe el nombre de tu barrio"
          placeholder="📍 Selecciona tu barrio"
          filter
          v-model="cart.user.neigborghood"
          optionLabel="name"
          class="select"
        />
      </div>

      <!-- DISPLAY DELIVERY INFO IF AVAILABLE -->
      <div
        v-if="cart.user?.neigborhood?.delivery_price"
        style="
          width: 100%;
          color: white;
          display: flex;
          padding: 1rem;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          background-color: #000000;
          margin-top: 1rem;
        "
      >
        <h2 style="font-weight: bold;">
          El domicilio a
          {{ cart.user.neigborhood.name }} cuesta
          {{ formatPesos(cart.user.neigborhood.delivery_price) }}.<br />
          Tu pedido se despacha desde la sede
          {{ cart?.user?.site?.site_name }}.
          <span v-if="cart?.site_status?.status == 'open'">
            <br />¡Melooo! Esta sede se encuentra
            <Tag severity="danger" style="background-color: yellow; color: black;"
              >Abierta</Tag
            >
            ahora
          </span>
          <span v-else>
            <br />
            En este momento la sede <b>{{ cart?.user?.site?.site_name }}</b>
            se encuentra
            <Tag severity="danger" style="background-color: red; color: white;"
              >cerrada</Tag
            >
            , pero te invitamos a ver nuestra carta
          </span>
        </h2>
      </div>

      <!-- BUTTON -->
      <Button
        @click="navigate"
        size="large"
        class="submit-button"
        label="🔥 VEAMOS ESA CARTA PUES 🔥"
      ></Button>
    </div>
  </div>
</template>

<script setup>
/* ---------------------------
 * IMPORTS
 * ------------------------- */
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { useCartStore } from '@/stores/cart'
import { fetchService } from '@/services/services/fetchService'
import { URI } from '@/services/services/conection'
import { formatPesos } from '@/services/services/formatoPesos'

/* PrimeVue components */
import Select from 'primevue/select'
import Button from 'primevue/button'
import Tag from 'primevue/tag'

/* ---------------------------
 * REFS & STORE
 * ------------------------- */
const cities = ref([])
const neigborghoods = ref([])
const paymentMethods = ref([])

const cart = useCartStore()
const route = useRoute()

/* ---------------------------
 * METHODS
 * ------------------------- */
const updateNeigborhoods = async (city_id) => {
  // Fetch neighborhoods by city
  neigborghoods.value = await fetchService.get(`${URI}/neighborhoods/by-city/${city_id}`)
  console.log(neigborghoods.value)

  // If there's exactly one neighborhood, auto-select it

  
  cart.user.neigborhood = neigborghoods.value[0]
 
 
}

const navigate = () => {
  if (!cart.user.neigborhood?.name) {
    alert('Por favor selecciona un barrio.')
    return
  }
  // Navigate to next page
  router.push(`/carta/${route.params.user_id}`)
}

/* ---------------------------
 * LIFECYCLE
 * ------------------------- */
onMounted(async () => {
  // Carga ciudades y métodos de pago
  cities.value = await fetchService.get(`${URI}/cities`)
  paymentMethods.value = await fetchService.get(`${URI}/payment_methods`)

  // Si ya hay una ciudad en el carrito y SÍ existe city_id
  if (cart.user.city?.city_id) {
    await updateNeigborhoods(cart.user.city.city_id)
  }

  // Si ya hay una sede en el carrito
  if (cart.user?.site?.site_id) {
    cart.site_status = await fetchService.get(`${URI}/site/${cart.user.site.site_id}/status`)
  }
})

/* ---------------------------
 * WATCHERS
 * ------------------------- */
// Watch for site changes -> update site_status
watch(
  () => cart.user.site,
  async (newVal) => {
    if (newVal?.site_id) {
      cart.site_status = await fetchService.get(`${URI}/site/${newVal.site_id}/status`)
    }
  },
  { deep: true }
)

// Watch city -> fetch neighborhoods
watch(
  () => cart.user.city,
  async (newVal) => {
    if (newVal?.city_id) {
      await updateNeigborhoods(newVal.city_id)
    }
  },
  { deep: true }
)
// Watch neighborhood -> update site info
watch(
  () => cart.user.neigborhood,
  async (newVal) => {
    if (newVal?.site_id) {
      cart.user.site = await fetchService.get(`${URI}/site/${newVal.site_id}`)
    }
  },
  { deep: true }
)
</script>

<style scoped>
/* Container styling */
.container {
  background-color: #ff6200;
  min-height: 100vh;
  width: 100%;
  height: max-content;
}

/* Form wrapper */
.container-form {
  width: 100%;
  max-width: 30rem;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Header styling */
.header {
  display: flex;
  align-items: center;
  font-size: 4rem !important;
  text-shadow: 0 0 4px rgb(255, 238, 0);
}

/* Logo */
.header img {
  width: 30%;
  margin: auto;
}

/* Container field */
.container-field {
  width: 100%;
}

/* Select & input styles */
.select,
input {
  width: 100%;
  min-width: 100%;
  height: 3.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
}

/* Button styles */
.submit-button {
  font-weight: bold;
  border: none;
  height: 3.5rem;
  margin-top: 1rem;
}
.submit-button:hover {
  border: none;
  outline: none;
}
</style>
