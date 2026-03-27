// ------------ MODULO 7: CLASE 1 ------------
class Curso{
    constructor(titulo){
        this.titulo = titulo
    }

    inscribir(){
        console.log("Inscrito")
    }
}

let javaScript = new Curso("Curso profesional de JavaScript")
console.log(javaScript.titulo)
javaScript.inscribir

// ------------ MODULO 7: CLASE 2 ------------
class Curso{
    constructor(titulo){
        this.titulo = titulo
    }

    inscribir(nombre){
        this.nombre = nombre
    }
}

let c = new Curso()
c.inscribir("Naomi")

// ------------ MODULO 7: CLASE 3 ------------
class Curso{
    #title = "JavaScript" // Propeidad privada

    bienvenida(){
        console.log("Bienvenido al curso: " + this.#title)
    }
}

let javaScript2 = new Curso()
// console.log(javaScript2.#title) // Manda error porque es una propiedad privada

javaScript2.bienvenida()

// ------------ MODULO 7: CLASE 4 ------------
class Curso{
    constructor(titulo, color = "yellow"){
        this.titulo = titulo
        this.color = color
        console.log(arguments)
    }
}

new Curso("Curso profesional de JavaScript")

// ------------ MODULO 7: CLASE 5 ------------
class Human{
    especie = "Humano"
}

class Admin extends Human{}

let admin = new Admin()
console.log(admin.especie)

// ------------ MODULO 7: CLASE 6 ------------


// ------------ MODULO 7: CLASE 7 ------------
