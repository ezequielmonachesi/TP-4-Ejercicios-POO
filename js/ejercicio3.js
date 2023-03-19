/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulos {
  constructor(alto, ancho) {
    (this.alto = alto), (this.ancho = ancho);
  }
  editar(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
    alert(
      `Se editaron exitosamente los valores: Altura ${this.alto}, Ancho ${this.ancho}`
    );
  }
  mostrarDatos() {
    document.write(`El ancho es: ${this.ancho} <br>`);
    document.write(`La altura es: ${this.alto} <br>`);
  }
  perimetro() {
    document.write(
      `El perímetro del rectangulo es: ${(this.alto + this.ancho) * 2}<br>`
    );
  }
  area() {
    document.write(
      `El área del rectangulo es: ${(this.alto * this.ancho) / 2} <br>`
    );
  }
}

let rectangulo = new Rectangulos(10, 5);
let cuadrado = new Rectangulos(30, 30);
