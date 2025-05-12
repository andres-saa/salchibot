<template>
  <div class="container">
    <div class="container-form">
      <p style="color: white">{{ data }}</p>

      <div class="header">
        <i>🔥</i>
        <img src="/src/icons/logo.png" alt="" />
        <i>🔥</i>
      </div>

      <div class="container-field">
        <InputText v-model="name" placeholder="😊 Nombre" class="input"></InputText>
        <div v-if="errors.name" class="error">{{ errors.name }}</div>
      </div>

      <!-- Selección de ciudad -->
      <div class="container-field">
        <Select 
          placeholder="📍 Selecciona una ciudad" 
          disabled 
          v-model="cart.user.city" 
          :options="cities"
          class="select" 
          optionLabel="city_name"
        ></Select>
        <div v-if="errors.city" class="error">{{ errors.city }}</div>
      </div>

      <!-- Selección de barrio -->
      <div class="container-field">
        <Select 
          disabled 
          :options="neigborghoods" 
          filterPlaceholder=" 📍 Escribe el nombre de tu barrio"
          placeholder="📍 selecciona tu barrio" 
          filter 
          v-model="cart.user.neigborghood" 
          optionLabel="name"
          class="select"
        ></Select>
        <div v-if="errors.neighborhood" class="error">{{ errors.neighborhood }}</div>
      </div>

      <span>Metodo Entrega</span>
      <div class="form-group">
        <Select
          style="width: 100%;"
          class="select"
          v-model="cart.user.order_type"
          id="metodo_de_entrega"
          placeholder="Metodo de entrega"
          :options="computedOrderTypes"
          optionLabel="name"
        />
      </div>

      <!-- Selección de método de pago -->
      <div class="container-field">
        <Select 
          optionLabel="name" 
          v-model="selectedPaymentMethod" 
          :options="cart.user.neigborghood.site_id === 33 
                      ? paymentMethods.filter(option => [6, 8].includes(option.id))
                      : cart.user.neigborghood.site_id !== 33 
                      ? paymentMethods.filter(option => ![7].includes(option.id))
                      : paymentMethods"
          placeholder="💰Metodo de pago preferido" 
          class="select"
        ></Select>
        <div v-if="errors.paymentMethod" class="error">{{ errors.paymentMethod }}</div>
      </div>

      <!-- Si el modo de entrega es 2 se muestra el campo para la placa -->
      <template v-if="cart.user.order_type && cart.user.order_type.id === 2 && cart.user.neigborghood.site_id === 33">
        <span>Placa de tu vehiculo</span>
        <div class="form-group">
          <InputText v-model="cart.user.placa" id="placa" placeholder="Placa de tu vehiculo" />
        </div>
      </template>

      <!-- Campo de dirección: se muestra sólo si el modo de entrega no es 2 -->
      <div class="container-field" v-if="!cart.user.order_type || cart.user.order_type.id !== 2">
        <InputText v-model="address" placeholder="📍 Direccion" class="input"></InputText>
        <div v-if="errors.address" class="error">{{ errors.address }}</div>
      </div>

      <!-- Campo Teléfono -->
      <div class="container-field">
        <InputNumber 
          :useGrouping="false" 
          v-model="phone" 
          style="width: 30rem; max-width: 100%; height: 3.5rem; font-size: 3rem !important; font-weight: bold;" 
          pattern="\d*" 
          placeholder="📱Telefono" 
          class="input"
        ></InputNumber>
        <div v-if="errors.phone" class="error">{{ errors.phone }}</div>
      </div>


      <div class="container-field">
        <InputText 
          :useGrouping="false" 
          v-model="email" 
          style="width: 30rem; max-width: 100%; height: 3.5rem; " 
          placeholder="Correo electrónico" 
          class="input"
        ></InputText>
        <div v-if="errors.email" class="error">{{ errors.email }}</div>
      </div>

      <!-- Textarea para notas y placa -->
      <template v-if="placa">
        <!-- Solo lectura: placa incluida -->
        <Textarea
          :value="'Voy a pasar a recoger, la placa de mi vehiculo es: ' + placa"
          class="order-notes"
          disabled
        />
        <!-- Editable: notas adicionales -->
        <Textarea
          v-model="order_notes"
          class="order-notes"
          placeholder="Notas adicionales"
        />
      </template>
      <template v-else>
        <Textarea
          v-model="order_notes"
          class="order-notes"
          placeholder="Notas"
        />
      </template>

      <!-- Botones -->
      <Button @click="send" size="large" class="submit-button" label="🔥 CONFIRMAR DATOS🔥"></Button>
      <Button @click="push()" size="large" class="submit-button" label="VOLVER AL MENU"></Button>
    </div>
  </div>
</template>

<script setup>
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import { onMounted, ref, watch, computed } from 'vue'
import { fetchService } from '@/services/services/fetchService'
import { URI } from '@/services/services/conection'
import router from '@/router'
import { useCartStore } from '@/stores/cart'
import { useRoute } from 'vue-router'

