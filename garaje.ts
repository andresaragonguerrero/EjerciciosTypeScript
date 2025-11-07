class Coche {
    readonly matricula: string;
    readonly potencia: number;
    readonly velocidad: number;
    readonly modelo: string;
    constructor(
        matricula: string,
        potencia: number,
        velocidad: number,
        modelo: string) {
        this.matricula = matricula;
        this.modelo = modelo;
        this.potencia = potencia;
        this.velocidad = velocidad;
    }
    imprime(): string {
        return `El coche con matricula ${this.matricula} de modelo ${this.modelo}, tiene
                una velocidad de ${this.velocidad} para una potencia de ${this.potencia}.`
    };

    velocidadCrucero(): number {
        return this.velocidad / this.potencia;
    };
}

function velocidadMedia(): number {
    let sumaTotalVelocidades: number = 0
    for (let coche of coleccionCoches) {
        sumaTotalVelocidades += coche.velocidad;
    }
    return sumaTotalVelocidades / coleccionCoches.length;
}

function potenciaMedia(): number {
    let sumaTotalPotencias: number = 0
    for (let coche of coleccionCoches) {
        sumaTotalPotencias += coche.potencia;
    }
    return sumaTotalPotencias / coleccionCoches.length;
}

let coche_1 = new Coche("zaader", 120.5, 110, "Seat 600");
let coche_2 = new Coche("ZZ-2443", 130.3, 125, "Volvo 678");
let coche_3 = new Coche("iuhsuahs", 150.8, 135.5, "Mercedes 500");

let coleccionCoches: Coche[] = [];

coleccionCoches.push(coche_1);
coleccionCoches.push(coche_2);
coleccionCoches.push(coche_3);



console.log("====== DATOS COCHES ======");
console.log(coche_1.imprime());
console.log(coche_2.imprime());
console.log(coche_3.imprime());

console.log("====== DATOS: Velocidad crucero ======");
console.log(coche_1.velocidadCrucero());
console.log(coche_2.velocidadCrucero());
console.log(coche_3.velocidadCrucero());

console.log("====== VELOCIDAD MEDIA: " + velocidadMedia() + " ======");
console.log("====== POTENCIA MEDIA: " + potenciaMedia() + " ======");
