// Inicializar el carrito en memoria (sin localStorage)
let carrito = { productos: [], adicionales: [], salsas: [], cambios: [], notas: '', total: 0 };
const enviar = document.getElementById('listo')
const aviso = document.getElementById('aviso')
const barra = document.querySelector('.barra_abajo')
const carousel = document.querySelector('.container_corousel')
// Guardar el carrito (en memoria, ya no en localStorage)
function saveCarrito() {
    // No hacer nada, ya que no queremos persistirlo en localStorage
}

// Agregar un producto al carrito
function agregarProducto(producto) {
    carrito.productos.push(producto);
    actualizarTotalCarrito();
    saveCarrito();
}

// Quitar un producto del carrito
function quitarProducto(productoId) {
    carrito.productos = carrito.productos.filter(p => p.id !== productoId);
    actualizarTotalCarrito();
    saveCarrito();
}

// Actualizar el total de productos en el carrito (precio total)
function actualizarTotalCarrito() {
    const totalProductos = carrito.productos.length;
    const totalDisplay = document.getElementById('cart-total');

    // Asegurarse de que cada producto tiene un precio y que el precio es un número válido
    carrito.total = carrito.productos.reduce((acc, producto) => {
        const precio = parseFloat(producto.price) || 0; // Convertir el precio a número, si no es válido usar 0
        return acc + precio;
    }, 0);

    if (totalDisplay) {
        totalDisplay.textContent =  '$' + carrito.total.toLocaleString('es-CO');
    }
}

// Función para manejar el toggle de agregar/quitar producto al hacer clic en la carta
function toggleProducto(producto) {
    const existe = carrito.productos.some(p => p.id === producto.id);
    if (existe) {
        quitarProducto(producto.id);
    } else {
        agregarProducto(producto);
    }
}

// Cuando la página cargue, actualizar el total del carrito (en memoria)
document.addEventListener('DOMContentLoaded', () => {
    actualizarTotalCarrito();
});


function enviarPedidoWhatsApp(indicativoPais, telefono) {
    if (carrito.productos.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de enviar el pedido.");
        return;
    }

    // Crear el mensaje del pedido
    let mensaje = 'Hola, me gustaría hacer el siguiente pedido:\n\n';
    
    carrito.productos.forEach(producto => {
        mensaje += `- ${producto.product_name} (Precio: $${producto.price})\n`;
    });
    
    mensaje += `\nTotal: $${carrito.total.toFixed(2)}\n`;
    
    if (carrito.notas) {
        mensaje += `Notas adicionales: ${carrito.notas}\n`;
    }
    
    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear la URL de WhatsApp con el número y el mensaje
    const url = `https://wa.me/${indicativoPais}${telefono}?text=${mensajeCodificado}`;
    
    // Abrir la URL en una nueva ventana
    window.open(url, '_blank');
}

enviar.addEventListener('click', () => {
    enviarPedidoWhatsApp('57','3053447255')
})


// aviso.addEventListener('click', () => {
//     barra.style.height = '60vh'
//     barra.style.zIndex = 1000
// })

export { saveCarrito, agregarProducto, quitarProducto, actualizarTotalCarrito, toggleProducto, carrito  };
