/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.
 */

class Producto {
  #codigo
  #nombre
  #precio
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }
  get codigo(){
    return this.#codigo;
  }
  set codigo(nuevoCodigo){
    this.#codigo=nuevoCodigo;
  }
  get precio(){
    return this.#precio;
  }
  set precio(nuevoPrecio){
    this.#precio=nuevoPrecio;
  }
  get nombre(){
    return this.#nombre;
  }
  set nombre(nuevoNombre){
    this.#nombre=nuevoNombre;
  }
  imprimeDatos(){
    document.write(`Código: ${this.#codigo}, Nombre: ${this.#nombre}, Precio: ${this.#precio} <br>`)
 //   
  }
}

let leche = new Producto(321654, 'Leche', 230);
let chocolate = new Producto(642753, 'Chocolate', 290);
let azucar = new Producto( 974864, 'Azúcar', 170);
let productos = [leche, chocolate, azucar];

for (let p in productos) {
  productos[p].imprimeDatos()
  };

