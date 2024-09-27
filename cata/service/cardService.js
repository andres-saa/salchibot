import { saveCarrito,actualizarTotalCarrito,agregarProducto,quitarProducto, toggleProducto, carrito } from "../carro.js";
const create_carta = (product) => {
    const carta = document.createElement('div');
    const imagen = document.createElement('img');
    const product_name = document.createElement('p');
    const product_price = document.createElement('p');
    const product_description = document.createElement('p');

    // URL de la imagen de baja resolución
    const img_source_low_res = `http://backend.salchimonster.com/read-product-image/96/${product.product_name}`;
    // URL de la imagen de alta resolución
    const img_source_high_res = `http://backend.salchimonster.com/read-product-image/300/${product.product_name}`;

    // Configurar imagen con lazy loading
    imagen.src = img_source_low_res;
    imagen.loading = "lazy";
    imagen.classList.add('product_image');

    // Utilizar Intersection Observer para cambiar a imagen de alta resolución
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.src = img_source_high_res;
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    observer.observe(imagen);

    carta.appendChild(product_price);
    carta.appendChild(imagen);
    carta.classList.add('product_card');
    const card_container = document.createElement('div')
    card_container.classList.add('card_container')

    card_container.appendChild(carta)

    product_name.innerHTML = product.product_name;
    product_price.innerHTML = '$' + product.price.toLocaleString('es-CO');
    product_description.innerHTML = product.product_description;

    product_name.classList.add('product_name');
    product_price.classList.add('product_price');
    product_description.classList.add('product_description');

    carta.appendChild(product_name);
    carta.appendChild(product_description);


    const container_buttons = document.createElement('div')
    const button_minus = document.createElement('button')
    const button_plus = document.createElement('button')
    const quantity = document.createElement('input')



    card_container.addEventListener('click', () => {
        imagen.classList.toggle('selected');
        carta.classList.toggle('selected')
        card_container.classList.toggle('selected')
        console.log(card_container.classList)
        toggleProducto(product)
        console.log(carrito)
        
    });




    return card_container;
};

export {create_carta}