class Envio {
    identificador: string;
    numeroEnvio: bigint;
    precio: number;
    recibido: boolean;
    constructor (identificador: string, numeroEnvio: bigint, precio: number, recibido: boolean){
        this.identificador = identificador;
        this.numeroEnvio = numeroEnvio;
        this.precio = precio;
        this.recibido = recibido;
    }

    calcularIva(): number {
        return this.precio * 21 / 100; // precio * 0.21
    }

    validarIdentificador(): boolean {
        const regexIdentificador: RegExp = /^[A-H]{2}[0-9]{2}[I-Z]{2}$/;
        return regexIdentificador.test(this.identificador);
    }
}

let envio_1 = new Envio("123", 100000n, 12.45, true);
let envio_2 = new Envio("AB12IZ", 100000n, 9.4, false);
let envio_3 = new Envio("HH99ZZ", 100000n, 20.25, true);

console.log(envio_1.calcularIva());
console.log(envio_2.calcularIva());
console.log(envio_3.calcularIva());

console.log(envio_1.validarIdentificador());
console.log(envio_2.validarIdentificador());
console.log(envio_3.validarIdentificador());