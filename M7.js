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
    constructor(name){
        this.name = name
    }
    
    respirar(){
        console.log("Inhala");
    }

    saludar(){
        console.log("Hola humano")
    }
}

class Admin extends Human{
    constructor(name){
        super(name)
    }
    
    saludar(){
        super.saludar()
        console.log("Hola, soy admin")
    }
}

let admin = new Admin() 
console.log(admin.especie)
admin.respirar()
admin.saludar

// Tambien se puede hacer herencia con funciones

// ------------ MODULO 7: CLASE 6 ------------
class User{
    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        if(typeof nombre !== "string") throw new Error("No es una cadena")

        this._nombre = nombre
    }
    
}

let user = new User()
user.nombre = "Cody" // setter
console.log(user.nombre) // getter

// ------------ MODULO 7: CLASE 7 ------------
/* 
    ¿Cuando usar funciones/propiedades estaticas?

    Propiedades: almacenar configuración fija

    Funciones: fucniones de utilidad, consturcción persononalizada de objetos
*/

class Api{
    static ENDPOINT = "localhost:3000"


    static get(){
        console.log("Método estático")
    }
}

Api.get()

console.log(Api.ENDPOINT)