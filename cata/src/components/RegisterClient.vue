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
        <Select placeholder="📍 Selecciona una ciudad" disabled v-model="cart.user.city" :options="cities"
          class="select" optionLabel="city_name"></Select>
      </div>
      <div class="container-field">
        <Select disabled :options="neigborghoods" filterPlaceholder=" 📍 Escribe el nombre de tu barrio"
          placeholder="📍 selecciona tu barrio" filter v-model="cart.user.neigborghood" optionLabel="name"
          class="select"></Select>
      </div>
      <div class="container-field">
        <Select optionLabel="name" v-model="selectedPaymentMethod" :options="paymentMethods"
          placeholder="💰Metodo de pago preferido" class="select"></Select>
      </div>

      <div class="container-field">
        <InputText v-model="name" placeholder="😊 Nombre" class="input"></InputText>
      </div>
      <div class="container-field">
        <InputText v-model="address" placeholder="📍 Direccion" class="input"></InputText>
      </div>
      <div class="container-field">
        <InputNumber :useGrouping="false" v-model="phone" style="
            width: 30rem;
            max-width: 100%;
            height: 3.5rem;
            font-size: 3rem !important;
            font-weight: bold;
          " pattern="\d*" placeholder="📱Telefono" class="input">
        </InputNumber>
      </div>



      <Textarea v-model="order_notes" rows="3" style="" placeholder="📝Alguna notita para la cocina?"></Textarea>


      <Button @click="send" style="" size="large" class="submit-button" label="🔥 CONFIRMAR DATOS🔥"></Button>
      <Button @click="push()" style="" size="large" class="submit-button" label="VOLVER AL MENU"></Button>



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
})

watch(() => cart.user.city, async (newval) => {

  updateNeigborhoods(newval.city_id)
  cart.user.neigborghood = {}


}, {
  deep: true
})




watch(() => cart.user.neigborghood, async (newval) => {

  cart.user.site = await fetchService.get(`${URI}/site/${newval.site_id}`)


}, {
  deep: true
})

const send = async () => {
  // Verificar que cada campo está lleno, uno por uno
  if (!name.value) {
    alert('Por favor, completa el campo de nombre antes de finalizar.')
    return
  }
  if (!phone.value) {
    alert('Por favor, completa el campo de teléfono antes de finalizar.')
    return
  }
  if (!address.value) {
    alert('Por favor, completa el campo de dirección antes de finalizar.')
    return
  }
  if (!cart.user.city?.['city_name']) {
    alert('Por favor, selecciona una ciudad antes de finalizar.')
    return
  }
  if (!cart.user.neigborghood?.['name']) {
    alert('Por favor, selecciona un barrio antes de finalizar.')
    return
  }
  if (!selectedPaymentMethod.value?.['name']) {
    alert('Por favor, selecciona un método de pago antes de finalizar.')
    return
  }



  let productsMessage = ''
  let cambiosMessage = ''
  let salsasMessage = ''
  let adicionesMessage = ''

  const productsToSend = []
  const aditionalTosend = []
  let notesMessage = order_notes.value.trim() ? `${order_notes.value}` : 'sin notas';



  // Productos normales
  const products = cart.cart.products.filter(p => !p.product.tag).forEach(p => {
    productsMessage += `*${p.quantity}* - ${p.product.productogeneral_descripcion}\n`
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


  const order_products = cart.cart.products.map(p => {

    const generalPrice = p.product.productogeneral_precio;
    const presentationPrice = p.product.lista_presentacion?.[0]?.producto_precio;
    return {


      pedido_productoid: cart.getProductId(p.product),
      pedido_cantidad: p.quantity,
      pedido_precio: cart.getProductPrice(p.product) || 0,
      pedido_escombo: p.product.productogeneral_escombo,
      pedido_nombre_producto: p.product.productogeneral_descripcion,
      lista_productocombo: p.product.lista_productobase?.map(p => {
        return {
          "pedido_productoid": parseInt(p.producto_id),
          "pedido_cantidad": parseInt(p.productocombo_cantidad),
          "pedido_precio": parseInt(p.productocombo_precio),
          "pedido_nombre": p.producto_descripcion
        }

      }

      ),
      // modificadorseleccionList:cart.cart.additions.filter( add => add.parent_id == p.product.producto_id)?.map( ad => {
      //   return {
      //     "modificadorseleccion_cantidad": ad.quantity,
      //     "pedido_precio": ad.price,
      //     "modificador_id": ad.group_id,
      //     "modificadorseleccion_id": ad.id,
      //     "modificador_nombre":ad.name,
      //     "pedido_productoid":ad.parent_id
      // }
      // })  
    }
  });




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
    "payment_method_id": selectedPaymentMethod.value.id,
    "delivery_price": cart.user.neigborghood.delivery_price,
    "order_notes": notesMessage,
    "user_data": {
      "user_name": name.value,
      "user_phone": phone.value.toString(),
      "user_address": `${address.value} - ${cart.user.neigborghood.name}`,
      "user_city": cart.user.city.city_name,
      "user_neigborhood": cart.user.neigborghood.name,
      "user_payment": selectedPaymentMethod.value.name
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
    `*Dirección*: ${address.value}\n` +
    `*Ciudad*: ${cart.user.city.city_name}\n` +
    `*Barrio*: ${cart.user.neigborghood.name}\n` +
    `*Método de Pago*: ${selectedPaymentMethod.value.name}\n\n` +
    `*Notas para la cocina*: ${notesMessage}`
  // Agregando el método de pago al mensaje

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

    if (!user[0]) {
      return
    }


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

      // cart.user = { ...temp_user }


    } else {
      console.error('Error: No se encontró el usuario o la respuesta no es válida.')
    }

  } catch (error) {
    // Manejar errores durante la llamada a la API o procesamiento
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

.notas {
  height: 100vh;
  width: 100vw;
  background-color: red;
  position: fixed;
  z-index: 900;
}
</style>
