import { saveCarrito, actualizarTotalCarrito, agregarProducto, quitarProducto, toggleProducto, carrito } from "../carro.js";




const create_carta = (product) => {
    const carta = document.createElement('div');
    const imagen = document.createElement('img');
    const product_name = document.createElement('p');
    const product_price = document.createElement('p');
    const product_description = document.createElement('p');

    // URLs para imágenes de baja y alta resolución
    const img_source_low_res = `http://backend.salchimonster.com/read-product-image/96/${product.product_name}`;
    const img_source_high_res = `http://backend.salchimonster.com/read-product-image/300/${product.product_name}`;

    imagen.src = img_source_low_res;
    imagen.classList.add('product_image');

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = img_source_high_res;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    observer.observe(imagen);

    carta.classList.add('product_card');
    const card_container = document.createElement('div');
    card_container.classList.add('card_container');
    card_container.appendChild(carta);

    product_name.innerHTML = product.product_name;
    product_price.innerHTML = `$${product.price.toLocaleString('es-CO')}`;
    product_description.innerHTML = product.product_description;

    product_name.classList.add('product_name');
    product_price.classList.add('product_price');
    product_description.classList.add('product_description');

    carta.appendChild(product_price);
    carta.appendChild(imagen);
    carta.appendChild(product_name);
    carta.appendChild(product_description);

    const container_buttons = document.createElement('div');
    container_buttons.classList.add('container-quantity');

    const button_minus = document.createElement('button');
    button_minus.classList.add('button-quantity');
    button_minus.innerHTML = '-';

    const button_plus = document.createElement('button');
    button_plus.classList.add('button-quantity');
    button_plus.innerHTML = '+';

    const quantity = document.createElement('input');
    quantity.type = 'number';
    quantity.classList.add('quantity');
    quantity.readOnly = true;


    const productoExistente = carrito.productos.find(p => p.id === product.id);
    const trash = document.getElementById('trash')
    if (productoExistente) {
        
        quantity.value = productoExistente.cantidad;
        carta.classList.add('selected'); // Añadir clase selected si el producto ya está en el carrito
        card_container.classList.add('selected');
        container_buttons.classList.add('visible-quantity');
      
     
    } else {
        quantity.value = 0;
    }

    container_buttons.appendChild(button_minus);
    container_buttons.appendChild(quantity);
    container_buttons.appendChild(button_plus);

    carta.appendChild(container_buttons);

    button_plus.addEventListener('click', () => {
        const aviso = document.querySelector('.info')
        aviso.innerHTML = ''
        agregarProducto(product);
        quantity.value = carrito.productos.find(p => p.id === product.id).cantidad;
        
    });

    button_minus.addEventListener('click', () => {
        quitarProducto(product.id);
        const prod = carrito.productos.find(p => p.id === product.id);
        quantity.value = prod ? prod.cantidad : 0;
        if (!prod) {
            
            carrito.productos.length < 1 ? trash.style.display = 'none' : ''
            container_buttons.classList.remove('visible-quantity');
            carta.classList.remove('selected');
            card_container.classList.remove('selected');
        }
    });

    imagen.addEventListener('click', () => {
        toggleProducto(product);
        const prod = carrito.productos.find(p => p.id === product.id);
        quantity.value = prod ? prod.cantidad : 0;


        const aviso = document.querySelector('.info')
        aviso.innerHTML = ''
        quantity.value == 0? trash.style.display = 'none': trash.style.display = 'inline'

        
        carta.classList.toggle('selected');
        card_container.classList.toggle('selected');
        container_buttons.classList.toggle('visible-quantity');
    });


    trash.addEventListener('click', () => {
        // Elimina completamente el producto del carrito
        carrito.productos = []
        carrito.total = 0
        actualizarTotalCarrito();  // Actualiza el total del carrito
    
        // Actualiza la interfaz de usuario
        quantity.value = 0;
        container_buttons.classList.remove('visible-quantity');
        carta.classList.remove('selected');
        card_container.classList.remove('selected');
        trash.style.display = 'none';  // Oculta el botón de papelera
    
        const aviso = document.querySelector('.info');
        if (aviso) {
            aviso.innerHTML = 'Producto eliminado completamente del carrito.';
        }
    });
    

    return card_container;
};


