let cuenta = { 
    titular: "Alex", 
    saldo: 0,
    ingresar(plata){
        this.saldo += plata
    },
    extraer(plata){
        this.saldo-= plata;
    },
    informar(){
        document.write(`El saldo es: ${this.saldo} <br>`)
    }
};
