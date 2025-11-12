class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
     console.log(`hola, mi nombre es ${this.nombre} y tengo ${this.edsd} años.`);
    }
}
const persona1 = new personalbar("mia" , 18);
persona1.saludar();