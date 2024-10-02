// Inicializar el carrito en memoria (sin localStorage)
let carrito = {
    productos: [],
    total: 0
};


const enviar = document.getElementById('listo')
const aviso = document.getElementById('aviso')
const barra = document.querySelector('.barra_abajo')
const carousel = document.querySelector('.container_corousel')
const carta = document.querySelector('.product_card')
// Guardar el carrito (en memoria, ya no en localStorage)
function saveCarrito() {
    // No hacer nada, ya que no queremos persistirlo en localStorage
}

function agregarProducto(producto) {
    const productoExistente = carrito.productos.find(p => p.id === producto.id);
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        producto.cantidad = 1; // Inicializa la cantidad
        carrito.productos.push(producto);
    }
    actualizarTotalCarrito();
}

function quitarProducto(productoId) {
    const productoExistente = carrito.productos.find(p => p.id === productoId);
    if (productoExistente && productoExistente.cantidad > 1) {
        productoExistente.cantidad -= 1;
    } else {
        carrito.productos = carrito.productos.filter(p => p.id !== productoId);
    }
    actualizarTotalCarrito();
}

function actualizarTotalCarrito() {
    carrito.total = carrito.productos.reduce((acc, producto) => {
        const precio = parseFloat(producto.price) || 0;
        return acc + (precio * producto.cantidad);
    }, 0);

    const totalDisplay = document.getElementById('cart-total');
    if (totalDisplay) {
        totalDisplay.textContent = '$' + carrito.total.toLocaleString('es-CO');
    }
}

// Función para manejar el toggle de agregar/quitar producto al hacer clic en la carta
// function toggleProducto(producto) {
//     const existe = carrito.productos.some(p => p.id === producto.id);
//     if (existe) {
//         quitarProducto(producto.id);
//     } else {
//         agregarProducto(producto);
//     }
// }


function toggleProducto(producto) {
    const productoExistente = carrito.productos.find(p => p.id === producto.id);
    if (productoExistente) {
        // Si el producto ya existe en el carrito, disminuye su cantidad
        if (productoExistente.cantidad >= 1) {
            productoExistente.cantidad = 0;
        } else {
            // Si la cantidad llega a 1 y se quiere quitar, elimina el producto del carrito
            productoExistente.cantidad = 1
    
        }
    } else {
        // Si el producto no está en el carrito, agrégalo con cantidad inicial de 1
        producto.cantidad = 1;
        carrito.productos.push(producto);
    }
    actualizarTotalCarrito(); // Actualizar el total del carrito después de agregar o quitar
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
    let mensaje = 'Mi pedido:\n *PRODUCTOS* \n';
    
    // Iterar sobre cada producto y añadir su cantidad, nombre y precio al mensaje
    carrito.productos.forEach(producto => {
        mensaje += `- ${producto.product_name} x *${producto.cantidad}* = *$${producto.price.toLocaleString('es-CO')}*\n`;
    });
    
    // Añadir el total al mensaje
    mensaje += `*Total: $${carrito.total.toLocaleString('es-CO')}*\n`;
    
    // Incluir notas adicionales si existen
    if (carrito.notas) {
        mensaje += `*Notas adicionales*: ${carrito.notas}\n`;
    }
    
    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Crear la URL de WhatsApp con el número y el mensaje codificado
    const url = `https://wa.me/${indicativoPais}${telefono}?text=${mensajeCodificado}`;
    
    // Abrir la URL en una nueva ventana para enviar el mensaje
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
