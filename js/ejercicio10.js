/* 10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
de un avión y devolverá información en caso de encontrarlo, si no lo encontró
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
de pasajeros. Los aviones tienen el método abordar el cual permite que un
pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
buscar un avión y usar el método abordar */

class Aeropuerto {
  #nombreAeropuerto;
  #listaAviones;
  constructor(nombreAeropuerto, listaAviones) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = listaAviones;
  }
  get nombreAeropuerto() {
    return this.#nombreAeropuerto;
  }
  set nombreAeropuerto(nuevonombreAeropuerto) {
    this.#nombreAeropuerto = nuevonombreAeropuerto;
  }
  get listaAviones() {
    this.#listaAviones;
  }
  set listaAviones(nuevaListaAviones) {
    this.#listaAviones = nuevaListaAviones;
  }
  agregarAvion(avion) {
    this.#listaAviones.push(avion);
    console.log(`Avión ${avion.nombre} agregado`)
  }
  buscarAvion(avion) {
    if (this.#listaAviones.find((i) => i.nombre === avion.nombre)) {
      document.write(`Existe avión`);
    } else {
      document.write(`No existe avión`);
    }
  }
}
class Avion {
  #nombre;
  #capacidad;
  #destino;
  #listaPasajeros;
  constructor(nombre, capacidad, destino, listaPasajeros) {
    this.#nombre = nombre;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.#listaPasajeros = listaPasajeros;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get capacidad() {
    return this.#capacidad;
  }
  set capacidad(nuevaCapacidad) {
    this.#capacidad = nuevaCapacidad;
  }
  get destino() {
    return this.#destino;
  }
  set destino(nuevoDestino) {
    this.#destino = nuevoDestino;
  }
  get listaPasajeros() {
    return this.#listaPasajeros;
  }
  set listaPasajeros(nuevaListaPasajeros) {
    this.#listaPasajeros = nuevaListaPasajeros;
  }
  abordar() {
    if (this.#listaPasajeros.length < this.#capacidad) {
      console.log(`Pueden subir al avión más pasajeros`);
    } else {
      console.log(`No pueden subir al avión más pasajeros`);
    }
  }
}

let aviones =[];
let aeropuertoInternacional = new Aeropuerto(
  "Aeropuerto Internacional",
  aviones
);

let aerolinaArgentina = new Avion("Aerolina Argentina", 4, "Miami", [
  "Jose",
  "Juan",
  "Edilson",
]);
let flybondi = new Avion("Flybondi", 12, "Uruguay", [
  "Daniel",
  "Roberto",
  "Soledad",
]);
let lade = new Avion("Lade", 9, "Brazil", [
  "Marcos",
  "Ezequiel",
  "Emilse",
  "Nahuel",
  "Nicolas",
  "Matias",
  "Silvio",
  "Juan Carlos",
  "Laura",
]);

aeropuertoInternacional.agregarAvion(aerolinaArgentina);
aeropuertoInternacional.agregarAvion(flybondi);
aeropuertoInternacional.agregarAvion(lade);
aeropuertoInternacional.buscarAvion(lade);
lade.abordar();