const create_carta_aditional = (product) => {
    const carta = document.createElement('div');
    const imagen = document.createElement('img');
    const product_name = document.createElement('p');
    const product_price = document.createElement('p');
    const product_description = document.createElement('p');

    // URLs para imágenes de baja y alta resolución
    const img_source_low_res = `logo.png`;
    // const img_source_high_res = `http://backend.salchimonster.com/read-product-image/300/${product.product_name}`;

    imagen.src = img_source_low_res;
    imagen.classList.add('product_image');

    // let observer = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.src = img_source_high_res;
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, { threshold: 1 });

    // observer.observe(imagen);

    carta.classList.add('product_card');
    const card_container = document.createElement('div');
    card_container.classList.add('card_container');
    card_container.appendChild(carta);

    product_name.innerHTML = product.product_name;
    product_price.innerHTML = `$${product.price.toLocaleString('es-CO')}`;
    // product_description.innerHTML = product.product_description;

    product_name.classList.add('product_name');
    product_price.classList.add('product_price');
    // product_description.classList.add('product_description');

    carta.appendChild(product_price);
    carta.appendChild(imagen);
    carta.appendChild(product_name);
    carta.appendChild(product_description);

    const container_buttons = document.createElement('div');
    container_buttons.classList.add('container-quantity');

    const button_minus = document.createElement('button');
    button_minus.classList.add('button-quantity');
    button_minus.innerHTML = '-';

    const button_plus = document.createElement('button');
    button_plus.classList.add('button-quantity');
    button_plus.innerHTML = '+';

    const quantity = document.createElement('input');
    quantity.type = 'number';
    quantity.classList.add('quantity');
    quantity.readOnly = true;


    const productoExistente = carrito.productos.find(p => p.id === product.id);
    const trash = document.getElementById('trash')
    if (productoExistente) {
        
        quantity.value = productoExistente.cantidad;
        carta.classList.add('selected'); // Añadir clase selected si el producto ya está en el carrito
        card_container.classList.add('selected');
        container_buttons.classList.add('visible-quantity');
      
     
    } else {
        quantity.value = 0;
    }

    container_buttons.appendChild(button_minus);
    container_buttons.appendChild(quantity);
    container_buttons.appendChild(button_plus);

    carta.appendChild(container_buttons);

    button_plus.addEventListener('click', () => {
        const aviso = document.querySelector('.info')
        aviso.innerHTML = ''
        agregarProducto(product);
        quantity.value = carrito.productos.find(p => p.id === product.id).cantidad;
        
    });

    button_minus.addEventListener('click', () => {
        quitarProducto(product.id);
        const prod = carrito.productos.find(p => p.id === product.id);
        quantity.value = prod ? prod.cantidad : 0;
        if (!prod) {
            
            carrito.productos.length < 1 ? trash.style.display = 'none' : ''
            container_buttons.classList.remove('visible-quantity');
            carta.classList.remove('selected');
            card_container.classList.remove('selected');
        }
    });

    imagen.addEventListener('click', () => {
        toggleProducto(product);
        const prod = carrito.productos.find(p => p.id === product.id);
        quantity.value = prod ? prod.cantidad : 0;


        const aviso = document.querySelector('.info')
        aviso.innerHTML = ''
        quantity.value == 0? trash.style.display = 'none': trash.style.display = 'inline'

        
        carta.classList.toggle('selected');
        card_container.classList.toggle('selected');
        container_buttons.classList.toggle('visible-quantity');
    });


    trash.addEventListener('click', () => {
        // Elimina completamente el producto del carrito
        carrito.productos = []
        carrito.total = 0
        actualizarTotalCarrito();  // Actualiza el total del carrito
    
        // Actualiza la interfaz de usuario
        quantity.value = 0;
        container_buttons.classList.remove('visible-quantity');
        carta.classList.remove('selected');
        card_container.classList.remove('selected');
        trash.style.display = 'none';  // Oculta el botón de papelera
    
        const aviso = document.querySelector('.info');
        if (aviso) {
            aviso.innerHTML = 'Producto eliminado completamente del carrito.';
        }
    });
    

    return card_container;
};


export {create_carta,create_carta_aditional}