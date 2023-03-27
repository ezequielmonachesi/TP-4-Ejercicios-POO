/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse".
 */

class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }
  get nombre() {
    return this.nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
  get profesion() {
    return this.#profesion;
  }
  set profesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }
  saludar() {
    console.log(`Hola`);
  }
  despedirse() {
    console.log(`Adiós`);
  }
}

class PersonaDniGenero extends Persona {
    #genero
    #dni
  constructor(nombre, edad, profesion, genero, dni) {
    super(nombre, edad, profesion);
    this.#genero = genero;
    this.#dni = dni;
  }
}

let juan = new PersonaDniGenero("Juan", 29, "Plomero","Masculino", 45678432);
let daiana = new PersonaDniGenero("Sol", 31, "Profesora", "Femenino", 34567123)

juan.saludar()
daiana.despedirse()
