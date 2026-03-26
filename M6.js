// ------------ MODULO 6: CLASE 1 ------------
console.log(this) // Si se hace en navegador es Window

let objeto = {
    demo: function(){
        console.log(this)
    }
}

let func = objeto.func

func()

function ejecutor(f){
    f()
}

ejecutor(objeto.func)

// ------------ MODULO 6: CLASE 2 ------------
let demo = () => {
    console.log("Hola mundo")
}

let suma = (a,b) => a + b // Al no poner llaves, el return es implicito
console.log(suma(2,3));

// ------------ MODULO 6: CLASE 3 ------------
/* 
    ARROW FUNCTIONS
    - Tienen una sintaxis más corta que la declaración con function
    - Heredan el valor de this del contexto en el que fueron creadas, no se reasigna
*/

let estudiante = {
    nombre: "Naomi",
    saludar: () => { console.log("Hola soy " + this.nombre)},
    saludarAlt : function() { console.log("Hola soy " + this.nombre) }
}

estudiante.saludar(); // Hola soy undefined
estudiante.saludarAlt(); // Hola soy Naomi

// ------------ MODULO 6: CLASE 4 ------------
function Estudiante(){
    this.nombre = "Naomi",
    saludar = function() { console.log(this) }
}

let e = new Estudiante();
e.saludar()

e.saludar.call({})

let nuevaFuncion = e.saludar.bind({})
nuevaFuncion()