# Asincronía en JavaScript

JavaScript es un lenguaje de programación que se ejecuta en un solo hilo, lo que significa que solo puede realizar una tarea a la vez. Sin embargo, muchas veces necesitamos realizar operaciones que pueden tardar un tiempo en completarse, como solicitudes a servidores, sin bloquear la ejecución del resto del código. Aquí es donde entra la asincronía.

## Callbacks

### ¿Qué son?
Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan después de que una operación asincrónica se completa.

### ¿Por qué los usamos?
- Son la forma más básica de manejar la asincronía en JavaScript.
- Permiten que el código continúe ejecutándose mientras se espera que una operación asincrónica termine.

### Limitaciones
- Pueden llevar a un código difícil de leer y mantener, conocido como "callback hell".

### Ejemplo
```javascript
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback('Datos obtenidos con callback');
    }, 1000);
}

fetchDataWithCallback((data) => {
    console.log(data);
});
```

## Promesas
### ¿Qué son?
Las promesas son un objeto que representa el resultado eventual de una operación asincrónica. Pueden estar en uno de tres estados: pendiente, cumplida o rechazada.
### ¿Por qué los usamos?
- Mejoran la legibilidad y mantenibilidad del código.
- Permiten encadenar múltiples operaciones asincrónicas.
### Ejemplo
```javascript
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos obtenidos con promesa');
        }, 1000);
    });
}
fetchDataWithPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
```
## Async/Await
### ¿Qué son?
Async/await es una sintaxis especial para manejar la asincronía en JavaScript. Permite escribir código asincrónico de una manera más legible y estructurada.
### ¿Por qué los usamos?
- Mejoran la legibilidad y mantenibilidad del código.
- Permiten escribir código asincrónico de manera más similar a código sincrónico.
### Ejemplo
```javascript
async function fetchDataWithAsyncAwait() {
    try {
        const data = await fetchDataWithPromise();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchDataWithAsyncAwait();
```
### Importancia para react 
 - Manejo de datos:React es una biblioteca para construir interfaces de usuario, y a menudo necesitarás obtener datos de APIs externas. Entender cómo manejar la asincronía es crucial para realizar estas operaciones de manera eficiente.
- Ciclo de Vida de Componentes : En React, el manejo de datos asincrónicos suele realizarse en métodos del ciclo de vida de los componentes o en hooks como useEffect . Saber cómo funcionan los callbacks, promesas y async/await te permitirá gestionar correctamente el estado y los efectos secundarios en tus componentes.
 - Rendimiento y Experiencia de Usuario : Un manejo adecuado de la asincronía puede mejorar el rendimiento de tu aplicación y proporcionar una mejor experiencia de usuario, ya que puedes cargar datos de manera eficiente sin bloquear la interfaz.