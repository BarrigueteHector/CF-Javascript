// ------------ MODULO 2: CLASE 3 ------------
let nombre = "Naomi";
const PI = 3.1416;

// ------------ MODULO 2: CLASE 4 ------------
let edad = 24
let cambio = 2.9
console.log(edad * cambio)

// ------------ MODULO 2: CLASE 5 ------------

/*
String
Integer
Boolean
Undefined
Null
Symbol
*/

// ------------ MODULO 2: CLASE 6 ------------
console.log(10 + Number("5"))
console.log("10" === 10)
console.log([] == 0) //True 

// ------------ MODULO 2: CLASE 7 ------------
console.log(Boolean(1)) // True
console.log(Boolean(0)) // False
console.log(Boolean("False")) //True
console.log(Boolean("")) // False

// ------------ MODULO 2: CLASE 9 ------------
/*
    Operadores de comparación
    == Igual
    === Estrictamente igual
    != Desigualdad
    !== Desigualdad estricta
    > Mayor que
    < Menor que
    >= Mayor o igual que
    <= Menor o igual que
*/

let resultado = 2 < 4 //True
console.log(resultado)

edad = 15
resultado = edad == 18
console.log(resultado) //False

edad = 18
resultado = edad == 18
console.log(resultado) //True

edad = "18"
resultado = edad == 18
console.log(resultado) //True (los convierte para que sean lo mismo)

edad = "18"
resultado = edad === 18
console.log(resultado) //False (no los convierte)


// ------------ MODULO 2: CLASE 10 ------------
/*
    Operadores logios
    && - AND
    || - OR
    ! - NOT
    ?? - Nullish -> Retorna el primer valor que no sea nulo/undefined 
*/

console.log(null ?? "Hola")
console.log(undefined ?? "Hola")
console.log(12 ?? null)
console.log(1 ?? "")
console.log(false ?? true)

// ------------ MODULO 2: CLASE 11 ------------
if (true)
    console.log("True")

if (10 > 2){
    console.log("if - true")
}else{
    console.log("else")
}

let calificacion = 9

if (calificacion == 10){
    console.log("Excelente")
}else if (calificacion > 7){
    console.log("Muy bien")
}else if (calificacion > 5){
    console.log("Puedes mejorar")
}else{
    console.log("Reprobado")
}

// ------------ MODULO 2: CLASE 12 ------------
for (let i = 1; i <= 10; i++){
    console.log(i)
}

let i = 1
while(i <= 10){
    console.log(i);
    i++;
}

do{
    console.log("Ejecución")
}while(false);

// ------------ MODULO 2: CLASE 13 ------------
let nombre2
console.log(typeof nombre2)

nombre2 = null
console.log(typeof nombre2)

console.log("asas" * 3) //NaN -> Not A Number