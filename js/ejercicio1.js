/* 1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
 */

const auto = {
    color: 'rojo',
    marca: 'Chevrolet',
    modelo: 'Onix',
    motor: 'Apagado',
    encendido() {
        auto.motor = 'Encendido';
        document.write(`Auto encendido <br>`);
    },
    apagado() {
        auto.motor = 'Apagado';
        document.write(`Auto apagado <br>`);
    }
}