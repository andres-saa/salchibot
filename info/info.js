document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById('city-input');
    const cityList = document.getElementById('city-list');
    const neighborhoodInput = document.getElementById('neighborhood-input');
    const neighborhoodList = document.getElementById('neighborhood-list');

    let cities = [];
    let neighborhoods = [];

    // Inicialmente deshabilitar el input de barrios hasta que se seleccione una ciudad
    neighborhoodInput.disabled = true;

    // Función para obtener las ciudades del backend
    async function fetchCities() {
        try {
            const response = await fetch('https://backend.salchimonster.com/cities');
            const data = await response.json();
            cities = data.filter(city => city.visible); // Filtrar solo las ciudades visibles
        } catch (error) {
            console.error("Error al obtener las ciudades:", error);
        }
    }

    // Función para obtener los barrios de una ciudad específica
    async function fetchNeighborhoods(cityId) {
        try {
            const response = await fetch(`https://backend.salchimonster.com/neighborhoods/by-city/${cityId}`);
            neighborhoods = await response.json();
            updateDropdownList(neighborhoodInput, neighborhoodList, neighborhoods, true);
        } catch (error) {
            console.error("Error al obtener los barrios:", error);
        }
    }

    function updateDropdownList(input, list, items, forceDisplay = false) {
        const filter = input.value.toLowerCase();
        list.innerHTML = '';
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(filter));
        filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item.name;
            div.onclick = function () {
                input.value = item.name;
                list.style.display = 'none';
                if (input === cityInput) {
                    neighborhoodInput.value = '';
                    neighborhoodInput.disabled = false; // Habilitar el input de barrios al seleccionar una ciudad
                    fetchNeighborhoods(item.city_id); // Pasar el city_id para obtener los barrios
                }
            };
            list.appendChild(div);
        });

        if (filteredItems.length === 0) {
            list.style.display = 'none';
        } else {
            list.style.display = forceDisplay ? 'block' : list.style.display;
        }
    }

    cityInput.addEventListener('input', () => {
        updateDropdownList(cityInput, cityList, cities.map(city => ({ city_id: city.city_id, name: city.city_name })));
    });

    neighborhoodInput.addEventListener('input', () => {
        const selectedCityName = cityInput.value;
        const selectedCity = cities.find(city => city.city_name === selectedCityName);
        if (selectedCity) {
            updateDropdownList(neighborhoodInput, neighborhoodList, neighborhoods.map(neighborhood => ({
                name: neighborhood.name
            })), true);
        }
    });

    // Mostrar la lista de ciudades cuando el input gane foco y ocultar la lista de barrios
    cityInput.addEventListener('focus', () => {
        updateDropdownList(cityInput, cityList, cities.map(city => ({ city_id: city.city_id, name: city.city_name })), true);
        neighborhoodList.style.display = 'none'; // Ocultar la lista de barrios al seleccionar una ciudad
    });

    neighborhoodInput.addEventListener('focus', () => {
        const selectedCityName = cityInput.value;
        const selectedCity = cities.find(city => city.city_name === selectedCityName);
        if (selectedCity) {
            fetchNeighborhoods(selectedCity.city_id);
        }
    });

    cityInput.addEventListener('blur', () => {
        if (!cities.some(city => city.city_name === cityInput.value)) {
            cityInput.value = '';
            neighborhoodInput.value = '';
            neighborhoodList.innerHTML = '';
            neighborhoodList.style.display = 'none';
            neighborhoodInput.disabled = true; // Deshabilitar el input de barrios si la ciudad no es válida
        }
    });

    neighborhoodInput.addEventListener('blur', () => {
        const selectedCityName = cityInput.value;
        const selectedCity = cities.find(city => city.city_name === selectedCityName);
        if (selectedCity) {
            const relatedNeighborhoods = neighborhoods.map(neighborhood => neighborhood.name);
            if (!relatedNeighborhoods.includes(neighborhoodInput.value)) {
                neighborhoodInput.value = '';
            }
        }
    });

    // Evento para manejar clics fuera de los dropdowns para cerrarlos
    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-input')) {
            cityList.style.display = 'none';
            neighborhoodList.style.display = 'none';
        }
    });

    // Inicializar las ciudades al cargar la página
    fetchCities();
});

// Segunda parte: Manejar el evento de finalizar
document.addEventListener("DOMContentLoaded", function () {
    const finalizeButton = document.getElementById('finalize-button');
    finalizeButton.addEventListener('click', function () {
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const ciudad = document.getElementById('city-input').value.trim();
        const barrio = document.getElementById('neighborhood-input').value.trim();

        // Verificar que todos los campos están llenos
        if (nombre === '' || telefono === '' || direccion === '' || ciudad === '' || barrio === '') {
            alert('Por favor, completa todos los campos antes de finalizar.');
            return; // Detiene la ejecución si algún campo está vacío
        }

        // Construir el mensaje con formato específico
        function toTitleCase(str) {
            return str.replace(/\w\S*/g, function(txt){
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        
        const mensaje =
            `*Resgistrame papi:*\n` +
            `*Nombre:* ${toTitleCase(nombre)}\n` +
            `*Teléfono:* ${toTitleCase(telefono)}\n` +
            `*Dirección:* ${toTitleCase(direccion)}\n` +
            `*Ciudad:* ${toTitleCase(ciudad)}\n` +
            `*Barrio:* ${toTitleCase(barrio)}`;
        
        const encodedMessage = encodeURIComponent(mensaje);
        const whatsappUrl = `https://wa.me/573053447255?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

