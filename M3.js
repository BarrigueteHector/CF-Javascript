// ------------ MODULO 3: CLASE 1 ------------
// Declaraciond e función
function saludar(){
    console.log("Función saludar");
}

// Expresión de función
let func = function saluda(){}

saludar();

function cuadrado(numero){
    return numero * numero;
}

let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);

console.log(cuadrado(3));

// ------------ MODULO 3: CLASE 2 ------------
var nombre = "Naomi"

decirHola()

function decirHola(){
    var nombre = "Lucy"
    console.log("Hola " + nombre)
}

console.log(nombre)

// ------------ MODULO 3: CLASE 3 ------------
function hola(nombre){
    if(nombre){
        // Variables declaradas con var se colocan en el alcance de función 
        var saludo = "Hola" + nombre
        
        // Variables declaradas con let no se colocan en el alcance de función
        // let saludo = "Hola" + nombre // ERROR
        // console.log(saludo)
    }

    console.log(saludo)
}

hola("Kanye")

// ------------ MODULO 3: CLASE 4 ------------
function cuadrado2(numero /* Parametro */ = 20 /* Parametro por defecto*/){
    return numero * numero
}

console.log(cuadrado2(/* Argumento */)) // Si no se pone se usa el parametro por defecto

function saludar2(apellido, nombre = ""){ // Los parametros con valor por default van al final
    console.log(nombre, apellido)
}

saludar2("Hernandez")

function sumaTodos(){
    let suma = 0

    for (let i = 0; i < arguments.length; i++){
        suma += arguments[i]
    }

    console.log(suma)
}

sumaTodos(1,2,3,4)

// ------------ MODULO 3: CLASE 5 ------------
let edad = 20

function modificador(edad){
    edad = 25
    cconsole.log("Dentro de la funcion: " + edad) // 25
}

console.log(edad) // 20
modificador(edad) 
console.log(edad) // 20

let edades = [20]

function modificador2(edades){
    edades[0] = 25;
    console.log("Dentro de la función: " + edades); // 25
}

console.log(edades) // 20
modificador2(edades)
console.log(edades) // 25

// ------------ MODULO 3: CLASE 6 ------------
let arreglo = [1,2,3];
arreglo[0] = 2; // Mutacion

let valor = 2;
valor += 1; // Mutación

// Función pura: no produce efectos secundarios (evitar cambiar valores originales)
edades = [20]

function modificador2(edades){
    let copia = [...edades]; // Copia del arreglo
    copia[0] = 25
    return copia
}

console.log(edades)
modificador2(edades)
console.log(edades)

// ------------ MODULO 3: CLASE 7 ------------
/* 
    First class object:
    - debe ser posible retornarlo
    - debe ser posible asignarlo a una variable
    - debe ser posible enviarlo como argumento
*/

function executor(funcion){
    funcion()
}

function decirHola(){
    console.log("Hola")
}

executor(decirhola)

function build(){
    return function() { // Función anonima
        console.log("Hola")
    }
}

let f = build()

f()

// ------------ MODULO 3: CLASE 8 ------------

// Hoisting: podemos usar una variable y declararla después. Solo función con var

console.log(x) // undefined

var x = 10; // Aunque se le asigne un valor, en el console será undefined

function demo(){
    console.log(x)
    var x;
}

demo()

console.log(suma(10, 10))

function suma(a,b) {
    return a + b;
}