//export pi a modulo.js
export const pi = Math.PI;

// Declaracion de variables
export let usuario = "Dani";
export let pass = "1234";

//default para variables
//default es una sola exportacion por modulo
// Con variables
//1. declarar variable
//2. exportar variable
//const edad = "Dani";
//export default edad;

//funciones
//no usar this en funciones exportadas
export function updateUser(nombre) {
    usuario = nombre;
    return usuario;
};

//devolver en un objeto

export const metodos = {
    updateUser(nombre) {
        usuario = nombre;
        return usuario;
    },
    updatePass(contrasenia) {
        pass = contrasenia;
        return pass;
    }
}

//default es una sola exportacion por modulo
export default function saludar(){
    console.warn("Hola desde el modulo constante.js");
    console.log("El usuario es: " + usuario);
    console.log("La contraseña es: " + pass);
}

//exportar una class

export class Personas{

    constructor(name, tel) {
        this.nombr = name;
        this.telefono = tel;
    }

    imprimir() {
        console.log(`Hola, soy ${this.nombr} y mi contraseña es ${this.telefono}`);
    }

}