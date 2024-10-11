<template>
  <div class="container">
    <div class="container-form">
      <p style="color: white">{{ data }}</p>

      <div class="header">
        <i>🔥</i>
        <img src="/public/icons/logo.png" alt="" />
        <i>🔥</i>
      </div>

      <div class="container-field">
        <Select placeholder="📍 Selecciona una ciudad" v-model="cart.user.city" :options="cities" class="select"
          optionLabel="city_name"></Select>
      </div>
      <div class="container-field">
        <Select :disabled="!cart.user.city['city_name']" :options="neigborghoods"
          filterPlaceholder=" 📍 Escribe el nombre de tu barrio" placeholder="📍 selecciona tu barrio" filter
          v-model="cart.user.neigborghood" optionLabel="name" class="select"></Select>
      </div>
      <div class="container-field">
        <Select optionLabel="name" v-model="cart.user.paymentMethod" :options="paymentMethods"
          placeholder="💰Metodo de pago preferido" class="select"></Select>
      </div>

      <div class="container-field">
        <InputText v-model="cart.user.name" placeholder="😊 Nombre" class="input"></InputText>
      </div>
      <div class="container-field">
        <InputText v-model="cart.user.address" placeholder="📍 Direccion" class="input"></InputText>
      </div>
      <div class="container-field">
        <InputNumber :useGrouping="false" v-model="cart.user.phone" style="
            width: 30rem;
            max-width: 100%;
            height: 3.5rem;
            font-size: 3rem !important;
            font-weight: bold;
          " pattern="\d*" placeholder="📱Teefono" class="input">
        </InputNumber>
      </div>


      <Button @click="() => router.push({
        name: 'carta',
        params: {
          user_id: route.params.user_id
        }
      })" style="" size="large" class="submit-button" label="VOLVER AL MENU"></Button>

      <Button @click="send" style="" size="large" class="submit-button" label="🔥 CONFIRMAR DATOS🔥"></Button>

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
import router from '@/router'
import { useCartStore } from '@/stores/cart'
import { useRoute } from 'vue-router'
const cities = ref([])
const neigborghoods = ref([])
const paymentMethods = ref([])
const selectedPaymentMethod = ref({})
const name = ref('')
const address = ref('')
const phone = ref()

const cart = useCartStore()


const route = useRoute()




const updateNeigborhoods = async (city_id) => {
  neigborghoods.value = await fetchService.get(`${URI}/neighborhoods/by-city/${city_id}`)
}

onMounted(async () => {
  cities.value = await fetchService.get(`${URI}/cities`)
  paymentMethods.value = await fetchService.get(`${URI}/payment_methods/`)
})

watch(() => cart.user.city, async (newval) => {
  if (newval.city_id) {
    updateNeigborhoods(newval.city_id)
  }

}, {
  deep: true
})

