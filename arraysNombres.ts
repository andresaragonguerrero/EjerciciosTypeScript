let nombres01: string[] = ["Andra", "Aneu", "Arlet", "Ehud", "Indivar", "Samay", "Sança", "Tanit", "Uxia", "Zenda"];
let nombres02: string[] = ["Abba", "Acfred", "Areu", "Drac", "Guim", "Iol", "Kilian", "Mirt", "Yannick", "Zigor", "Tanit"];

// concatena los dos arrays de nombres
let concatenacionNombres: string[] = nombres02.concat(nombres01);

// comprobación del número de caracteres 1
for (let nombre of concatenacionNombres){
    console.log(comprobarLongitudNombreMayorDeDos(nombre));
}

// comprobación del número de caracteres 2
console.log(nombres01.every(nombre => comprobarLongitudNombre(nombre, 2)));
console.log(nombres02.every(nombre => comprobarLongitudNombre(nombre, 2)));

// comprobación alfabética de los nombres
console.log(nombres01.filter(nombre => nombre.charAt(0) > "I"));

// encontrar Tanit y Jacinto
console.log(comprobarSiNombreExiste("Tanit"));
console.log(comprobarSiNombreExiste("Jacinto"));

// concatenar con comas los arrays
console.log(nombres01.join(","));
console.log(nombres02.join(","));

// crear un nuevo array a partir de otro
let nuevoArrayNombres = nombres01.map(nombre => nombre.length);
console.log("Nuevo array creado a partir del número de caracteres de cada nombre: " + nuevoArrayNombres);

// eliminar el último elemento
console.log("Último elemento eliminado: " + nombres01.pop());
console.log("Último elemento eliminado: " + nombres02.pop());

// añadir Jacinto a ambos arrays de nombres
nombres01.push("Jacinto");
nombres02.push("Jacinto")
console.log("Se añadió Jacinto a la lista: " +  nombres01);
console.log("Se añadió Jacinto a la lista: " + nombres02);

// sumar el número total de caracteres
let totalValores = 0
console.log("Suma total de los valores del arreglo: " + nuevoArrayNombres.map(valor => totalValores += Number(valor))); // no funciona

// crear dos subarrays
let nombres01Subarray = nombres01.slice(0, 7);
let nombres02Subarray = nombres02.slice(4, 6);
let nuevoArrayDeSubarrays = nombres01Subarray.concat(nombres02Subarray);
console.log(nuevoArrayDeSubarrays);

// comprobar si el numero de caracteres del nombre es mayor que seis
console.log(nombres01.some(nombre => comprobarLongitudNombre(nombre, 6)));
console.log(nombres02.some(nombre => comprobarLongitudNombre(nombre, 6)));

// ordenar los arrays
console.log("Nombres ordenados de la A a la Z: " + nombres01.sort());
console.log("Nombres ordenados de la A a la Z: " + nombres02.sort());
console.log("Nombres ordenados de la Z a la A: " + nombres01.toSorted((nombre1, nombre2) => (nombre1 > nombre2 ? -1 : 1)));
console.log("Nombres ordenados de la Z a la A: " + nombres01.toSorted().toReversed());
console.log("Nombres ordenados de la Z a la A: " + nombres02.toSorted((nombre1, nombre2) => (nombre1 > nombre2 ? -1 : 1)));
console.log("Nombres ordenados de la Z a la A: " + nombres02.toSorted().toReversed());

function comprobarLongitudNombreMayorDeDos(nombre: string): string {
    if (nombre.length > 2) {
        return "El nombre " + nombre + " tiene más de dos caracteres.";
    } else {
        return "El nombre " + nombre + " no tiene más de dos caracteres.";
    }
}

function comprobarLongitudNombre(nombre: string, longitudDada: number): boolean {
    if (nombre.length > longitudDada){
        return true;
    } else {
        return false;
    }
}

function comprobarSiNombreExiste(nombre: string): string {
    if (nombres01.indexOf(nombre) === -1){
        return "El nombre " + nombre + " no se encuentra en la lista."
    } else {
        return "El nombre se encuentra en la lista.";
    }
}