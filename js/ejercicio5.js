/* 
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
 */

class Persona{
    #nombre
    #edad
    #dni
    #sexo
    #peso
    #altura
    constructor(nombre, edad, dni, sexo, peso, altura){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#dni=dni;
        this.#sexo=sexo;
        this.#peso=peso;
        this.#altura=altura;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }
    get edad(){
        return this.#edad;
    }
    set edad(nuevaEdad){
        this.#edad=nuevaEdad;
    }
    get dni(){
        return this.#dni;
    }
    set dni (nuevoDni){
        this.#dni=nuevoDni;
    }
    get sexo(){
        return this.#sexo;
    }
    set sexo(nuevoSexo){
        this.#sexo=nuevoSexo;
    }
    get peso(){
        return this.#peso;
    }
    set peso(nuevoPeso){
        this.#peso=nuevoPeso;
    }
    get altura(){
        return this.#altura;
    }
    set altura(nuevaAltura){
        this.#altura=nuevaAltura;
    }

    mostrarGeneracion(){
        if(2023-this.#edad >= 1994 && 2023-this.#edad <= 2010){
        document.write(`${this.#nombre} pertenece a la Generación Z. Rasgo característico: Irreverancia <br>`)
        }else if (2023-this.#edad >= 1981 && 2023-this.#edad <= 1993){
            document.write(`${this.#nombre} pertenece a la Generación Y. Rasgo característico:  Frustración <br>`)
        }else if (2023-this.#edad >= 1969 && 2023-this.#edad <= 1980){
            document.write(`${this.#nombre} pertenece a la Generación X. Rasgo característico: Obsesión por el éxito<br>`)
        }else if (2023-this.#edad >= 1949 && 2023-this.#edad <= 1968){
            document.write(`${this.#nombre} pertenece a la Generación Baby Boom. Rasgo característico: Ambición <br>`)
        }else{
            document.write(`${this.#nombre} pertenece a la Generación Silent Generation. Rasgo característico: Austeridad <br>`)
        }
    }
    
    esMayorDeEdad(){
        this.#edad >= 18 ? document.write(`${this.#nombre} es mayor de edad <br>`): document.write(`${this.#nombre} es menor de edad <br>`)
    }
    mostrarDatos(){
        document.write(`Nombre: ${this.#nombre}, Años: ${this.#edad}, DNI: ${this.#dni}, Sexo: ${this.#sexo}, Peso: ${this.#peso}Kg, Altura: ${this.#altura}cm <br>`)
    }
    generaDNI(){
        this.#dni = Math.floor(Math.random() * 99999999) + 9999999;
    }
}

        
// let random = Math.floor(Math.random() * 3) + 1;

let juan = new Persona('Juan', 25, 36368963, 'M', 80, 180)
let jose = new Persona('Jose', 90, 567890, 'M', 50, 160)
let damian = new Persona('Damian', 50, 17654987, 'M', 70, 155)
let emilse = new Persona('Emilse', 10, 40678234, 'F', 30, 120)

document.write(`Dni de ${juan.nombre}: ${juan.dni} <br>`);
console.log(juan.dni);
juan.mostrarGeneracion();
juan.esMayorDeEdad();
juan.generaDNI();
console.log(juan.dni);
document.write(`Nuevo Dni de ${juan.nombre}: ${juan.dni}`)