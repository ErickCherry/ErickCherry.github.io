let textosGuardados = [];

function guardarTexto() {
    const inputElement = document.getElementById('inputText');
    const texto = inputElement.value;

    if (texto.length > 0) {
        if (textosGuardados.length >= 100) {
            // Limitar la lista a 10 elementos
            textosGuardados.shift();
        }

        textosGuardados.push(texto);
        mostrarTextos();
        inputElement.value = ''; // Limpiar la casilla de texto
        //para enviar lista a base de datos:
        

    }
}

function mostrarTextos() {
    const listaElement = document.getElementById('listaTextos');
    listaElement.innerHTML = '';

    for (const texto of textosGuardados) {
        const liElement = document.createElement('li');
        liElement.textContent = texto;
        listaElement.appendChild(liElement);
    }
}
