/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
 */

class Libro{
    #isbn
    #titulo
    #autor
    #nPaginas
    constructor(isbn, titulo, autor, nPaginas){
        this.#isbn=isbn;
        this.#titulo=titulo;
        this.#autor=autor;
        this.#nPaginas=nPaginas;
    }
    get isbn(){
        return this.#isbn
    }
    set isbn(nuevoIsbn){
        this.#isbn = nuevoIsbn;
    }
    get titulo(){
        return this.#titulo
    }
    set titulo(nuevoTitulo){
        this.#titulo = nuevoTitulo;
    }
    get autor(){
        return this.#autor
    }
    set autor(nuevoAutor){
        this.#autor = nuevoAutor;
    }
    get nPaginas(){
        return this.#nPaginas;
    }
    set nPaginas(nuevonPaginas){
        this.#nPaginas = nuevonPaginas;
    }
    mostrarLibro(){
        document.write(`El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene páginas ${this.#nPaginas} <br>`)
    }
    
}

let narnia = new Libro(61199001, 'Narnia', 'C. S. Lewis', 816);
let elAbogadoDelMarciano = new Libro(9580443831, 'El Abogado del Marciano', 'Marcelo Birmajer', 126);
narnia.mostrarLibro()
elAbogadoDelMarciano.mostrarLibro();
elAbogadoDelMarciano.nPaginas>narnia.nPaginas?document.write(`El libro con más páginas es ${elAbogadoDelMarciano.titulo}`):document.write(`El libro con más páginas es ${narnia.titulo}`)
