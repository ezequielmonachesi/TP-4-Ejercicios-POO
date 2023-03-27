/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */
class Animal{
    #nombre
    #edad
    constructor(nombre, edad){
        this.#nombre=nombre;
        this.#edad=edad;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre;
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){
        this.#edad=nuevaEdad;
    }
    emitirSonido(){
        console.log('grrrrrrrrrrrrrrr')
    }
}

class Perro extends Animal{

    constructor(nombre, edad){
        super(nombre, edad);
    }
    emitirSonido(){
        console.log("gua guauuuuuuu guauuuuuuuuuuu");
    }
}
class Gato extends Animal{

    constructor(nombre, edad){
        super(nombre, edad);
    }
    emitirSonido(){
        console.log("miau miauuu");
    }
} 

let tobi = new Perro('Tobi', 6)
let luna = new Gato('Luna', 1)

tobi.emitirSonido();
luna.emitirSonido();
