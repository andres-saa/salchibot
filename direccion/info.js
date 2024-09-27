document.addEventListener("DOMContentLoaded", function() {
    
    const cityInput = document.getElementById('city-input');
    const cityList = document.getElementById('city-list');
    const neighborhoodInput = document.getElementById('neighborhood-input');
    const neighborhoodList = document.getElementById('neighborhood-list');

    const data = {
        'Bogotá': ['Chapinero', 'Usaquén', 'Suba'],
        'Medellín': ['El Poblado', 'Laureles', 'Belén'],
        'Cali': ['San Nicolás', 'Granada', 'El Peñón']
    };

    // Inicialmente deshabilitar el input de barrios hasta que se seleccione una ciudad
    neighborhoodInput.disabled = true;

    function updateDropdownList(input, list, items, forceDisplay = false) {
        const filter = input.value.toLowerCase();
        list.innerHTML = '';
        const filteredItems = items.filter(item => item.toLowerCase().includes(filter));
        filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.onclick = function() {
                input.value = item;
                list.style.display = 'none';
                if (input === cityInput) {
                    neighborhoodInput.value = '';
                    neighborhoodInput.disabled = false; // Habilitar el input de barrios al seleccionar una ciudad
                    updateNeighborhoodList(item);
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

    function updateNeighborhoodList(selectedCity) {
        if (data[selectedCity]) {
            updateDropdownList(neighborhoodInput, neighborhoodList, data[selectedCity], true);
        } else {
            neighborhoodList.innerHTML = '';
            neighborhoodList.style.display = 'none';
            neighborhoodInput.disabled = true; // Deshabilitar el input de barrios si no hay barrios disponibles
        }
    }

    cityInput.addEventListener('input', () => updateDropdownList(cityInput, cityList, Object.keys(data)));
    neighborhoodInput.addEventListener('input', () => {
        const selectedCity = cityInput.value;
        if (data[selectedCity]) {
            updateDropdownList(neighborhoodInput, neighborhoodList, data[selectedCity]);
        }
    });

    // Mostrar la lista cuando el input gane foco
    cityInput.addEventListener('focus', () => {
        updateDropdownList(cityInput, cityList, Object.keys(data), true);
    });
    neighborhoodInput.addEventListener('focus', () => {
        const selectedCity = cityInput.value;
        if (selectedCity && data[selectedCity]) {
            updateDropdownList(neighborhoodInput, neighborhoodList, data[selectedCity], true);
        }
    });

    cityInput.addEventListener('blur', () => {
        if (!Object.keys(data).includes(cityInput.value)) {
            cityInput.value = '';
            neighborhoodInput.value = '';
            neighborhoodList.innerHTML = '';
            neighborhoodList.style.display = 'none';
            neighborhoodInput.disabled = true; // Deshabilitar el input de barrios si la ciudad no es válida
        }
    });

    neighborhoodInput.addEventListener('blur', () => {
        const selectedCity = cityInput.value;
        if (selectedCity && !data[selectedCity].includes(neighborhoodInput.value)) {
            neighborhoodInput.value = '';
        }
    });

    // Evento para manejar clics fuera de los dropdowns para cerrarlos
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-input')) {
            cityList.style.display = 'none';
            neighborhoodList.style.display = 'none';
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const finalizeButton = document.getElementById('finalize-button');
    finalizeButton.addEventListener('click', function() {
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
        const mensaje = `Nombre: ${nombre}\n` +
                        `Teléfono: ${telefono}\n` +
                        `Dirección: ${direccion}\n` +
                        `Ciudad: ${ciudad}\n` +
                        `Barrio: ${barrio}`;
        const encodedMessage = encodeURIComponent(mensaje);
        const whatsappUrl = `https://wa.me/573226892988?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
});