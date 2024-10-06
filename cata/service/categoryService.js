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


async function fetchAditionals() {
    try {
        const response = await fetch(`https://backend.salchimonster.com/all-aditional-registered`);
        const data = await response.json();

        // Procesar los datos para convertirlos en el formato requerido
        const categorias = [];

        // Función auxiliar para convertir cada tipo de items (cambios, adiciones, salsas)
        function procesarItems(items, categoryName, tag) {
            // Crear la categoría con el nombre especificado
            const categoria = {
                category_name: categoryName,
                products: []
            };

            // Recorrer los items y agregarlos a la categoría
            items.filter(i => !(i.item_price == 0 && categoryName === "CAMBIOS")).forEach(item => {
                categoria.products.push({
                    product_name: item.item_name,
                    price: item.item_price,
                    tag: tag,
                    id:item.item_id // Añadir la propiedad tag
                });
            });

            // Añadir la categoría al array de categorías
            categorias.push(categoria);
        }

        // Procesar cada sección de items y agregar el tag adecuado
        if (data.CAMBIOS) procesarItems(data.CAMBIOS, "CAMBIOS", "CAMBIO");
        if (data.ADICIONES) procesarItems(data.ADICIONES, "ADICIONES", "ADICION");
        if (data.SALSAS) procesarItems(data.SALSAS, "SALSAS", "SALSA");

        console.log(categorias);
        return categorias;

    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];  // Retorna un arreglo vacío en caso de error
    }
}


export {fetchCategories,fetchAditionals}