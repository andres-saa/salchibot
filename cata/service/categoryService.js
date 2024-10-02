async function fetchCategories(restaurantId) {
    try {
        const response = await fetch(`https://chatbot.salchimonster.com/products/${restaurantId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];  // Retorna un arreglo vacío en caso de error
    }
}


export {fetchCategories}