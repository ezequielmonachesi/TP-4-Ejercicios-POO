class Cuenta{
    #propiedadTitular
    #saldo
    constructor(propiedadTitular, saldo){
        this.#propiedadTitular = propiedadTitular;
        this.#saldo = saldo;
    }
    get propiedadTitular(){
        return this.#propiedadTitular;
    }
    set propiedadTitular(nuevaPropiedadTitular){
        this.#propiedadTitular = nuevaPropiedadTitular;
    }
    get saldo(){
        return this.#saldo;
    }
    set saldo(nuevoSaldo){
        this.#saldo=nuevoSaldo;
    }
    ingresar(plata){
        this.#saldo += plata;
        console.log(`Se agregó a la cuenta de ${this.#propiedadTitular} +$${plata}`)
    }
    extraer(plata){
        this.#saldo-= plata;
        console.log(`Se quitó de la cuenta de ${this.#propiedadTitular} -$${plata}`)
    }
    informar(){
        console.log(`El saldo de ${this.#propiedadTitular} es: ${this.#saldo}`)
    }

}

let alex = new Cuenta('Alex', 0);

alex.informar()
alex.ingresar(3000)
alex.extraer(1000)
alex.informar()