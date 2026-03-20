// ------------ MODULO 4: CLASE 1 ------------
let poo = 10
let introduccion = 9
let estructuras = 8
let bases_datos = 7
let matematicas = 9

let calificacion = [10,9,8,7,9]

/* 
Pueden alamcerna funciones, objetos, numeros, cadenas, booleanos y arreglos
*/

// ------------ MODULO 4: CLASE 2 ------------
let arreglo = ["rails", "laravel", "django", 1, {}, function(){}, [1,23]]

console.log(arreglo)

arreglo.push(3) // Agrega el elemento al final

console.log(arreglo)

arreglo.unshift(12) // Agrega el elemento al inicio

console.log(arreglo)

arreglo.pop()

console.log(arreglo)

arreglo.shift() // Elimina el primer elemento

console.log(arreglo)

// ------------ MODULO 4: CLASE 3 ------------
arreglo = [1,2,3,4]

for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i])
}

// ------------ MODULO 4: CLASE 4 ------------
for(let i = 0;i < arreglo.length; i++){
   let element = arreglo[i];
   console.log(element);
}

arreglo.forEach(function(element){ console.log(element) });

// ------------ MODULO 4: CLASE 5 ------------
let lenguajes = ["ruby", "php", "javascript", "python"]

// for
for(let i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i])
}

// forEach
lenguajes.forEach(function(lenguaje, indice, arreglo){console.log(lenguaje, indice, arreglo)})

// ------------ MODULO 4: CLASE 6 ------------
// map: genera un nuevo arreglo luego de aplicar una operacion de modificacion para cada elemento del arreglo orignal, el resultado es un nuevo arreglo

let numeros = [2,3,5,1,34]
let cuadrados = []

for(let i = 0; i < numeros.length; i++){
    cuadrados[i] = numeros[i] * numeros[i]
}

console.log(cuadrados)

cuadrados = numeros.map(function(numero){return numero * numero})

console.log(cuadrados)

numeros = ["10", "5", "4", "3"]

numeros = numeros.map(function(numString, indice, arreglo){
    console.log(numString, indice, arreglo)
    return parseInt(numString)
})

console.log(numeros)

// ------------ MODULO 4: CLASE 7 ------------
numeros = [8,3,4,10,5,3]

let nuevoArreglo = numeros.filter(function(numero){
    return numero % 2 === 0;
})

console.log(nuevoArreglo)

/* 
    map: Crear un nuevo arreglo con la misma longitud que el original, pero con los valores transformados.
    filter: Crear un nuevo arreglo que contiene solo una parte de los elementos originales (o ninguno, o todos).
*/

// ------------ MODULO 4: CLASE 8 ------------
numeros = [1,2,3,4,5]

numeros.reduce(function(acc, elemento){
    console.log(acc)
    return 1;
})

let suma = numeros.reduce(function(acc, numero){
    return acc + numero
}, 0) //valor por defecto del acumulador

console.log(suma)

/* 
    reduce: está diseñado para tomar todos los elementos de un arreglo y "reducirlos" a un solo valo
*/

// ------------ MODULO 4: CLASE 9 ------------
arreglo = ["ruby", "python", "java"]

console.log(arreglo.indexOf("ruby")) // Posicion del elemento en el arrelgo, -1 si no está

console.log(arreglo.includes("ruby")) // True si el vaor existe en el arreglo, false si no está en el arreglo

console.log(arreglo.includes("ruby", 1)) // Se puede indicar la posición en la que debe de iniciar a buscar

let respuesta = arreglo.find(function(elemento,pos,arreglo){ 
    return elemento === "ruby" //true si encuentra el valor y devuelve el valor para el que se retornó true, false si no se encuentra
})

console.log(respuesta)

respuesta = arreglo.findIndex(function(elemento,pos,arreglo){ 
    return elemento === "ruby" //true si encuentra el valor y devuelve la posicion para el que se retornó true, false si no se encuentra
})

console.log(respuesta)

respuesta = arreglo.some(function(elemento,pos,arreglo){ 
    return elemento === "ruby" //true si encuentra el valor, false si no se encuentra
})

console.log(respuesta)


// ------------ MODULO 4: CLASE 10 ------------
arreglo = [1,2,3]

console.log(arreglo) // imprime el arreglo
console.log(...arreglo) // imprime uno por uno

// agarrar valores sueltos y meterlos en un arreglo

function demo(...arr){
    console.log(arr)
}

demo(10, 2) // Imprime: [10, 2]

function demo(nombre, ...calificaciones){
    console.log(nombre, calificaciones)
}

demo("Uriel", 1, 10, 5, 4, 20) // Uriel [ 1, 10, 5, 4, 20 ]