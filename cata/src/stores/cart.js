import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart-bot', {
  persist: {
    key: 'cart-bot', // La clave bajo la cual se almacenará el estado
    storage: localStorage,
    paths: ['cart', 'total','user'] // Guardamos tanto el carrito como el total
  },

  state: () => {
    return {
      cart: {
        products: [],
        salsas: [],
        adiciones: []
      },
      total: 0,
      user: {
        city: {},
        neigborghood: {},
        paymentMethod: {},
        name: '',
        phone: 0,
        address: '',
        site: {}
      },
      site_status:{}
    }
  },

  getters: {
    cartTotal(state) {
      return (
        state.cart.products.reduce((acc, item) => acc + item.product.price * item.quantity, 0) +
        state.cart.salsas.reduce((acc, salsa) => acc + salsa.price, 0) +
        state.cart.adiciones.reduce((acc, add) => acc + add.price, 0)
      )
    }
  },

  actions: {
    // Función para agregar productos
    addProduct(product, quantity = 1) {
      const existingProduct = this.cart.products.find((item) => item.product.id === product.id)

      if (existingProduct) {
        // Si el producto ya existe en el carrito, actualizamos la cantidad
        existingProduct.quantity += quantity
      } else {
        // Si no existe, lo agregamos al carrito
        this.cart.products.push({
          product,
          quantity
        })
      }

      // Actualizamos el total
      this.updateTotal()
    },

    // Función para agregar salsas
    addSalsa(salsa) {
      this.cart.salsas.push(salsa)
      this.updateTotal()
    },

    // Función para agregar adiciones
    addAdicion(adicion) {
      this.cart.adiciones.push(adicion)
      this.updateTotal()
    },

    // Función para quitar productos
    removeProduct(product, quantity = 1) {
      const existingProduct = this.cart.products.find((item) => item.product.id === product.id)

      if (existingProduct) {
        if (existingProduct.quantity > quantity) {
          existingProduct.quantity -= quantity
        } else {
          // Si la cantidad a quitar es mayor o igual a la del producto, lo eliminamos del carrito
          this.cart.products = this.cart.products.filter((item) => item.product.id !== product.id)
        }
      }

      // Actualizamos el total
      this.updateTotal()
    },

    // Actualizar el total del carrito
    updateTotal() {
      this.total = this.cartTotal
    }
  }
})
