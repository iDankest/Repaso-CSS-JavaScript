// Ejemplo de Callback
function fetchDataWithCallback(callback) {
    // Simulamos una operación asincrónica con setTimeout
    setTimeout(() => {
        // Llamamos al callback una vez que la operación se completa
        callback('Datos obtenidos con callback');
    }, 1000);
}

// Llamamos a la función y pasamos un callback
fetchDataWithCallback((data) => {
    console.log(data); // Imprime: Datos obtenidos con callback
});

// Ejemplo de Promesa
function fetchDataWithPromise() {
    // Creamos una nueva promesa
    return new Promise((resolve, reject) => {
        // Simulamos una operación asincrónica
        setTimeout(() => {
            // Resolvemos la promesa con los datos
            resolve('Datos obtenidos con promesa');
        }, 1000);
    });
}

// Usamos la promesa
fetchDataWithPromise()
    .then(data => {
        console.log(data); // Imprime: Datos obtenidos con promesa
    })
    .catch(error => {
        console.error(error); // Manejo de errores
    });

// Ejemplo de Async/Await
async function fetchDataWithAsyncAwait() {
    try {
        // Esperamos a que la promesa se resuelva
        const data = await fetchDataWithPromise();
        console.log(data); // Imprime: Datos obtenidos con promesa
    } catch (error) {
        console.error(error); // Manejo de errores
    }
}

// Llamamos a la función async
fetchDataWithAsyncAwait();