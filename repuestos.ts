/*
Manolo, quiere un programa porque tiene una tienda de repuestos online y necesita una jerarquía de clases para llevarlo a cabo.
Manolo, junto con el equipo de desarrollo determinan que todos los repuestos deberán de devolver un Identificador y el precio de dicho repuesto. 
Los repuestos que tiene Manolo en su tienda son los siguientes:
Repuesto: Clase abstracta que tendrá dos métodos abstractos damePrecio(), dameIdentificador()

Rueda:
    El precio de la rueda será de 200 euros.
    cuando se le pida el identificador devolverá "Soy una rueda con identificador {identificador}
Retrovisor:
    El precio del retrovisor será de 50 euros.
    cuando se le pida el identificador devolverá "Soy un retrovisor con identificador {identificador}
Luz cruce:
    El precio de la luz de cruce es de 60 euros.
    Cuando se le pida el identificador devolverá "Soy una luz de cruce y mi idenficador es {identificador}

Crear un array de Repuestos y añadir dos ruedas, dos retrovisores y dos luces de cruce y calcular el precio total de esos repuestos.
*/

abstract class Repuestos {
    readonly identificador: number;
    readonly precio: number;
    constructor(identificador: number, precio: number) {
        this.identificador = identificador;
        this.precio = precio;
    }
    abstract dameIdentificador(): string
    abstract damePrecio(): number
}

class Rueda extends Repuestos {
    constructor(identificador: number, precio: number = 200) {
        super(identificador, precio);
    }
    dameIdentificador(): string {
        return "Soy una rueda con identificador: " + this.identificador;
    }
    damePrecio(): number {
        return this.precio;
    }
}

class Retrovisor extends Repuestos {
    constructor(identificador: number, precio: number = 50) {
        super(identificador, precio);
    }
    dameIdentificador(): string {
        return "Soy una retrovisor con identificador: " + this.identificador;
    }
    damePrecio(): number {
        return this.precio;
    }
}

class LuzCruce extends Repuestos {
    constructor(identificador: number, precio: number = 60) {
        super(identificador, precio);
    }
    dameIdentificador(): string {
        return "Soy una luz de cruce con identificador: " + this.identificador;
    }
    damePrecio(): number {
        return this.precio;
    }
}

function calcularPrecioTotal(): string {
    let sumaTotalPrecios: number = 0;
    arrayRepuestos.forEach(element => {
        sumaTotalPrecios += element.damePrecio();
    });
    return "El precio total de todos los repuestos es " + sumaTotalPrecios;
}

let rueda_1 = new Rueda(1, 200);
let rueda_2 = new Rueda(2, 200);
let retrovisor_1 = new Rueda(3, 50);
let retrovisor_2 = new Rueda(4, 50);
let luzCruce_1 = new Rueda(5, 60);
let luzCruce_2 = new Rueda(6, 60);

let arrayRepuestos: Repuestos[] = [];
arrayRepuestos.push(rueda_1);
arrayRepuestos.push(rueda_2);
arrayRepuestos.push(retrovisor_1);
arrayRepuestos.push(retrovisor_2);
arrayRepuestos.push(luzCruce_1);
arrayRepuestos.push(luzCruce_2);

arrayRepuestos.forEach(element => {
    console.log(element.dameIdentificador());
    console.log(element.damePrecio());
});

console.log(calcularPrecioTotal());