const cities = ref([])
const neigborghoods = ref([])
const paymentMethods = ref([])
const selectedPaymentMethod = ref({})
const name = ref('')
const address = ref('')
const email = ref('')
const phone = ref()
const placa = ref('')
const order_notes = ref('')
const cart = useCartStore()
const route = useRoute()

// Estado reactivo para errores
const errors = ref({
  name: '',
  phone: '',
  address: '',
  city: '',
  email:'',
  neighborhood: '',
  paymentMethod: '',
})

const order_types = ref([])

watch(() => cart.user.order_type, () => {
  cart.user.placa = null
  address.value = null
})

const computedOrderTypes = computed(() => {
  const currentSiteId = cart.user.neigborghood.site_id
  if (currentSiteId === 33) {
    // Para la sede 33: permitir "Enviar por uber" (id: 1) y "Pasar a recoger" (id: 2)
    return order_types.value.filter(option => option.id !== 3)
  } else {
    // Para las demás sedes: permitir "Pasar a recoger" (id: 2) y "Enviar a domicilio" (id: 3)
    return order_types.value.filter(option => option.id !== 1)
  }
})

// Watchers para actualizar las validaciones en tiempo real
watch(name, (newValue) => {
  errors.value.name = newValue ? '' : 'El nombre es obligatorio.'
})

watch(email, (newValue) => {
  errors.value.email = newValue ? '' : 'El correo es obligatorio.'
})



watch(phone, (newValue) => {
  errors.value.phone = newValue ? '' : 'El teléfono es obligatorio.'
})
watch(address, (newValue) => {
  // Si el modo de entrega es 2, no se requiere dirección.
  if (cart.user.order_type && cart.user.order_type.id === 2) {
    errors.value.address = ''
  } else {
    errors.value.address = newValue ? '' : 'La dirección es obligatoria.'
  }
})
watch(() => cart.user.city, (newValue) => {
  errors.value.city = newValue && newValue.city_name ? '' : 'Selecciona una ciudad.'
}, { deep: true })
watch(() => cart.user.neigborghood, (newValue) => {
  errors.value.neighborhood = newValue && newValue.name ? '' : 'Selecciona un barrio.'
}, { deep: true })
watch(selectedPaymentMethod, (newValue) => {
  errors.value.paymentMethod = newValue && newValue.name ? '' : 'Selecciona un método de pago.'
}, { deep: true })

const updateNeigborhoods = async (city_id) => {
  neigborghoods.value = await fetchService.get(`${URI}/neighborhoods/by-city/${city_id}`)
}

onMounted(async () => {
  const instagramScript = document.createElement('script')
  instagramScript.src = "https://www.instagram.com/embed.js"
  instagramScript.async = true
  document.body.appendChild(instagramScript)

  cities.value = await fetchService.get(`${URI}/cities`)
  order_types.value = await fetchService.get(`${URI}/get_all_order_types`)
  paymentMethods.value = await fetchService.get(`${URI}/payment_methods/`)
  if (cart.user.city) {
    updateNeigborhoods(cart.user.city.city_id)
  }
})

watch(() => cart.user.city, async (newval) => {
  if (newval && newval.city_id) {
    updateNeigborhoods(newval.city_id)
  }
  cart.user.neigborghood = {}
}, { deep: true })

watch(() => cart.user.neigborghood, async (newval) => {
  if (newval && newval.site_id) {
    cart.user.site = await fetchService.get(`${URI}/site/${newval.site_id}`)
  }
}, { deep: true })

