import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart-bot-2', {
  persist: {
    key: 'cart-bot-2', // La clave bajo la cual se almacenará el estado
    storage: localStorage,
    paths: ['cart', 'total','user','categories'] // Guardamos tanto el carrito como el total
  },

  state: () => {
    return {
      cart: {
        products: [],
        salsas: [],
        adiciones: [],
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
      site_status:{},
      categories:[
        {
            "categoria_id": "10",
            "local_id": "1",
            "categoria_descripcion": "COMBOS 2 PERSONAS",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#53bbb4",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "96",
                    "productogeneral_descripcionweb": "2 Hamburguesa 125 g de carne 100% de res C/U , cebolla caramelizada, salchicha ranchera, queso mozarella, pan brioche, lechuga, tomate.queso philadelphia y  salsas caseras (Verde y Ajo) + PAPAS",
                    "productogeneral_descripcion": "2X1 BURGERMONSTER + PAPAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/36e91489-7763-40a8-afd0-752153efc518.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "98",
                    "productogeneral_precio": "45000.00",
                    "lista_productobase": [
                        {
                            "producto_id": "28",
                            "producto_descripcion": "Burgermonster",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "2.000",
                            "productocombo_precio": "26900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "141",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/0d0f12b6-a4fd-4e6d-9f30-355269d7ef22.jpg",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "139",
                            "producto_descripcion": "Papa Criolla Para Burger (150G)",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "4000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/fe110217-b1cc-4a50-940a-36d68db42f10.jpg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "138",
                                    "producto_descripcion": "Papa Francesa Para Burger (150Gr) - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "4000.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/productos/003ee755-8b34-4aef-a259-42d57a8f5d5f.jpg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": null
                                }
                            ]
                        },
                        {
                            "producto_id": "138",
                            "producto_descripcion": "Papa Francesa Para Burger (150Gr)",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "4000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/003ee755-8b34-4aef-a259-42d57a8f5d5f.jpg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "139",
                                    "producto_descripcion": "Papa Criolla Para Burger (150G) - .",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "4000.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/productos/fe110217-b1cc-4a50-940a-36d68db42f10.jpg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": null
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "152",
                    "productogeneral_descripcionweb": "Salchipapa para 2 Persona con  Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Bacon, Queso Cheddar, y Salsa Verde,Ajo,Bbq,Piña  + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO BACONMONSTER 2P + 2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "1",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/019ab3e5-8703-4fce-b4e5-7d0218f71ebf.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "155",
                    "productogeneral_precio": "46000.00",
                    "lista_productobase": [
                        {
                            "producto_id": "29",
                            "producto_descripcion": "Baconmonster 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "40500.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "143",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d7b48589-46f4-4e88-a2eb-24fe98c307dc.png",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "23",
                            "producto_descripcion": "Quatro 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "132",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "153",
                    "productogeneral_descripcionweb": "Salchipapa para 2 Persona con Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Ripio y Salsa Verde,Ajo,Bbq,Piña  + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO CLASICMONSTER 2P +  2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/8702119d-3a3f-4901-9dca-7a4584104854.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "156",
                    "productogeneral_precio": "37500.00",
                    "lista_productobase": [
                        {
                            "producto_id": "30",
                            "producto_descripcion": "Clasicmonster 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "30900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "144",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/dae2cb82-97ca-49f1-897f-f9734e238147.png",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "23",
                            "producto_descripcion": "Quatro 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "132",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "154",
                    "productogeneral_descripcionweb": "Salchipapa para 2 Persona con  Papa amarilla,Salchicha Premium SM,Queso Gratinado,Costilla Ahumada SIN HUESO en Salsa Bufalo, y  Salsa Verde,Ajo,Bbq,Piña  + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO COSTIMONSTER 2P  +  2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/69c37407-e6b7-453b-a54b-61feba89cbc7.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "157",
                    "productogeneral_precio": "55000.00",
                    "lista_productobase": [
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "14",
                            "producto_descripcion": "Coca Cola Zero 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "123",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "31",
                            "producto_descripcion": "Costimonster 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "50900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "145",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d6d266cf-09c2-49b0-a6b1-b70579f28691.png",
                            "lista_productoCambio": []
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "155",
                    "productogeneral_descripcionweb": "Salchipapa para 2 personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado, Carne Desmechada,Guacamole,Pico de Gallo, y Salsa Verde,Ajo,Bbq,Piña + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO LA DE SIEMPRE 2P + 2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/1f974112-bcb7-4caa-8b24-b016acb881f7.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "158",
                    "productogeneral_precio": "63000.00",
                    "lista_productobase": [
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "14",
                            "producto_descripcion": "Coca Cola Zero 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "123",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "36",
                            "producto_descripcion": "La De Siempre 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "59900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "150",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/ad39edaf-7a6d-47ce-85a0-ca53a397ae7c.png",
                            "lista_productoCambio": []
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "92",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado,Pollo Desmechado,Maduro Guayabo , Maicitos  y Salsa Verde,Ajo,Bbq,Piña + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO LA MATAHAMBRE 2P + 2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/febcc2cf-9ba1-4e63-9156-2e3055c82c56.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "94",
                    "productogeneral_precio": "57900.00",
                    "lista_productobase": [
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "39",
                            "producto_descripcion": "Mata Hambre 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "53900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "153",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/53faa098-0902-4486-bf27-fa4c56d07cac.png",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "22",
                            "producto_descripcion": "Premio 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "131",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "66",
                            "producto_descripcion": "Adicion Chorizo - ",
                            "producto_precio": "14000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "53",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado, Carne Desmechada,Pollo Desmechado,Guacamole,Pico de Gallo. y Salsa Verde,Ajo,Bbq,Piña  + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO LA MIXTICA 2P + 2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/31dad2a0-200b-4ccc-9f46-66425a0e0fb1",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "55",
                    "productogeneral_precio": "71000.00",
                    "lista_productobase": [
                        {
                            "producto_id": "37",
                            "producto_descripcion": "La Mixtica 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "66900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "151",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/7aa802dc-158d-4c97-817a-b46f9a3b490a.png",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "22",
                            "producto_descripcion": "Premio 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "131",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "91",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla,Carne Desmechada,Guacamole,Queso Cheddar,Queso con Maiz,Pico de Gallo,Nachos, y Salsa Verde,Ajo,Bbq,Piña  + 2 GASEOSAS 400 ML",
                    "productogeneral_descripcion": "COMBO NACHIMONSTER 2P + 2 BEBIDAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "10",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/ad69e9d0-c7af-4614-9e48-87bb6fb7f8ad.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "93",
                    "productogeneral_precio": "57900.00",
                    "lista_productobase": [
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "33",
                            "producto_descripcion": "Nachimonster 2 Personas",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "53900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "147",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/cbf69f36-6420-4cbf-a83f-60fd63d9e9ce.jpg",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "24",
                            "producto_descripcion": "Sprite 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "133",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "13",
                                    "producto_descripcion": "Coca Cola Sabor Original 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "122"
                                },
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS 2 PERSONAS"
                }
            ]
        },
        {
            "categoria_id": "26",
            "local_id": "3",
            "categoria_descripcion": "COMBOS PERSONALES",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#e74c3c",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "98",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Bacon, Queso Cheddar, y Salsa Verde,Ajo,Bbq,Piña  + GASEOSA 400 ML",
                    "productogeneral_descripcion": "COMBO BACONMONSTER PERSONAL + BEBIDA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "26",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/9cdb1a6b-35e0-4bed-b362-ce5d294cb082.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "100",
                    "productogeneral_precio": "30500.00",
                    "lista_productobase": [
                        {
                            "producto_id": "43",
                            "producto_descripcion": "Baconmonster Personal",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "28500.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "157",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/61841d74-062e-4a6f-a781-f5ea353d51e4.png",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS PERSONALES"
                },
                {
                    "productogeneral_id": "101",
                    "productogeneral_descripcionweb": "1 Hamburguesa 125 g de carne 100% de res, cebolla caramelizada, salchicha ranchera, queso mozarella, pan brioche, lechuga, tomate.queso philadelphia y  salsas caseras (Verde y Ajo) + PAPAS + BEBIDA",
                    "productogeneral_descripcion": "COMBO BURGERMONSTER + PAPAS + BEBIDA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "26",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/8a13a3a8-9ce4-4c2c-a1f1-87bdd2cf8ea8.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "103",
                    "productogeneral_precio": "32500.00",
                    "lista_productobase": [
                        {
                            "producto_id": "28",
                            "producto_descripcion": "Burgermonster",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "26900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "141",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/0d0f12b6-a4fd-4e6d-9f30-355269d7ef22.jpg",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "138",
                            "producto_descripcion": "Papa Francesa Para Burger (150Gr)",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "4000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/003ee755-8b34-4aef-a259-42d57a8f5d5f.jpg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "139",
                                    "producto_descripcion": "Papa Criolla Para Burger (150G) - .",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "4000.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/productos/fe110217-b1cc-4a50-940a-36d68db42f10.jpg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": null
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS PERSONALES"
                },
                {
                    "productogeneral_id": "100",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Ripio y Salsa Verde,Ajo,Bbq,Piña  + GASEOSA 400 ML",
                    "productogeneral_descripcion": "COMBO CLASICMONSTER PERSONAL + BEBIDA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "26",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/16dac6bc-01a2-460d-937a-6b2133eb79da.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "102",
                    "productogeneral_precio": "25500.00",
                    "lista_productobase": [
                        {
                            "producto_id": "44",
                            "producto_descripcion": "Clasicmonster Personal",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "22900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "158",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/64b3edf0-69bd-48c2-8b85-4f1ca204aa46.png",
                            "lista_productoCambio": []
                        },
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS PERSONALES"
                },
                {
                    "productogeneral_id": "99",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa amarilla,Salchicha Premium SM,Queso Gratinado,Costilla Ahumada SIN HUESO en Salsa Bufalo, y  Salsa Verde,Ajo,Bbq,Piña  + GASEOSA 400 ML",
                    "productogeneral_descripcion": "COMBO COSTIMONSTER PERSONAL + BEBIDA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "1",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "26",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b2489c8c-67d3-4b3b-a1ce-deb520491996.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "producto_id": "101",
                    "productogeneral_precio": "36500.00",
                    "lista_productobase": [
                        {
                            "producto_id": "13",
                            "producto_descripcion": "Coca Cola Sabor Original 400 Ml",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "5900.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "lista_productoCambio": [
                                {
                                    "producto_id": "14",
                                    "producto_descripcion": "Coca Cola Zero 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "123"
                                },
                                {
                                    "producto_id": "22",
                                    "producto_descripcion": "Premio 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "131"
                                },
                                {
                                    "producto_id": "23",
                                    "producto_descripcion": "Quatro 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "132"
                                },
                                {
                                    "producto_id": "24",
                                    "producto_descripcion": "Sprite 400 Ml - ",
                                    "alternativacombo_cantidad": "1.000",
                                    "alternativacombo_precio": "5900.0000000",
                                    "alternativacombo_costoadicional": "0.00",
                                    "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                                    "producto_codigo": "",
                                    "producto_codigointerno": "133"
                                }
                            ]
                        },
                        {
                            "producto_id": "45",
                            "producto_descripcion": "Costimonster Personal",
                            "productocombo_sepuedecambiar": "1",
                            "productocombo_sepuedeeliminar": "0",
                            "productocombo_cantidad": "1.000",
                            "productocombo_precio": "35500.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": "159",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/a2ebc6f7-f02d-49ed-a305-c76335b4adb2.png",
                            "lista_productoCambio": []
                        }
                    ],
                    "lista_productoadicional": [
                        {
                            "producto_id": "96",
                            "producto_descripcion": "Postre Chocomonster - ",
                            "producto_precio": "10000.0000000",
                            "producto_codigo": "",
                            "producto_codigointerno": null
                        }
                    ],
                    "categoria_descripcion": "COMBOS PERSONALES"
                }
            ]
        },
        {
            "categoria_id": "8",
            "local_id": "1",
            "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#51b46d",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "27",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Bacon, Queso Cheddar, y Salsa Verde,Ajo , Piña",
                    "productogeneral_descripcion": "BACONMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/c960fa39-026f-4683-9278-d2e12fe3c1fe.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "29",
                            "producto_presentacion": "",
                            "producto_precio": "40500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d7b48589-46f4-4e88-a2eb-24fe98c307dc.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "143",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "33",
                    "productogeneral_descripcionweb": "Trozos de Chicharron Carnudo,Papa Criolla, Guacamole",
                    "productogeneral_descripcion": "CHICHAMONSTER",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/60322090-a45b-4e85-9c6b-898d042e3fd5.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "35",
                            "producto_presentacion": "",
                            "producto_precio": "48000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/19f8aa13-45a5-4613-8caf-67c4fd6bd2ee.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "149",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "28",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Ripio y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "CLASICMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/45c8cde1-9839-4721-bc0f-033b0f944c5a.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "30",
                            "producto_presentacion": "",
                            "producto_precio": "30900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/dae2cb82-97ca-49f1-897f-f9734e238147.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "144",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "220",
                    "productogeneral_descripcionweb": "Salchipapa Pa 6 + SHOW DE QUESO , + GASEOSA 1,5 LT COCACOLA con Papa Amarilla,Salchicha Premium SM,Bacon Premium,Costilla Ahumada en Salsa Bufalo,Maicitos,Queso Gratinado,Ripio,Maduro,Guayabo, y Salsa",
                    "productogeneral_descripcion": "COMBO NAVIDEÑO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/f3277d05-9831-4b5e-a1f7-04ced02eb8b8.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "226",
                            "producto_presentacion": "",
                            "producto_precio": "125900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/105ee3af-7689-4588-95d6-f4419368e9ed.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "14",
                            "modificador_nombre": "TIPO DE SALCHICHA SALCHIMONSTER",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "22",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "24000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "23",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "15",
                            "modificador_nombre": "TIPO DE PAPAS  SALCHIMONSTER",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "20",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA EN SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "8000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "21",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "29",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado,Costilla Ahumada SIN HUESO en Salsa Bufalo, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "COSTIMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/cdc9be25-5241-4afd-aaeb-a1a0cc8acfca.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "31",
                            "producto_presentacion": "",
                            "producto_precio": "50900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d6d266cf-09c2-49b0-a6b1-b70579f28691.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "145",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "34",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado, Carne Desmechada,Guacamole,Pico de Gallo, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "LA DE SIEMPRE 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/ead92109-a287-4d30-bce5-957ae4425453.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "36",
                            "producto_presentacion": "",
                            "producto_precio": "59900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/ad39edaf-7a6d-47ce-85a0-ca53a397ae7c.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "150",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "35",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado, Carne Desmechada,Pollo Desmechado,Guacamole,Pico de Gallo. y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "LA MIXTICA 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b497d55f-53ac-45eb-a37c-27c727be6cbc.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "37",
                            "producto_presentacion": "",
                            "producto_precio": "68900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/7aa802dc-158d-4c97-817a-b46f9a3b490a.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "151",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "36",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado, Chorizo, Guacamole, Chicharron , Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "LA NEA 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b8f67f35-fbc0-480a-98cc-3d747172fcd3.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "38",
                            "producto_presentacion": "",
                            "producto_precio": "67000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/8849b81a-5db2-440c-9351-3d343407bb9e.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "152",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "30",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla, Salchicha Premium SM , Queso Gratinado,Maduro Guayabo, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "MADURIMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/ed72ee34-adc3-43e8-9644-55403a690590.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "32",
                            "producto_presentacion": "",
                            "producto_precio": "39500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d925099e-4209-43de-b96b-94b31d6ade6d.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "146",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "37",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado,Pollo Desmechado,Maduro Guayabo , Maicitos  y Salsa Verde,Ajo , Piña",
                    "productogeneral_descripcion": "MATA HAMBRE 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/5bd7b2c4-4acc-4f28-a436-a7d8468ccca5.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "39",
                            "producto_presentacion": "",
                            "producto_precio": "53900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/53faa098-0902-4486-bf27-fa4c56d07cac.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "153",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "31",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla,Carne Desmechada,Guacamole,Queso Cheddar,Queso con Maiz,Pico de Gallo,Nachos, y Salsa Verde,Ajo , Piña",
                    "productogeneral_descripcion": "NACHIMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/70ea6534-11d8-48bb-b31e-321c86d1ab2f.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "33",
                            "producto_presentacion": "",
                            "producto_precio": "53900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/cbf69f36-6420-4cbf-a83f-60fd63d9e9ce.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": "147",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "32",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Pollo Crunch en salsa a la Naranja , y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "POLLIMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/231af275-5aa1-43ff-ac23-00a42df834ce.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "34",
                            "producto_presentacion": "",
                            "producto_precio": "46500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/1d3266ba-571e-4217-a165-6f6e219e1f72.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "148",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "38",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa amarilla,Salchicha Premium SM,Queso Gratinado,Trozos de Chicharron Carnudo, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "PORKYMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/f7b2a4e3-a2a7-40f4-90f8-7a6f41edc2d1.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "40",
                            "producto_presentacion": "",
                            "producto_precio": "51500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/f2b690c6-fc70-4a19-962b-57871c286ec9.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "154",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "10",
                            "modificador_nombre": "TIPO DE SALCHICHA 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "13",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "14",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "39",
                    "productogeneral_descripcionweb": "Salchipapa para dos personas con Papa Amarilla,Salchicha RANCHERA,Queso Gratinado,Maicitos, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "RANCHIMONSTER 2 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/719fe7e5-6843-4179-b9df-e6dd9c43fb2c.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "41",
                            "producto_presentacion": "",
                            "producto_precio": "48900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/9a02fec0-22ac-4e30-a824-3f694989dbb8.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "155",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "9",
                            "modificador_nombre": "TIPO DE PAPAS 2 PERSONAS",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "11",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "12",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                },
                {
                    "productogeneral_id": "40",
                    "productogeneral_descripcionweb": "Salchipapa para SEIS HAMBRIENTOS con Papa Amarilla,Salchicha Premium SM,Pollo Crunch en salsa a la Naranja,Bacon Premium,Costilla Ahumada en Salsa Bufalo,Chorizo,Maicitos,Queso Gratinado,Ripio,Maduro,",
                    "productogeneral_descripcion": "SALCHIMONSTER PARA 6 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "8",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/580aae1e-84e8-47fa-8c09-b9cefb852b7e.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "42",
                            "producto_presentacion": "",
                            "producto_precio": "125900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/7c39dc25-cb1a-461b-b95a-c9e2295888a2.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "156",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "14",
                            "modificador_nombre": "TIPO DE SALCHICHA SALCHIMONSTER",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "22",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "24000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "23",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "15",
                            "modificador_nombre": "TIPO DE PAPAS  SALCHIMONSTER",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "20",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA EN SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "8000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "21",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA SALCHIMONSTER",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS 2 PERSONAS"
                }
            ]
        },
        {
            "categoria_id": "9",
            "local_id": "1",
            "categoria_descripcion": "SALCHIPAPAS PERSONALES",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#f092b0",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "41",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Bacon, Queso Cheddar, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "BACONMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/c6a03e04-aaa9-4516-a2a5-6e438bc5fac8.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "43",
                            "producto_presentacion": "",
                            "producto_precio": "28500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/61841d74-062e-4a6f-a781-f5ea353d51e4.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "157",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "42",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Ripio y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "CLASICMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b87b7db7-3630-4b18-8ed3-c17ad0fe29e3.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "44",
                            "producto_presentacion": "",
                            "producto_precio": "22900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/64b3edf0-69bd-48c2-8b85-4f1ca204aa46.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "158",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "43",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa amarilla,Salchicha Premium SM,Queso Gratinado,Costilla Ahumada SIN HUESO en Salsa Bufalo, y  Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "COSTIMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/a028e74e-2d2c-432c-af3d-8d8a022766b1.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "45",
                            "producto_presentacion": "",
                            "producto_precio": "35500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/a2ebc6f7-f02d-49ed-a305-c76335b4adb2.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "159",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "44",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa amarilla,Salchicha Premium SM,Queso Gratinado, Carne Desmechada,Guacamole,Pico de Gallo, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "LA DE SIEMPRE PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b970a201-a8d2-4e64-8983-b83e3728eb97.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "46",
                            "producto_presentacion": "",
                            "producto_precio": "41900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/aa53e399-4454-4374-99c2-59e19ab4c24a.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "160",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "45",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa amarilla,Salchicha Premium SM,Queso Gratinado, Carne Desmechada,Pollo Desmechado,Guacamole,Pico de Gallo. y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "LA MIXTICA PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/5f89b48f-bbf5-4ec7-8541-901794278582.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "47",
                            "producto_presentacion": "",
                            "producto_precio": "47500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/2b4cb87d-05ca-4169-b97d-8c432fd54e01.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "161",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "46",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con Papa Amarilla, Salchicha Premium SM , Queso Gratinado,Maduro Guayabo, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "MADURIMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/5c2449d8-2802-4065-8231-04593f3d6bec.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "48",
                            "producto_presentacion": "",
                            "producto_precio": "27500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d3faff50-3713-4414-a0d7-8b3d7bd716f8.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "162",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "47",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona Papa amarilla,Salchicha Premium SM,Queso Gratinado,Pollo Desmechado,Maduro Guayabo , Maicitos  y SaLsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "MATA HAMBRE PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/7cea0ba3-5e87-46fa-b2b8-63c83c82eac4.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "49",
                            "producto_presentacion": "",
                            "producto_precio": "38900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/5cfeeb7d-c175-4ae4-ab26-109b09be8bc6.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "163",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "48",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa Amarilla,Carne Desmechada,Guacamole,Queso Cheddar,Queso con Maiz,Pico de Gallo,Nachos, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "NACHIMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/07939a1f-35fc-46e5-8a7c-f78c182e9421.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "50",
                            "producto_presentacion": "",
                            "producto_precio": "37900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/e7af754e-0a07-4000-92a1-6be519a939e5.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": "164",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "49",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa Amarilla, Salchicha Premium SM , Queso Gratinado, Pollo Crunch en salsa a la Naranja, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "POLLIMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/57248341-8d26-4798-82f0-4d531b24d0f0.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "51",
                            "producto_presentacion": "",
                            "producto_precio": "32900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/1944ada2-8e01-41c4-a2bb-3139b3b4e17d.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "165",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "50",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa Amarilla,Salchicha RANCHERA,Queso Gratinado,Maicitos, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "PORKYMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/84133fbb-e157-4b5b-9770-dff41687d5c5.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "52",
                            "producto_presentacion": "",
                            "producto_precio": "35500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/46d19ade-a524-45cf-9599-79c5b1ae4d26.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "166",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                },
                {
                    "productogeneral_id": "51",
                    "productogeneral_descripcionweb": "Salchipapa para 1 Persona con  Papa Amarilla,Salchicha RANCHERA,Queso Gratinado,Maicitos, y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "RANCHIMONSTER PERSONAL",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "9",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/4e3baae6-c6d2-4962-ae36-f9b34a33cc32.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "53",
                            "producto_presentacion": "",
                            "producto_precio": "34500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/7696cef4-830d-4438-be8a-76ab336fccea.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "167",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "SALCHIPAPAS PERSONALES"
                }
            ]
        },
        {
            "categoria_id": "13",
            "local_id": "1",
            "categoria_descripcion": "PRODUCTO NUEVO",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#e74c3c",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "26",
                    "productogeneral_descripcionweb": "Hamburguesa 125 g de carne 100% de res, cebolla caramelizada, salchicha ranchera, queso mozarella, pan brioche, lechuga, tomate.queso philadelphia y  salsas caseras (Verde y Ajo)",
                    "productogeneral_descripcion": "BURGERMONSTER",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "13",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/c4f2f1b6-57ca-4de8-842d-283ec9d01d8a.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "28",
                            "producto_presentacion": "",
                            "producto_precio": "26900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/0d0f12b6-a4fd-4e6d-9f30-355269d7ef22.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": "141",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "17",
                            "modificador_nombre": "ADICIONES BURGER",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "41",
                                    "modificadorseleccion_nombre": "ADICION CARNE DE RES",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "10",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "42",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA 2 LONCHAS",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "10",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "43",
                                    "modificadorseleccion_nombre": "BAÑO DE QUESO BURGER 6 LONCHAS",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "10000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "10",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "44",
                                    "modificadorseleccion_nombre": "PAPA CRIOLLA PARA BURGER (150G)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "10",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "45",
                                    "modificadorseleccion_nombre": "PAPA FRANCESA PARA BURGER (150GR)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "10",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "PRODUCTO NUEVO"
                },
                {
                    "productogeneral_id": "141",
                    "productogeneral_descripcionweb": "Salchipapa Personal con Papa Amarilla,Salchicha Premum SM,Queso Gratinado, Carne Desmechada,Pollo Desmechado,Tocinete , Maduro guayabo Premium y Salsa Verde,Ajo,Bbq,Piña",
                    "productogeneral_descripcion": "DETODITO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "13",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/316b0bbf-3a25-40bb-98b5-3fd42bc45495.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "143",
                            "producto_presentacion": "DETODITO",
                            "producto_precio": "35900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/57190689-99ac-4aa3-b76c-aeda5085cefa.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "11",
                            "modificador_nombre": "TIPO DE SALCHICHA PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "15",
                                    "modificadorseleccion_nombre": "CON SALCHICHA PREMIUM SM PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "16",
                                    "modificadorseleccion_nombre": "CAMBIO RANCHERA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "12000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "12",
                            "modificador_nombre": "TIPO DE PAPAS PERSONAL",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "17",
                                    "modificadorseleccion_nombre": "CAMBIO FRANCESA 2 PERSONAS",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "4000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "18",
                                    "modificadorseleccion_nombre": "CON PAPA CRIOLLA PERSONAL",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "0.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        },
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "PRODUCTO NUEVO"
                },
                {
                    "productogeneral_id": "139",
                    "productogeneral_descripcionweb": "Papas para una persona con Papa Amarilla,Queso Gratinado,Tocineta Premium, Salsa Cheddar",
                    "productogeneral_descripcion": "PAPAS BACON",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "13",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/769a842b-6361-42d1-9ba0-4e3b2583a599.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "141",
                            "producto_presentacion": "PAPAS BACON",
                            "producto_precio": "19900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/507d9b7d-be99-490d-8870-e71c79e3fac8.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "PRODUCTO NUEVO"
                },
                {
                    "productogeneral_id": "140",
                    "productogeneral_descripcionweb": "Picada para 3 Persona con Papa Amarilla,Salchicha Premium SM,Queso Gratinado,Tocineta, Maduro Guayabo Premium,Chicharron, Costilla Ahumada ,Carne Desmechada,Guacamole, Chorizo y Salsa Verde,Ajo,Bbq",
                    "productogeneral_descripcion": "PICADA PA 3 PERSONAS",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "13",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/d0da976c-dc8c-4365-98c3-d138234688fb.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "142",
                            "producto_presentacion": "",
                            "producto_precio": "99900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/eb9739cb-097f-4514-8e26-32d46457413a.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "16",
                            "modificador_nombre": "ADICIONES DE SALCHIPAPAS",
                            "modificador_esmultiple": "1",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "24",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA RANCHERA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "20000.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/7384ceab-7b29-4d50-95ad-93e08e067fed.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "25",
                                    "modificadorseleccion_nombre": "ADICION SALCHICHA PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8900.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/306e75c5-03b3-46be-b7fe-3d337e90b1e2.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "26",
                                    "modificadorseleccion_nombre": "ADICION RIPIO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/08d357c0-68b4-4163-88f2-8317a2333eac.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "27",
                                    "modificadorseleccion_nombre": "ADICION QUESO MOZARELLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/5d42062d-8447-4f13-a214-179bba158829.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "28",
                                    "modificadorseleccion_nombre": "ADICION POLLO DESMECHADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": "salchimonsterrestaurantpe/seleccion/57ea1dbc-4d2b-4295-b08e-ab542bcb45b7.jpg",
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "29",
                                    "modificadorseleccion_nombre": "ADICION POLLO APANADO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "15500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "30",
                                    "modificadorseleccion_nombre": "ADICION PICO E GALLO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "3500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "31",
                                    "modificadorseleccion_nombre": "ADICION PAPA FRANCESA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "7700.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "32",
                                    "modificadorseleccion_nombre": "ADICION PAPA AMARILLA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "33",
                                    "modificadorseleccion_nombre": "ADICION MAIZ",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "34",
                                    "modificadorseleccion_nombre": "ADICION MADURO GUAYABO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "5500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "35",
                                    "modificadorseleccion_nombre": "ADICION GUACAMOLE",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "6600.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "36",
                                    "modificadorseleccion_nombre": "ADICION COSTILLA AHUMADA",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "17900.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "37",
                                    "modificadorseleccion_nombre": "ADICION CHORIZO",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "14000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "38",
                                    "modificadorseleccion_nombre": "ADICION CHICHARRON",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "19500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "39",
                                    "modificadorseleccion_nombre": "ADICION CARNE PREMIUM (DESMECHADA)",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "16500.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                },
                                {
                                    "modificadorseleccion_id": "40",
                                    "modificadorseleccion_nombre": "ADICION BACON PREMIUM",
                                    "modificadorseleccion_tipo": "1",
                                    "modificadorseleccion_precio": "8800.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "17",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "PRODUCTO NUEVO"
                },
                {
                    "productogeneral_id": "94",
                    "productogeneral_descripcionweb": "Postre para 1 persona Trozos de Chocorramo Apanado con lechera y/o chocolate",
                    "productogeneral_descripcion": "POSTRE CHOCOMONSTER",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "13",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/2dee98c7-ed09-4653-92be-4c838a369dfc.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "96",
                            "producto_presentacion": "",
                            "producto_precio": "10000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/bd5c4409-c027-433c-b0b6-d830e6c8d712.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "PRODUCTO NUEVO"
                }
            ]
        },
        {
            "categoria_id": "27",
            "local_id": "1",
            "categoria_descripcion": "POLLO",
            "categoria_estado": "1",
            "categoria_padreid": "13",
            "categoria_color": "#e74c3c",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "59",
                    "productogeneral_descripcionweb": "2 Presas de Pollo apanadas,papas francesa,miel hot level 1, salsa de la casa",
                    "productogeneral_descripcion": "1/4 CHICKEN MONSTER",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "27",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/22428b7d-57e1-4f94-ac44-d4ecbe36d4a4.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "62",
                            "producto_presentacion": "",
                            "producto_precio": "22000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/618ddc6c-6716-4ee4-98a8-e8b4a6955006.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "POLLO"
                },
                {
                    "productogeneral_id": "60",
                    "productogeneral_descripcionweb": "4 Strips de pollo, papa francesa,miel hot level 1,salsa de la casa",
                    "productogeneral_descripcion": "STRIPS MONSTER",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "27",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/f2e90cab-33f1-4897-bfa8-2a1642d5794a.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "61",
                            "producto_presentacion": "",
                            "producto_precio": "25900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/7c544662-6f95-4556-9334-671457450dbb.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "POLLO"
                }
            ]
        },
        {
            "categoria_id": "11",
            "local_id": "9",
            "categoria_descripcion": "SHOW´S",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#3079ab",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "57",
                    "productogeneral_descripcionweb": "Show de Chicharron carnudo 450 gr , te lo servimos a la mesa o para domicilio",
                    "productogeneral_descripcion": "SHOW CHICHARRON",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "11",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/c3cfa1d0-2711-4603-9034-1f31bcffb4c0.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "59",
                            "producto_presentacion": "",
                            "producto_precio": "35000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/979cedee-d41d-4a62-bc7f-5ce2ed9d1f14.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "SHOW´S"
                },
                {
                    "productogeneral_id": "56",
                    "productogeneral_descripcionweb": "Show de Queso 400 gr , te lo servimos a la mesa o para domicilio",
                    "productogeneral_descripcion": "SHOW QUESO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "11",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/8c43321b-9852-42b9-bef2-bb37c0129e93.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "58",
                            "producto_presentacion": "",
                            "producto_precio": "19500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/25bbfe2d-b11f-422c-9267-891da85e5b1c.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "SHOW´S"
                }
            ]
        },
        {
            "categoria_id": "4",
            "local_id": "1",
            "categoria_descripcion": "Bebidas",
            "categoria_estado": "1",
            "categoria_padreid": "0",
            "categoria_color": "#637a91",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "9",
                    "productogeneral_descripcionweb": "AGUA BRISA 600 ML",
                    "productogeneral_descripcion": "AGUA BRISA 600 ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/bc4e98ad-d833-441a-98b7-ff7627a8e648.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "11",
                            "producto_presentacion": "Agua 600",
                            "producto_precio": "4000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/1d5f9ba8-cb77-4392-99f9-76a969883f19.webp",
                            "producto_codigo": "",
                            "producto_codigointerno": "120",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "10",
                    "productogeneral_descripcionweb": "COCA COLA SABOR ORIGINAL 1.5 LT",
                    "productogeneral_descripcion": "COCA COLA SABOR ORIGINAL 1.5 LT",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/be37c1f8-9e6c-41c4-b059-b39300a22338.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "12",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/ba2a099b-73c8-4814-8cb7-ad4336f30d3d.webp",
                            "producto_codigo": "",
                            "producto_codigointerno": "121",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "11",
                    "productogeneral_descripcionweb": "COCA COLA SABOR ORIGINAL 400 ML",
                    "productogeneral_descripcion": "COCA COLA SABOR ORIGINAL 400 ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/491ad643-359d-4bbb-9834-68aa1d432339.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "13",
                            "producto_presentacion": "",
                            "producto_precio": "5900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/d4a326f0-5caf-4715-91a0-6571765d654e.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "122",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "12",
                    "productogeneral_descripcionweb": "COCA COLA ZERO 400 ML",
                    "productogeneral_descripcion": "COCA COLA ZERO 400 ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/4f2da33b-720e-4364-848c-7df6998ee8a1.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "14",
                            "producto_presentacion": "",
                            "producto_precio": "5900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/9c57119e-2a95-4816-bc7f-3d9b423d184b.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "123",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "157",
                    "productogeneral_descripcionweb": "COCACOLA ZERO 1.5L",
                    "productogeneral_descripcion": "COCACOLA ZERO 1.5L",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b86180e9-dc37-4dec-9c0f-7aa9ac9687e2.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "161",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/39df6606-8926-4cdb-bf1b-38a92d6370e2.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "14",
                    "productogeneral_descripcionweb": "JUGO DE LULO",
                    "productogeneral_descripcion": "JUGO DE LULO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/fb1d8699-5a91-4283-9a92-67584d5e1003.jpeg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "16",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/fd02f656-6e78-4d67-98d9-e58c2ea2341c.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "125",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "16",
                    "productogeneral_descripcionweb": "JUGO DE MANGO",
                    "productogeneral_descripcion": "JUGO DE MANGO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/6b700b83-9743-4822-b8c0-60474d15887c.jpeg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "18",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/c99ad4b0-e0f2-46ef-8270-6b4560bcfe3d.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "127",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "17",
                    "productogeneral_descripcionweb": "JUGO DE MARACUYA",
                    "productogeneral_descripcion": "JUGO DE MARACUYA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/6a2a031c-8651-4d3f-9c10-a6c641534a68.jpeg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "19",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/3ff59649-55ed-412d-9730-db90454932fe.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "128",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "159",
                    "productogeneral_descripcionweb": "PREMIO 1.5 L",
                    "productogeneral_descripcion": "PREMIO 1.5 L",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/19e18b89-a32f-4ae6-9cab-57a258f3bbb7.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "159",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/01fa6084-c47f-4550-91c5-323a8b7767ba.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "20",
                    "productogeneral_descripcionweb": "PREMIO 400 ML",
                    "productogeneral_descripcion": "PREMIO 400 ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/43288d8e-908a-4060-826d-6722da8583f0.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "22",
                            "producto_presentacion": "",
                            "producto_precio": "5900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/c05f91b7-9c05-4182-9196-b421a992e05b.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "131",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "158",
                    "productogeneral_descripcionweb": "QUATRO 1.5 L",
                    "productogeneral_descripcion": "QUATRO 1.5 L",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/dc9ce64a-e442-4706-9c0b-2d5d821d4041.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "160",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/25045594-45a2-4324-8f6a-d2e7f82ecc6a.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "21",
                    "productogeneral_descripcionweb": "QUATRO 400 ML",
                    "productogeneral_descripcion": "QUATRO 400 ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/87d77808-036d-4e73-b9fb-50e3fd78a526.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "23",
                            "producto_presentacion": "",
                            "producto_precio": "5900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/30454723-c01f-4adf-8627-034c3a4e38e4.webp",
                            "producto_codigo": "",
                            "producto_codigointerno": "132",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "156",
                    "productogeneral_descripcionweb": "SPRITE 1.5 L",
                    "productogeneral_descripcion": "SPRITE 1.5 L",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/7587b7f9-786d-4435-a269-f489789d0152.png",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "162",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/0a1ce738-55da-4811-9191-35fa69bb5672.png",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                },
                {
                    "productogeneral_id": "22",
                    "productogeneral_descripcionweb": "SPRITE 400 ML",
                    "productogeneral_descripcion": "SPRITE 400 ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "4",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/68768441-5e8f-4a8d-8c68-dddf782faba4.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "24",
                            "producto_presentacion": "",
                            "producto_precio": "5900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/01922c6b-bdda-447c-ba15-5e55c9be817f.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "133",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Bebidas"
                }
            ]
        },
        {
            "categoria_id": "5",
            "local_id": "1",
            "categoria_descripcion": "Cervezas",
            "categoria_estado": "1",
            "categoria_padreid": "0",
            "categoria_color": "#b7c0c7",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "23",
                    "productogeneral_descripcionweb": "CERVEZA BUDWEISER LATA",
                    "productogeneral_descripcion": "CERVEZA BUDWEISER LATA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "5",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/4752807d-c2c4-4d15-ab58-f010e9d14259.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "25",
                            "producto_presentacion": "",
                            "producto_precio": "8500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/06ec99ef-d2f6-4157-9da9-b60330520874.png",
                            "producto_codigo": "",
                            "producto_codigointerno": "134",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "Cervezas"
                },
                {
                    "productogeneral_id": "24",
                    "productogeneral_descripcionweb": "CERVEZA CORONA BOT. 355ML",
                    "productogeneral_descripcion": "CERVEZA CORONA BOT. 355ML",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "5",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productos/72a0447d-8d53-48c0-b063-123fdfb41e1c.webp",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "26",
                            "producto_presentacion": "",
                            "producto_precio": "9900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/products/f19ad6a5-aa68-4ed7-bac2-18adc3c44ff4.jpeg",
                            "producto_codigo": "",
                            "producto_codigointerno": "135",
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [
                        {
                            "modificador_id": "20",
                            "modificador_nombre": "MICHELADO",
                            "modificador_esmultiple": "0",
                            "modificador_cantidadminima": "0",
                            "listaModificadores": [
                                {
                                    "modificadorseleccion_id": "51",
                                    "modificadorseleccion_nombre": "MICHELADO",
                                    "modificadorseleccion_tipo": "0",
                                    "modificadorseleccion_precio": "2000.00",
                                    "modificadorseleccion_urlimagen": null,
                                    "productogeneralmodificador_cantidadmaxima": "1",
                                    "productogeneralmodificador_orden": "1"
                                }
                            ]
                        }
                    ],
                    "categoria_descripcion": "Cervezas"
                }
            ]
        },
        {
            "categoria_id": "14",
            "local_id": "11",
            "categoria_descripcion": "ADICIONES SALCHIPAPAS",
            "categoria_estado": "1",
            "categoria_padreid": "20",
            "categoria_color": "#f9845b",
            "categoria_delivery": "1",
            "products": [
                {
                    "productogeneral_id": "61",
                    "productogeneral_descripcionweb": "Adicion de Tocineta",
                    "productogeneral_descripcion": "ADICION BACON PREMIUM",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/bc94d869-b775-4bdb-81ea-1e1e267bab32.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "63",
                            "producto_presentacion": "",
                            "producto_precio": "8800.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/f53c8dde-0a95-4d9c-9267-9d6d37e94ffe.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "62",
                    "productogeneral_descripcionweb": "Adicion de Carne Premium Desmechada",
                    "productogeneral_descripcion": "ADICION CARNE PREMIUM (DESMECHADA)",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/c5aacf9e-e121-48e9-898c-c09895a204ca.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "64",
                            "producto_presentacion": "",
                            "producto_precio": "16500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/2bf5d5fa-d197-4d9e-a54c-73b0f036d16f.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "63",
                    "productogeneral_descripcionweb": "Adicion de Chicharron Carnudo",
                    "productogeneral_descripcion": "ADICION CHICHARRON",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/63f78b5e-cb26-4970-81bd-2486b44261ca.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "65",
                            "producto_presentacion": "",
                            "producto_precio": "19500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/6e364326-85df-4627-a2e8-f6b11a63369e.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "64",
                    "productogeneral_descripcionweb": "Adicion de Chorizo",
                    "productogeneral_descripcion": "ADICION CHORIZO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/d1250b95-9f04-4567-83a7-6757620d3f42.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "66",
                            "producto_presentacion": "",
                            "producto_precio": "14000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/4a6e9906-1617-4b21-b3d6-5c53645427b3.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "65",
                    "productogeneral_descripcionweb": "Adicion de Costilla Ahumada Sin Hueso",
                    "productogeneral_descripcion": "ADICION COSTILLA AHUMADA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/bfe96ec1-e183-4986-ab17-cc31e1be4c4f.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "67",
                            "producto_presentacion": "",
                            "producto_precio": "17900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/3c4d272c-7d5c-4367-a94d-560ef4d35324.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "66",
                    "productogeneral_descripcionweb": "Adicion de Guacamole",
                    "productogeneral_descripcion": "ADICION GUACAMOLE",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/ef53a4b8-750a-439f-bddf-0323e15558a5.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "68",
                            "producto_presentacion": "",
                            "producto_precio": "6600.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/9f878f96-cb47-4e3a-876f-4e7f8fbb9942.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "67",
                    "productogeneral_descripcionweb": "Adicion de Maduro Guayabo",
                    "productogeneral_descripcion": "ADICION MADURO GUAYABO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/a840d3b4-b837-4e86-bf92-9261fc4072c2.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "69",
                            "producto_presentacion": "",
                            "producto_precio": "5500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/d79382ea-97ff-437a-9c08-ca43864a8d4c.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "68",
                    "productogeneral_descripcionweb": "Adicion de Maiz",
                    "productogeneral_descripcion": "ADICION MAIZ",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/fc84cb83-7767-4539-911b-91f42110d9e4.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "70",
                            "producto_presentacion": "",
                            "producto_precio": "5500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/0aaf6de8-e639-4798-ba86-5b29bfb98cf7.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "69",
                    "productogeneral_descripcionweb": "Adicion de Papa Amarilla",
                    "productogeneral_descripcion": "ADICION PAPA AMARILLA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/b7bc9d2c-8409-4f70-b5ea-ad949d5d619a.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "71",
                            "producto_presentacion": "",
                            "producto_precio": "6600.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/99a6281a-6323-4078-845a-2e5b4ae2c81a.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "70",
                    "productogeneral_descripcionweb": "Adicion de Papa Francesa",
                    "productogeneral_descripcion": "ADICION PAPA FRANCESA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/5d0bc4f4-350f-44a3-87fe-a7b9d81ec562.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "72",
                            "producto_presentacion": "",
                            "producto_precio": "7700.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/96cd9a59-e9ee-4ad7-af0e-e2e58350d5fa.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "71",
                    "productogeneral_descripcionweb": "Adicion de Pico e Gallo",
                    "productogeneral_descripcion": "ADICION PICO E GALLO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/d61198ae-bc27-4c5f-92e6-8279fb6cff7d.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "73",
                            "producto_presentacion": "",
                            "producto_precio": "3500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/ca6d805f-a6fb-4768-96a3-eb445e248edf.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "72",
                    "productogeneral_descripcionweb": "Adicion de Pollo Apanado",
                    "productogeneral_descripcion": "ADICION POLLO APANADO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/d0a2531b-7bd1-4c47-888e-5808e7f9749a.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "74",
                            "producto_presentacion": "",
                            "producto_precio": "15500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/e223a46f-bb79-47bd-b252-8145d1b76678.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "73",
                    "productogeneral_descripcionweb": "Adicion de Pollo Desmechado",
                    "productogeneral_descripcion": "ADICION POLLO DESMECHADO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/a1047f79-eede-48f7-ae91-0c44181121f4.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "75",
                            "producto_presentacion": "",
                            "producto_precio": "16500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/6bdc17db-97b5-49d9-9f34-b8753472007e.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "74",
                    "productogeneral_descripcionweb": "Adicion de Queso Mozarella",
                    "productogeneral_descripcion": "ADICION QUESO MOZARELLA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/057fc89a-1811-459c-93e3-04b0e1eaad63.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "76",
                            "producto_presentacion": "",
                            "producto_precio": "6600.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/a2c8991b-c6d0-440e-a298-87e47db811e1.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "75",
                    "productogeneral_descripcionweb": "Adicion de Ripio",
                    "productogeneral_descripcion": "ADICION RIPIO",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/5e98f787-0ca0-4c3d-8b89-1d872a76153a.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "77",
                            "producto_presentacion": "",
                            "producto_precio": "3500.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/260ec543-1ac8-40f4-9693-f425707897d7.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "76",
                    "productogeneral_descripcionweb": "Adicion de Salchicha Premium SM",
                    "productogeneral_descripcion": "ADICION SALCHICHA PREMIUM",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/338018fb-c063-4f38-bb27-ed48de2bfe10.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "78",
                            "producto_presentacion": "",
                            "producto_precio": "8900.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/cc8b7af8-9ec1-4e72-896f-2ac4f4280ccc.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                },
                {
                    "productogeneral_id": "77",
                    "productogeneral_descripcionweb": "Adicion de Salchicha Ranchera",
                    "productogeneral_descripcion": "ADICION SALCHICHA RANCHERA",
                    "productogeneral_marca": "",
                    "productogeneral_escombo": "0",
                    "productogeneral_preciofijo": "1",
                    "productogeneral_noalteratotalcambio": "0",
                    "productogeneral_totalpreciomayor": "0",
                    "productogeneral_leysunat": "0",
                    "categoria_id": "14",
                    "productogeneral_urlimagen": "salchimonsterrestaurantpe/productogeneral/4e626a07-ae9a-4618-85f6-db996947dd19.jpg",
                    "productogeneral_estado": "Activo",
                    "notas": [],
                    "lista_presentacion": [
                        {
                            "producto_id": "79",
                            "producto_presentacion": "",
                            "producto_precio": "20000.00",
                            "producto_delivery": "1",
                            "producto_urlimagen": "salchimonsterrestaurantpe/productos/06293c9d-77f9-4011-ad7a-908d2e4b0785.jpg",
                            "producto_codigo": "",
                            "producto_codigointerno": null,
                            "producto_estado": "Activo"
                        }
                    ],
                    "lista_agrupadores": [],
                    "categoria_descripcion": "ADICIONES SALCHIPAPAS"
                }
            ]
        }
    ]
    }
  },

  getters: {
    cartTotal(state) {
      return (
        state.cart.products.reduce((acc, item) => acc +  this.getProductPrice(item.product)  * item.quantity, 0) +
        state.cart.salsas.reduce((acc, salsa) => acc + salsa.price, 0) +
        state.cart.adiciones.reduce((acc, add) => acc + add.price, 0)
      )
    }
  },

  actions: {
    // Función para agregar productos
    addProduct(product, quantity = 1) {
      const existingProduct = this.cart.products.find((item) => this.getProductId(item.product) == this.getProductId(product))


      console.log(this.getProductId(product))
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
      const existingProduct = this.cart.products.find((item) => this.getProductId(item.product) == this.getProductId(product))

      if (existingProduct) {
        if (existingProduct.quantity > quantity) {
          existingProduct.quantity -= quantity
        } else {
          // Si la cantidad a quitar es mayor o igual a la del producto, lo eliminamos del carrito
          this.cart.products = this.cart.products.filter((item) => this.getProductId(item.product) !== this.getProductId(product))
        }
      }

      // Actualizamos el total
      this.updateTotal()
    },

    // Actualizar el total del carrito
    updateTotal() {
      this.total = this.cartTotal
    },

    getProductPrice(product) {
      const generalPrice = product.productogeneral_precio;
      const presentationPrice = product.lista_presentacion?.[0]?.producto_precio;
      return generalPrice !== undefined ? generalPrice : presentationPrice || 0;
  },

  getProductId(product) {
    if (product.producto_id) {
      return product.producto_id;
    } else if (
      product.lista_presentacion &&
      product.lista_presentacion.length > 0 &&
      product.lista_presentacion[0].producto_id
    ) {
      return product.lista_presentacion[0].producto_id;
    } else {
      console.error('No valid product ID found for product:', product);
      return null; // Or throw an error if appropriate
    }
  },
  }
})
