/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área */

class rectangulos{
    constructor(alto, ancho){
        this.alto = alto,
        this.ancho = ancho
    }
    editarAltura(altura){
        this.alto = altura;
    }
    editarAncho(ancho){
        this.ancho = ancho;
    }
    alto(){
        this.alto;
    }
    ancho(){
        this.ancho
    }
    perimetro(){
        document.write(`El perímetro del rectangulo es: ${this.alto * this.ancho}`)
    }
    area(){
        document.write(`El perímetro del rectangulo es: ${this.alto * this.ancho / 2}`)
    }
}