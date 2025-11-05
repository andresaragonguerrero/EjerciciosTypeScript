class Alumno {
    nombre: string;
    edad: number;
    readonly soltero: boolean; // el readonly provoca que esta propiedad solo puede ser modificada en el constructor
    constructor(nombre: string, edad: number, soltero: boolean = true) { // solamente la propiedad soltero tiene un valor por defecto
        this.nombre = nombre;
        this.edad = edad;
        this.soltero = soltero;
    }
}

const alumno = new Alumno("Antonio", 20, true);

// hallar superficie y perímetro
class Cuadrado {
    x: number;
    y: number;
    longLado: number;
    constructor(x: number, y: number, longLado: number) {
        this.x = x;
        this.y = y;
        this.longLado = longLado;
    }
    mostrarAreaCuadrado(): number {
        return this.x * this.y;
    }
    mostrarPerimetroCuadrado(): number {
        return this.x * 4;
    }
}

const cuadrado = new Cuadrado(5, 6, 10);
const cuadrado2 = new Cuadrado(5, 6, 10);
console.log(`Área del cuadrado 1` + cuadrado.mostrarAreaCuadrado());
console.log(`Perímetro del cuadrado 1` + cuadrado.mostrarPerimetroCuadrado());
console.log(`Área del cuadrado 2` + cuadrado2.mostrarAreaCuadrado());
console.log(`Perímetro del cuadrado 2` +cuadrado2.mostrarPerimetroCuadrado());

// hallar superficie y perímetro
class Circulo {
    x: number;
    y: number;
    longRadio: number;
    constructor(x: number, y: number, longRadio: number) {
        this.x = x;
        this.y = y;
        this.longRadio = longRadio;
    }
    mostrarAreaCirculo(): number {
        return Math.PI * this.longRadio * this.longRadio;
    }
    mostrarPerimetroCirculo(): number {
        return 2 * Math.PI * this.longRadio;
    }
}

const circulo = new Circulo(2, 2, 4);
const circulo2 = new Circulo(2, 2, 4);
console.log(`Área del círculo 1` + circulo.mostrarAreaCirculo());
console.log(`Perímetro del círculo 1` + circulo.mostrarPerimetroCirculo());
console.log(`Área del círculo 2` + circulo2.mostrarAreaCirculo());

console.log(`Perímetro del círculo 1` + circulo2.mostrarPerimetroCirculo());
