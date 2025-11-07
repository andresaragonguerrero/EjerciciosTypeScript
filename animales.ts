abstract class Animal {
    mesNacimiento: number;
    diaNacimiento: number;
    annoNacimiento: number;
    nombre: string;
    constructor(
        mesNacimiento: number,
        diaNacimiento: number,
        annoNacimiento: number,
        nombre: string
    ) {
        if (mesNacimiento < 1 || mesNacimiento > 12) {
            throw new Error("Mes de nacimiento inválido. Debe estar entre 1 y 12.");
        }
        this.mesNacimiento = mesNacimiento;

        if (diaNacimiento < 1 || diaNacimiento > 31) {
            throw new Error("Día de nacimiento inválido. Debe estar entre 1 y 31.");
        }
        this.diaNacimiento = diaNacimiento;

        if (annoNacimiento < 2000 || annoNacimiento < 2024) {
            throw new Error("Año de nacimiento inválido. Debe estar entre 2000 y 2024.");
        }
        this.annoNacimiento = annoNacimiento;

        if (nombre.length < 0 || nombre.length > 2) {
            throw new Error("El nombre debe contener al menos dos caracteres.");
        }
        this.nombre = nombre;
    }
    dameEdad(): number {
        return 2025 - this.annoNacimiento;
    };

    dameDatos(): string {
        return this.nombre + this.mesNacimiento + "/" + this.diaNacimiento + "/" + this.annoNacimiento;
    };
}

abstract class Mamifero extends Animal {
    mesesGestacion: number;
    constructor(
        mesNacimiento: number,
        diaNacimiento: number,
        annoNacimiento: number,
        nombre: string,
        mesesGestacion: number
    ) {
        super(
            mesNacimiento,
            diaNacimiento,
            annoNacimiento,
            nombre);
        if (mesesGestacion < 1 || mesesGestacion > 18) {
            throw new Error("Meses de gestación inválidos. Deben estar entre 1 y 18.");
        }
        this.mesesGestacion = mesesGestacion;
    }
    dameDatos(): string {
        return this.nombre + this.mesNacimiento + "/" + this.diaNacimiento + "/" + this.annoNacimiento + "(" + this.mesesGestacion + ")";
    }
}

abstract class Primate extends Mamifero {
    masaCerebral: number;
    constructor(
        mesNacimiento: number,
        diaNacimiento: number,
        annoNacimiento: number,
        nombre: string,
        mesesGestacion: number,
        masaCerebral: number
    ) {
        super(
            mesNacimiento,
            diaNacimiento,
            annoNacimiento,
            nombre,
            mesesGestacion,
        );
        if (masaCerebral < 100 || masaCerebral > 2000) {
            throw new Error("Masa cerebral inválida. Debe estar entre 100 y 2000 gramos.");
        }
        this.masaCerebral = masaCerebral;
    }
    calculaMasaCerebral(): number {
        return this.masaCerebral / this.mesesGestacion;
    }
    dameDatos(): string {
        return this.nombre + this.mesNacimiento + "/" + this.diaNacimiento + "/" + this.annoNacimiento + "(" + this.mesesGestacion + ")" + ". Proporción de masa cerebral: " + this.calculaMasaCerebral();
    }
}

abstract class Humano extends Primate {
    apellidos: string;
    constructor(
        mesNacimiento: number,
        diaNacimiento: number,
        annoNacimiento: number,
        nombre: string,
        mesesGestacion: number,
        masaCerebral: number,
        apellidos: string
    ) {
        super(
            mesNacimiento,
            diaNacimiento,
            annoNacimiento,
            nombre,
            mesesGestacion,
            masaCerebral
        );
        if (apellidos.length < 2) {
            throw new Error("Apellidos inválidos. Deben tener al menos 2 caracteres.");
        }
        this.apellidos = apellidos;
    }
    dameDatos(): string {
        return this.nombre + this.mesNacimiento + "/" + this.diaNacimiento + "/" + this.annoNacimiento + "(" + this.mesesGestacion + ")" + ". Proporción de masa cerebral: " + this.calculaMasaCerebral() + ". Sus apellidos son: " + this.apellidos;
    }
}