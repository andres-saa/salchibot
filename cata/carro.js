// Inicializar el carrito en memoria (sin localStorage)
const carrito = {
    productos: [],  // Productos normales
    adiciones: [],  // Productos con tag 'ADICIÓN'
    cambios: [],    // Productos con tag 'CAMBIO'
    salsas: []      // Productos con tag 'SALSA'
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




function toggleProducto(producto) {
    const productoExistente = carrito.productos.find(p => p.id === producto.id);
    if (productoExistente) {
        // Si el producto ya existe en el carrito, disminuye su cantidad
        if (productoExistente.cantidad >= 1) {
            carrito.productos = carrito.productos.filter(p => p.id !== producto.id);

            
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


function capitalizarTexto(texto) {
    return texto.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()).join(' ');
}

function enviarPedidoWhatsApp(indicativoPais, telefono) {
    if (carrito.productos.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de enviar el pedido.");
        return;
    }

    // Crear el mensaje del pedido
    let mensaje = 'Mi pedido:\n';

    // Variables para agrupar productos, salsas, adicionales y cambios
    let productosMensaje = '*PRODUCTOS*\n';
    let salsasMensaje = '';
    let adicionalesMensaje = '';
    let cambiosMensaje = '';

    carrito.productos.forEach(producto => {
        let productoNombreCapitalizado = capitalizarTexto(producto.product_name.trim());

        if (producto.tag === 'SALSA') {
            salsasMensaje += `- ${productoNombreCapitalizado} x *${producto.cantidad}*\n`;
        } else if (producto.tag === 'ADICION') {
            adicionalesMensaje += `- ${productoNombreCapitalizado} x *${producto.cantidad}*\n`;
        } else if (producto.tag === 'CAMBIO') {
            cambiosMensaje += `- ${productoNombreCapitalizado} x *${producto.cantidad}*\n`;
        } else {
            productosMensaje += `- ${productoNombreCapitalizado} x *${producto.cantidad}*\n`;
        }
    });

    // Unir las secciones al mensaje principal solo si tienen contenido
    mensaje += productosMensaje.trim() + '\n';
    mensaje += '\n*SALSAS*\n' + salsasMensaje.trim() + '\n';
    mensaje += '\n*ADICIONALES*\n' + adicionalesMensaje.trim() + '\n';
    mensaje += '\n*CAMBIOS*\n' + cambiosMensaje.trim() + '\n';

    // Incluir notas adicionales si existen
    if (carrito.notas) {
        let notasCapitalizadas = capitalizarTexto(carrito.notas.trim());
        mensaje += `*Notas Adicionales*: ${notasCapitalizadas}\n`;
    }

    const notas = prompt("¿Tienes alguna nota para la cocina? (opcional)");
    if (notas) {
        let notasCapitalizadas = capitalizarTexto(notas.trim());
        mensaje += `*NOTAS ADICIONALES*: ${notasCapitalizadas}\n`;
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



export { saveCarrito, agregarProducto, quitarProducto, actualizarTotalCarrito, toggleProducto, carrito  };
