/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
  #alto
  #ancho
  constructor(alto, ancho) {
    (this.#alto = alto), (this.#ancho = ancho);
  }
  get alto(){
    return this.#alto;
  }
  set alto(nuevaAltura){
    this.#alto=nuevaAltura;
  }
  get ancho(){
    return this.#ancho;
  }
  set ancho(nuevoAncho){
    this.#ancho=nuevoAncho;
  }
  editar(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
    document.write(
      `Se editaron exitosamente los valores del rectángulo: Altura ${this.#alto}, Ancho ${this.#ancho} <br>`
    );
  }
  mostrarDatos() {
    document.write(`El ancho del rectángulo es: ${this.#ancho} <br>`);
    document.write(`La altura del rectángulo es: ${this.#alto} <br>`);
  }
  perimetro() {
    document.write(
      `El perímetro del rectangulo es: ${(this.#alto + this.#ancho) * 2}<br>`
    );
  }
  area() {
    document.write(
      `El área del rectangulo es: ${this.#alto * this.#ancho} <br>`
    );
  }
}

let rectangulo = new Rectangulo(10, 5);

rectangulo.mostrarDatos();
rectangulo.perimetro();
rectangulo.area();
rectangulo.editar(20,10);
rectangulo.mostrarDatos();
rectangulo.perimetro();
rectangulo.area();