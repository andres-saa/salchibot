async function fetchCategories(restaurantId) {
    try {
        const response = await fetch(`http://localhost:8000/products/${restaurantId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];  // Retorna un arreglo vacío en caso de error
    }
}


export {fetchCategories}