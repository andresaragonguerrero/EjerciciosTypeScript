// reflexión: los objetos saben de que clase son
// retrospección: cambiar el comportamiento en tiempo de ejecución

abstract class Persona {
    readonly nombre: string;
    readonly edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
    abstract dameNombre(): string
    abstract dameEdad(): number
}

class Alumno extends Persona {
    readonly identidicador: string;
    readonly curso: boolean;
    constructor(nombre: string, edad: number, identificador: string, curso: boolean) {
        super(nombre, edad);
        this.identidicador = identificador;
        this.curso = curso;
    }
    dameNombre(): string {
        return "El nombre del alumno es " + this.nombre;
    }
    dameEdad(): number {
        return this.edad;
    }
}

class Profesor extends Persona {
    readonly estudios: string;
    constructor(nombre: string, edad: number, estudios: string) {
        super(nombre, edad);
        this.estudios = estudios;
    }
    dameNombre(): string {
        return "El nombre del profesor es " + this.nombre;
    }
    dameEdad(): number {
        return this.edad;
    }
}

class Coodinador extends Profesor {
    readonly turno: string;
    constructor(nombre: string, edad: number, estudios: string, turno: string) {
        super(nombre, edad, estudios);
        this.turno = turno;
    }
    dameNombre(): string {
        return "El nombre del coordinador es " + this.nombre;
    }
    dameEdad(): number {
        return this.edad;
    }
}

/*
    Se encarga de calcular la edad media de las personas.
    Recorre el arreglo de personas recogiendo la edad de cada una de ellas.
    En la variable suma se van sumando las edades.
    Finalmente se devuelve el resultado de la suma de todas las edades 
    entre el número de elementos del arreglo
*/
function calcularEdadMedia(): string {
    let sumaEdades: number = 0;
    let resultado: number = 0;
    arrayPersonas.forEach(element => {
        sumaEdades = sumaEdades + element.dameEdad();
    });
    resultado = sumaEdades / arrayPersonas.length;
    return "La edad media de las personas es " + resultado;
}

let alumno_Rocio = new Alumno("ROCÍO", 32, "45327866K", true);
let alumno_Angel = new Alumno("ÁNGEL", 20, "57439901L", true);
let alumno_Ismael = new Alumno("ISMAEL", 25, "22497932T", false);
let alumno_Dan = new Alumno("DAN", 32, "43645633P", false);
let profesor_Jacinto = new Profesor("JACINTO", 35, "Desarrollo de Aplicaciones Web");

let arrayPersonas: Persona[] = [];
arrayPersonas.push(alumno_Rocio);
arrayPersonas.push(alumno_Angel);
arrayPersonas.push(alumno_Ismael);
arrayPersonas.push(alumno_Dan);
arrayPersonas.push(profesor_Jacinto);

arrayPersonas.forEach(element => {
    console.log(element.dameNombre());
    console.log(element.dameEdad());
});

console.log(calcularEdadMedia());