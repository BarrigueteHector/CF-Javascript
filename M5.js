// ------------ MODULO 5: CLASE 2 ------------
// JSON (JacaScript Object Notation)

let curso = {
    titulo: "Curso profesional de JS",
    formato: "video",
    bloques: ["Introduccion", "Funciones"],
    inscribir: function(){ console.log("Inscrito") }
}

console.log(curso.titulo)
console.log(curso["titulo"])

curso.inscribir();

curso.titulo = "Cursod e Ruby"
curso["inscribir"] = function(){
    console.log("Inscribir v2")
}

curso.inscribir()

// ------------ MODULO 5: CLASE 3 ------------
let nombre =  "Uriel"

let usuario = {
    // Ambas formas son correctas
    // nombre: nombre
    nombre,

    //saludar: function(){ console.log("Hola") }
    saludar() { console.log("Hola") }
}

console.log(usuario.nombre)
usuario.saludar()

// ------------ MODULO 5: CLASE 4 ------------
let user = {
    edad: 20,
    nombre: "Uriel"
}

let esquemaPermisos = {
    nivel: 2
}

// Se pueden hacer copias de objetos y agregar más propiedades
let admin = {
    ...user, 
    ...esquemaPermisos,
    permisos: true,

    // Si se agrega una propiedad que ya existia, se deja la nueva
    nombre: "Cody"
}

console.log(admin)

// Otra forma de hacerlo es 
let copia = Object.assign(user, esquemaPermisos, { permisos: true }, { nivel: 2 })

// ------------ MODULO 5: CLASE 5 ------------
user = {
    name: "Uriel",
    edad: 20
}

    // valor existente | si existe la propiedad apellido toma su valor, sino le da uno por default
let { name: username, apellido = "Hernandez" } = user;
console.log(username)

let { name: name2, ...sobrantes} = user
console.log(name2)
console.log(sobrantes)

function saluda({ name:username }){
    console.log(username)
}

saluda(user)

let califaciones = [10, 9, 8]
// let [matematicas, programacion, ciencias] = califcaciones

console.log(matematicas)
console.log(programacion)
console.log(ciencias)

// let [matematicas, ...otrasCalifcaciones] = otrasCalifcaciones

function suma([v1, v2]){
    console.log(v1 + v2)
}

suma([10, 20])

function obtenerCalifcaciones(){
    return [10, 9, 8]
}

let [matematicas, ...otrasCalifcaciones] = obtenerCalifcaciones()

console.log(matematicas)

// ------------ MODULO 5: CLASE 6 ------------

// Funcion para construir objetos (la primera letra es mayuscula)
function Course(){
    this.title = "Curso profesional de JS";
    this.inscribir =  function(){}
}

let objeto = new Course("Curso de Ruby")
let js = new Course("Curso de JavaScript")

console.log(objeto)
console.log(js)