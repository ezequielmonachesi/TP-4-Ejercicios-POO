// 7- Nos piden realizar una agenda telefónica de contactos


class Agenda{
    #array
    constructor(array){
        this.#array=array;
    }
    get array(){
        return this.#array
    }
    set array(nuevoArray){
        this.#array=nuevoArray
    }
    aniadirContacto(contacto){
        if(this.#array.length < 10){
            this.#array.push(contacto);
        }else{
            document.write(`No se pueden agregar más de 10 contactos <br>`)
        }
    }
    listarContactos(){
        document.write(`<h1>Contactos</h1>`)
        document.write(`<ul>`)
        for (const i in this.#array) {
            document.write(`<li>Nombre: ${this.#array[i].nombre}<br>Contacto: ${this.#array[i].telefono}</li>`)
        }
        document.write(`</ul>`)
    }
    existeContacto(contacto){
        if(this.#array.find(i=>i.nombre===contacto.nombre)){
            document.write(`El contacto ${contacto.nombre} ya existe en su agenda <br>`)
        }else{
            document.write(`El contacto ${contacto.nombre} no existe en su agenda <br>`)
        }
    }
    eliminarContacto(contacto){
        let indice = this.#array.indexOf(contacto);
        if(indice>-1 || undefined){
            this.#array.splice(indice, 1);
            document.write(`Se borró ${contacto.nombre} de la agenda <br>`)
        }else{
            document.write("No se borro ningún contacto <br>")
        }
    }
    agedaLlena(){
        if(this.#array)
    }

}

class Contacto{
    #nombre
    #telefono
    constructor(nombre, telefono){
        this.#nombre=nombre;
        this.#telefono=telefono;
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nuevoNombre){
        this.#nombre=nuevoNombre;
    }
    get telefono(){
        return this.#telefono
    }
    set telefono(nuevoTelefono){
        this.#telefono=nuevoTelefono;
    }

}

let juan = new Contacto('Juan', 3816234789)
let daniel = new Contacto('Daniel', 3816234789)
let jose = new Contacto('José', 3876345123)

let contactos = []

let agenda = new Agenda(contactos);