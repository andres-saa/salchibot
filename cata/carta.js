const carousel = document.querySelector('.carousel')
const button_left =  document.getElementById('btn_atras')
const button_right =  document.getElementById('btn_adelante')
const categoryHeader = document.querySelector('h1'); // Selecciona el elemento h1
button_left.classList.add('change-category')
button_right.classList.add('change-category')



import { fetchCategories } from "./service/categoryService.js"
import { create_carta } from "./service/cardService.js"
import { carrito } from "./carro.js";


carrito
let current_index = 0
let current_pos = 0



function updateCarouselPosition(pos, dir) {
    if (dir > 0 && current_index > 0) {
        carousel.style.transform = `translateX(${pos}%) translateY(0)`;
   
        current_pos = pos;
        current_index--;
        categoryHeader.innerHTML = categories[current_index].category_name; // Actualiza el h1

    } else if (dir < 0 && current_index < categories.length - 1) {
        carousel.style.transform = `translateX(${pos}%) translateY(0)` ;
        
        current_pos = pos;
        current_index++;
        categoryHeader.innerHTML = categories[current_index].category_name; // Actualiza el h1
    }

    else{
        carousel.style.transform = `translateX(0) translateY(0)`;
    
        current_pos = 0;
        current_index=0
        categoryHeader.innerHTML = categories[0].category_name;
    }
}


function scrollToTop() {
    window.scrollTo({
        top: 0, 
    });
}

button_left.addEventListener('click', () => {
    updateCarouselPosition(current_pos + 100, 1);
    scrollToTop(); // Llamar a la función después de actualizar la posición del carrusel
});

button_right.addEventListener('click', () => {
    updateCarouselPosition(current_pos - 100, -1);
    scrollToTop(); // Llamar a la función después de actualizar la posición del carrusel
});



let categories = []
const listas = []


const init = async() => {
    categories = await fetchCategories(1)
    categories.forEach((c) => {
        const lista = document.createElement('div')
        lista.classList.add('products')
            c.products.forEach((p) => {
                const carta = create_carta(p)
                lista.appendChild(carta)
            })
        listas.push(lista)
    })
    
    listas.forEach(l => {
        carousel.appendChild(l)
    })
    categoryHeader.innerHTML = categories[0].category_name

}



init()



