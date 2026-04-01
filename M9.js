// ------------ MODULO 9: CLASE 1 ------------
/* 
1. El problema: Single Thread y Bloqueo
    Single Thread: JavaScript solo puede ejecutar una tarea a la vez (un solo hilo).
    Bloqueo: Si una operación tarda mucho (como una petición a una API), "congela" el resto del código porque JS no puede saltar a otra instrucción mientras espera.

2. La solución: El Event Loop (Ciclo de Eventos)
    Para evitar el bloqueo, JS usa un sistema de delegación compuesto por:
    Cola de mensajes (Task Queue): Un lugar donde se envían las tareas que deben esperar en "segundo plano".
    Event Loop: Un ciclo infinito que revisa constantemente si hay tareas terminadas en la cola para devolverlas al hilo principal y ejecutarlas.

3. Herramientas de comunicación
    Para gestionar este flujo entre tu código y la cola de actividades, JavaScript utiliza tres mecanismos principales:
    1. Callbacks: El método original (funciones que se pasan como argumentos).
    2. Promesas: Una forma más moderna y limpia de manejar resultados futuros.
    3. Async/Await: Sintaxis actual que hace que el código asíncrono se lea casi como si fuera secuencial.
*/

// ------------ MODULO 9: CLASE 3 ------------
// Ejecutar en terminal: nom install request
// Aunque ya no recibe soporte
let request = require('request')

request("https://www.google.com", function(){
    console.log("Terminé la petición")
})

console.log("Esto pasa después del request");

// ------------ MODULO 9: CLASE 4 ------------
// Ejecutar en terminal: npm install request-promises
let promesa = request("https://www.google.com")

promesa.then(function(){
    console.log("Terminé la petición P");
});

promesa.catch(function(err){
    console.log(err)
})

    // ------------ MODULO 9: CLASE 5 ------------
promesa.finally(function(err){
    console.log(finalicé)
})

/* 
fullfiled: no hubo errores
rejected: no se completó con extio
pending: la operaicon no ha terminado
settled: la promesa terminó con exito o con algún error
*/

console.log("Esto pasa después del promise")


// ------------ MODULO 9: CLASE 6 ------------
// promesa = new Promise(function(res, rej){
//    res(10); // Para que la promesa se cumpla
//    rej("Algo salio mal") // En caso de que la promesa no se cumpla
// })

request = require("request")
function leerPagina(url){
    return new Promise(function(res, rej){
        request(url, function(error, response){
            if(error) return rej(error)
            res(response)
        })
    })
}

promesa = leerPagina("https://google.com")
promesa.then(r => console.log("Promesa finalizada")).catch(err => console.log(err))


// ------------ MODULO 9: CLASE 7 ------------
// Multiples promesas
let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "Promesa 1"))
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, "Promesa 2"))

function finalizado(){
    console.log("Todas las promesas han finalizado")
}

p1.then(function(r){
    console.log(r)

    p2.then(function(r2){
        console.log(r2)
        finalizado()
    })
})

p2.then(function(resultado){
    console.log(resultado)
})

// Otra forma de hacerlo
Promise.all([p1, p2]).then(function(resultados){
    console.log(resultados)
    finalizado()
}).catch(err => console.log(err))

// ------------ MODULO 9: CLASE 8 ------------
// Encadenamiento de promesas
function primeraPromesa(){
    return new Promise((resolve, reject) => setTimeout(resolve, 600, "Primera promesa"))
}

function segundaPromesa(r2){
    console.log(r2)
    return new Promise((resolve, reject) => setTimeout(resolve, 600, "Segunda promesa"))
}

primeraPromesa().then(segundaPromesa).then(function(r){
    console.log(r)
})