const send = async () => {
  // Validación final:
  // Si el modo de entrega es 2 no se requiere dirección.
  if (
    !name.value ||
    !phone.value ||
    !email.value ||
    (( !cart.user.order_type || cart.user.order_type.id !== 2 ) && !address.value) ||
    !cart.user.city?.city_name ||
    !cart.user.neigborghood?.name ||
    !selectedPaymentMethod.value?.name
  ) {
    alert('Por favor completa todos los campos obligatorios.')
    return
  }

  let productsMessage = ''
  let cambiosMessage = ''
  let salsasMessage = ''
  let adicionesMessage = ''

  const productsToSend = []
  const aditionalTosend = []
  const baseNotes = order_notes.value ?? ""
  let order_notes2 = baseNotes
  let notesMessage = order_notes2

  // Procesar productos normales
  cart.cart.products.filter(p => !p.product.tag).forEach(p => {
    productsMessage += `*${p.quantity}* - ${p.product.productogeneral_descripcion}\n`
    productsToSend.push({
      "product_instance_id": p.product.id,
      "quantity": p.quantity,
      "name": p.product.product_name,
      "price": p.product.price
    })
  })

  // Procesar cambios
  cart.cart.products.filter(p => p.product.tag === "CAMBIO").forEach(p => {
    cambiosMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    aditionalTosend.push({
      "aditional_item_instance_id": p.product.id,
      "quantity": p.quantity,
      "name": p.product.product_name,
      "price": p.product.price,
      "tag": "CAMBIO"
    })
  })

  // Procesar salsas
  cart.cart.products.filter(p => p.product.tag === "SALSA").forEach(p => {
    salsasMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    aditionalTosend.push({
      "aditional_item_instance_id": p.product.id,
      "quantity": p.quantity,
      "name": p.product.product_name,
      "price": p.product.price,
      "tag": "SALSA"
    })
  })

  // Procesar adiciones
  cart.cart.products.filter(p => p.product.tag === "ADICION").forEach(p => {
    adicionesMessage += `*${p.quantity}* - ${p.product.product_name}\n`
    aditionalTosend.push({
      "aditional_item_instance_id": p.product.id,
      "quantity": p.quantity,
      "name": p.product.product_name,
      "price": p.product.price,
      "tag": "ADICION"
    })
  })

  const order_products = cart.cart.products.map(p => {
    return {
      pedido_productoid: cart.getProductId(p.product),
      pedido_cantidad: p.quantity,
      pedido_precio: cart.getProductPrice(p.product) || 0,
      pedido_base_price: cart.getProductPrice(p.product) || 0,
      pedido_escombo: p.product.productogeneral_escombo,
      pedido_nombre_producto: p.product.productogeneral_descripcion,
      lista_productocombo: p.product.lista_productobase?.map(item => {
        return {
          "pedido_productoid": parseInt(item.producto_id),
          "pedido_cantidad": parseInt(item.productocombo_cantidad),
          "pedido_precio": parseInt(item.productocombo_precio),
          "pedido_nombre": item.producto_descripcion
        }
      }),
    }
  })

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

  // Definir el valor de la dirección a enviar:
  // Si el modo de entrega es 2, se envía "pasa a recoger"; en otro caso, la dirección ingresada.
  const userAddress = (cart.user.order_type && cart.user.order_type.id === 2)
    ? "pasa a recoger"
    : `${address.value} - ${cart.user.neigborghood.name}`

  const temp_order = {
    "order_products": productsToSend,
    "order_aditionals": aditionalTosend,
    "site_id": cart.user.neigborghood.site_id,
    "delivery_person_id": 4,
    "payment_method_id": selectedPaymentMethod.value.id,
    "delivery_price": cart.user.neigborghood.delivery_price,
    "order_notes": notesMessage,
    "order_type_id": cart.user.order_type.id,
    "placa": cart.user.placa,
    "user_data": {
      "user_name": name.value,
      "user_phone": phone.value.toString(),
      "user_address": userAddress,
      "user_city": cart.user.city.city_name,
      "user_neigborhood": cart.user.neigborghood.name,
      "user_payment": selectedPaymentMethod.value.namej,
      "email":email.value
    },
    "inserted_by": 1082,
    "pe_json": order_products,
    "pe_site_id": cart.user.site.pe_site_id,
    "total": parseInt(cart.total)
  }

  const user_data =
    `*MIS DATOS*\n` +
    `*Nombre*: ${name.value}\n` +
    `*Teléfono*: ${phone.value}\n` +
    `*Dirección*: ${userAddress}\n` +
    `*Correo electrónico*: ${email.value}\n` +
    `*Ciudad*: ${cart.user.city.city_name}\n` +
    `*Barrio*: ${cart.user.neigborghood.name}\n` +
    `*Método de Pago*: ${selectedPaymentMethod.value.name}\n\n` +
    `*Notas para la cocina*: ${notesMessage}`

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
    if (!user[0]) return

    if (Array.isArray(user) && user.length > 0 && user[0]) {
      if (Array.isArray(cities.value)) {
        const city = cities.value.find(city => city.city_id === user[0].city_id) || {}
        if (city && city.city_id) {
          neigborghoods.value = await fetchService.get(`${URI}/neighborhoods/by-city/${city.city_id}`)
        }
      } else {
        console.error('Error: cities.value no es un array válido.')
      }
      const temp_user = {
        city: Array.isArray(cities.value) ? cities.value.find(city => city.city_id === user[0].city_id) || {} : {},
        neigborghood: Array.isArray(neigborghoods.value) ?
          neigborghoods.value.find(neigb => neigb.neighborhood_id === user[0].neigborhood_id) || {}
          : {},
        paymentMethod: Array.isArray(paymentMethods.value) ?
          paymentMethods.value.find(pay => pay.id === user[0].payment_method_id) || {}
          : {},
        name: user[0].user_name || 'Nombre no disponible',
        phone: parseInt(user[0].user_phone) || 'Teléfono no disponible',
        address: user[0].user_address || 'Dirección no disponible'
      }
      // cart.user = { ...temp_user }
    } else {
      console.error('Error: No se encontró el usuario o la respuesta no es válida.')
    }
  } catch (error) {
    console.error('Error al obtener el usuario:', error)
  }
}

const push = () => {
  window.location.href = `/carta/${route.params.user_id}`
}

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
  gap: 0.5rem;
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

.notas {
  height: 100vh;
  width: 100vw;
  background-color: red;
  position: fixed;
  z-index: 900;
}

.error {
  color: rgb(255, 255, 255);
  font-size: 0.9rem;
  margin-top: 0.3rem;
}
</style>
