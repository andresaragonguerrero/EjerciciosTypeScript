class Figura {
    readonly x: number;
    readonly y: number;
    constructor (x: number, y: number){
        this.x = x;
        this.y = y;
    }
}

class Rectangulo extends Figura {
    longLado: number;
    constructor (x: number, y: number, longLado: number){
        super(x,y);
        this.longLado = longLado;
    }
    calcularArea(): number {
        return this.x * this.y;
    }
    calcularPerimetro(): number {
        return this.x * 4;
    }
}

class Circulo extends Figura {
    longRadio: number;
    constructor (x: number, y: number, longRadio: number){
        super(x,y);
        this.longRadio = longRadio;
    }
    calcularArea(): number {
        return Math.PI * this.longRadio * this.longRadio;
    }
    calcularPerimetro(): number {
        return 2 * Math.PI * this.longRadio;
    }
}

class Triangulo extends Figura {
    z: number;
    constructor (x: number, y: number, z: number){
        super(x,y);
        this.z = z;
    }
    calcularArea(): number {
        let semiPerimetro: number = (this.x + this.y + this.z) / 2;
        return Math.sqrt(semiPerimetro * (semiPerimetro - this.x) * (semiPerimetro - this.y) * (semiPerimetro - this.z));
    }
    calcularPerimetro(): number {
        return this.x + this.y + this.z
    }
}

const rectangulo = new Rectangulo(2,2,2);
const circulo = new Circulo(4,4,6);
const triangulo = new Triangulo(3,3,5);
console.log("Áreas de las figuras: " + "rectángulo ->" + rectangulo.calcularArea() + "; círculo -> " + circulo.calcularArea() + "; triángulo -> " + triangulo.calcularArea());
console.log("Perímetros de las figuras: " + "rectángulo ->" + rectangulo.calcularPerimetro() + "; círculo -> " + circulo.calcularPerimetro() + "; triángulo -> " + triangulo.calcularPerimetro());