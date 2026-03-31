// ------------ MODULO 8: CLASE 1 ------------
function Course(){

}

console.log(Course.prototype);

Course.prototype.inscribir = function(){
    console.log("Inscribir")
}

let course = new Course();
course.title = "Hola"
course.abandonar = function() { console.log("Abandonar") }
course.inscribir()

console.log(course)

// ------------ MODULO 8: CLASE 2 ------------
/*
    CONCEPTOS DE PROTOTIPOS

    prototype object es el objeto al que podemos asignar métodos y propiedades que queremos compartir en el prototype chain o cadena de prototipos.

    Cuando creamos un objeto de una función usando new, se asigna una propiedad proto que apunta al prototype de la función con la que se creó el objeto (constructor). proto apunta al prototype de la función constructora.

    Cuando intentas acceder a una propiedad o un método (como un .toString() o un .length), JavaScript sigue este orden:
    1. Busca dentro del propio objeto.
    2. Si no lo encuentra, salta a su prototipo (su antecesor).
    3. Si sigue sin estar ahí, salta al prototipo del prototipo.
    4. Esto continúa hasta encontrarlo o llegar al final de la cadena.

    Toda cadena tiene un final. En JavaScript, casi todos los caminos llevan a Object.prototype

*/

// ------------ MODULO 8: CLASE 3 ------------
function Course(){
    Course.prototype.inscribir = function() {
        console.log("Inscrito")
    }
}

Course.prototype.conteo = 0;

let javaScript = new Course();
javaScript.__proto__.conteo += 1
let ruby = new Course();
ruby.__proto__.conteo += 1

// Se pueden agregar más métodos
Course.prototype.otro = function() {
    console.log("Otro metodo")
}

javaScript.inscribir()
ruby.inscribir()
javaScript.otro()

console.log(Course.prototype.conteo)

// ------------ MODULO 8: CLASE 4 ------------
function Course(title){
    this.title = title;
}

function LiveCourse(date){
    this.published_at = date
}

let java = new Course("Curso profesional de Java")
let react = Object.create(java)

console.log(react)

react.title = "Curso de React"

console.log(java)
console.log(react)

LiveCourse.prototype = Object.create(Course.prototype)

javaScript = new LiveCourse(new Date());
javaScript.inscribir();
console.log(javaScript)