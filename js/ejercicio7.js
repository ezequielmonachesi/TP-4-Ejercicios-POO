// 7- Nos piden realizar una agenda telefónica de contactos

class Agenda {
  #array;
  constructor(array) {
    this.#array = array;
  }
  get array() {
    return this.#array;
  }
  set array(nuevoArray) {
    this.#array = nuevoArray;
  }
  aniadirContacto(contacto) {
    if (this.#array.length < 10) {
      this.#array.push(contacto);
      console.log(`Contacto ${contacto.nombre} Aregado`);
    } else {
      document.write(`No se pueden agregar más de 10 contactos <br>`);
      console.log("No se pueden agregar más de 10 contactos");
    }
  }
  listarContactos() {
    document.write(`<h1>Contactos</h1>`);
    document.write(`<ul>`);
    for (const i in this.#array) {
      document.write(
        `<li>Nombre: ${this.#array[i].nombre}<br>Contacto: ${
          this.#array[i].telefono
        }</li>`
      );
      console.log(
        `Nombre: ${this.#array[i].nombre} Contacto: ${this.#array[i].telefono}`
      );
    }
    document.write(`</ul>`);
  }
  existeContacto(contacto) {
    if (this.#array.find((i) => i.nombre === contacto.nombre)) {
      document.write(
        `El contacto ${contacto.nombre} ya existe en su agenda <br>`
      );
      console.log(`El contacto ${contacto.nombre} ya existe en su agenda`);
    } else {
      document.write(
        `El contacto ${contacto.nombre} no existe en su agenda <br>`
      );
      console.log(`El contacto ${contacto.nombre} no existe en su agenda`);
    }
  }
  eliminarContacto(contacto) {
    let indice = this.#array.map(i=>i.nombre).indexOf(contacto.nombre);
    if (indice > -1 || undefined) {
      this.#array.splice(indice, 1);
      document.write(`Se borró ${contacto.nombre} de la agenda <br>`);
      console.log(`Se borró ${contacto.nombre} de la agenda`);
    } else {
      document.write("No se borro ningún contacto <br>");
      console.log("No se borro ningún contacto");
    }
  }
  agedaLlena() {
    if (this.#array.length === 10) {
      document.write(`La agenda está llena <br>`);
      console.log(`La agenda está llena`);
    } else {
      document.write(`La agenda aún no está llena <br>`);
      console.log(`La agenda aún no está llena`);
    }
  }
  huecosLibres() {
    if (this.#array.length < 10) {
      document.write(
        `Se puede agregar ${10 - this.#array.length} contacto/s más <br>`
      );
      console.log(`Se puede agregar ${10 - this.#array.length} contacto/s más`);
    } else {
      document.write(`La agenda está llena <br>`);
      console.log(`La agenda está llena`);
    }
  }
}

class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
}   

let contacto;
let contactos = [];
let agenda = new Agenda(contactos);

let opcion;
let confirmar; 

do {
  opcion = parseInt(
    prompt(
      "Ingrese una opcion por favor: 1. Crear un contacto - 2. Mostrar contactos - 3. Buscar si existe un contacto - 4. Borrar contacto - 5. Consultar si la Agenda está llena - 6. Espacio restante para agregar contactos"
    )
  );
  switch (opcion) {
    case 1:
      let nombre = prompt("Ingrese el nombre por favor");
      let telefono = parseInt(
        prompt("Ingrese el número del teléfono del contacto")
      );
      let contacto = new Contacto(nombre, telefono);
      agenda.aniadirContacto(contacto);
      break;
    case 2:
      agenda.listarContactos();
      break;
    case 3:
      let existeContacto = new Contacto(
        prompt("Ingrese el contacto que quiere BUSCAR")
      );
      agenda.existeContacto(existeContacto);
      break;
    case 4:
      let borarContacto = new Contacto(
        prompt("Ingrese el contacto que quiere Borrar")
      );
      agenda.eliminarContacto(borarContacto);
      break;
    case 5:
      agenda.agedaLlena();
      break;
    case 6:
      agenda.huecosLibres();
      break;
    default:
      "Opción inválida";
  }
  confirmar = confirm(
    "Presione Aceptar para volver al menú. Cancelar para salir"
  );
} while (confirmar === true);