const send = async () => {
  // Verificar que cada campo está lleno, uno por uno
  if (!cart.user.name) {
    alert('Por favor, completa el campo de nombre antes de finalizar.')
    return
  }
  if (!cart.user.phone) {
    alert('Por favor, completa el campo de teléfono antes de finalizar.')
    return
  }
  if (!cart.user.address) {
    alert('Por favor, completa el campo de dirección antes de finalizar.')
    return
  }
  if (!cart.user.city['city_name']) {
    alert('Por favor, selecciona una ciudad antes de finalizar.')
    return
  }
  if (!cart.user.neigborghood['name']) {
    alert('Por favor, selecciona un barrio antes de finalizar.')
    return
  }
  if (!cart.user.paymentMethod['name']) {
    alert('Por favor, selecciona un método de pago antes de finalizar.')
    return
  }



  let productsMessage = ''
  let cambiosMessage = ''
  let salsasMessage = ''
  let adicionesMessage = ''

  const productsToSend = []
  const aditionalTosend = []


  // Productos normales
  const products = cart.cart.products.filter(p => !p.product.tag).forEach(p => {
    productsMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    productsToSend.push(
      {
        "product_instance_id": p.product.id,
        "quantity": p.quantity,
        "name": p.product.product_name,
        "price": p.product.price
      }
    )

  })


  // Cambios
  const cambios = cart.cart.products.filter(p => p.product.tag === "CAMBIO").forEach(p => {
    cambiosMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    aditionalTosend.push(
      {
        "aditional_item_instance_id": p.product.id,
        "quantity": p.quantity,
        "name": p.product.product_name,
        "price": p.product.price,
        "tag": "CAMBIO"


      }
    )
  })


  // Salsas
  const salsas = cart.cart.products.filter(p => p.product.tag === "SALSA").forEach(p => {
    salsasMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    aditionalTosend.push(
      {
        "aditional_item_instance_id": p.product.id,
        "quantity": p.quantity,
        "name": p.product.product_name,
        "price": p.product.price,
        "tag": "SALSA"
      }
    )
  })

  // Adiciones
  const adiciones = cart.cart.products.filter(p => p.product.tag === "ADICION").forEach(p => {
    adicionesMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    aditionalTosend.push(
      {
        "aditional_item_instance_id": p.product.id,
        "quantity": p.quantity,
        "name": p.product.product_name,
        "price": p.product.price,
        "tag": "ADICION"

      }
    )
  })





  // Construir el mensaje final solo con las secciones que tienen contenido
  let finalMessage = '*PAPI, ESTOY QUE ME COMO, ANOTE AHI* \n\n'

  if (productsMessage) {
    finalMessage += '*PRODUCTOS*\n' + productsMessage + '\n'
  }

  if (cambiosMessage) {
    finalMessage += '*CAMBIOS*\n' + cambiosMessage + '\n'
  }

  if (salsasMessage) {
    finalMessage += '*SALSAS*\n' + salsasMessage + '\n'
  }

  if (adicionesMessage) {
    finalMessage += '*ADICIONES*\n' + adicionesMessage + '\n'
  }

  console.log(finalMessage)

  const temp_order = {
    "order_products": productsToSend,
    "order_aditionals": aditionalTosend,
    "site_id": cart.user.neigborghood.site_id,
    "delivery_person_id": 4,
    "payment_method_id": cart.user.paymentMethod.id,
    "delivery_price": cart.user.neigborghood.delivery_price,
    "order_notes": "sin notas",
    "user_data": {
      "user_name": cart.user.name,
      "user_phone": cart.user.phone.toString(),
      "user_address": cart.user.address,
    },
    "inserted_by": 1082
  }

  console.log(temp_order)


  const user_data =
    `*MIS DATOS*\n` +
    `*Nombre*: ${cart.user.name}\n` +
    `*Teléfono*: ${cart.user.phone}\n` +
    `*Dirección*: ${cart.user.address}\n` +
    `*Ciudad*: ${cart.user.city.city_name}\n` +
    `*Barrio*: ${cart.user.neigborghood.name}\n` +
    `*Método de Pago*: ${cart.user.paymentMethod.name}` // Agregando el método de pago al mensaje

  const wsp_id = route.params.user_id


  const encodedMessage = encodeURIComponent(finalMessage + user_data)
  const whatsappUrl = `https://wa.me/573053447255?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
  await fetchService.post(`https://chatbot.salchimonster.com/crete-temp-order/${wsp_id}`, temp_order)

}


const get_user = async () => {
  const wsp_id = route.params.user_id
  try {
    const user = await fetchService.get(`https://chatbot.salchimonster.com/user/${wsp_id}`)


    // Verificar si user es un array no vacío
    if (Array.isArray(user) && user.length > 0 && user[0]) {

      // Verificar si la propiedad cities existe y es un array
      if (Array.isArray(cities.value)) {
        const city = cities.value.find(city => city.city_id === user[0].city_id) || {}

        // Verificar si la ciudad fue encontrada antes de realizar la llamada fetch de neighborhoods
        if (city && city.city_id) {
          neigborghoods.value = await fetchService.get(`${URI}/neighborhoods/by-city/${city.city_id}`)
        }

      } else {
        console.error('Error: cities.value no es un array válido.')
      }

      const temp_user = {
        // Validar existencia de la propiedad cities.value y que sea un array
        city: Array.isArray(cities.value) ? cities.value.find(city => city.city_id === user[0].city_id) || {} : {},

        // Validar existencia de la propiedad neigborghoods.value y que sea un array
        neigborghood: Array.isArray(neigborghoods.value) ?
          neigborghoods.value.find(neigb => neigb.neighborhood_id === user[0].neigborhood_id) || {}
          : {},

        // Validar existencia de la propiedad paymentMethods.value y que sea un array
        paymentMethod: Array.isArray(paymentMethods.value) ?
          paymentMethods.value.find(pay => pay.id === user[0].payment_method_id) || {}
          : {},

        // Verificar las propiedades del usuario antes de asignarlas
        name: user[0].user_name || 'Nombre no disponible',
        phone: parseInt(user[0].user_phone) || 'Teléfono no disponible',
        address: user[0].user_address || 'Dirección no disponible'
      }

      cart.user = { ...temp_user }


    } else {
      console.error('Error: No se encontró el usuario o la respuesta no es válida.')
    }

  } catch (error) {
    // Manejar errores durante la llamada a la API o procesamiento
    console.error('Error al obtener el usuario:', error)
  }
}



onMounted(async () => {
  await get_user()
})
const data = ref()
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
  align-content: center;
  justify-content: center;
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
  display: flex;
  background-color: #ff6200;
  height: max-content;
  min-height: 100vh;
  /* overflow: hidden; */
}

.submit-button {
  font-weight: bold;
  background: black;
  border: none;
  height: 3.5rem;
}

.submit-button:hover {
  border: none;

  outline: none;
}
</style>
