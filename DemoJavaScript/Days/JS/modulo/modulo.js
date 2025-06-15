// Modulos (import/export)
//Permiten dividir el código en archivos separados y 
// reutilizables asi como importar y exportar funciones
// , objetos o variables entre ellos.
// 1. importar un modulo
// 2. declararacion de variables y funciones
// 3. ejecucion de codigo

// Importar un modulo
// ./ porque esta en la misma carpeta
import { pi, usuario, pass}  from "./constante.js";
//import metodo updateUser
import Persona, { updateUser }  from "./constante.js";
//importar objeto metodos
//importar Class Persona
import saludar, { Personas, metodos }  from "./constante.js";



console.warn("Modulos import y export");
console.warn("archivo modulo.js");

//variable pi
console.log("El valor de pi es: " + pi);
console.log("El usuario es: " + usuario);
console.log("La contraseña es: " + pass);

//actualizar usuario
console.log("El usuario actualizado es: " + updateUser("Dani Garcia"));
//usando el objeto metodos
console.log("El usuario actualizado es: " + metodos.updateUser("Dani Amaya"));
//actualizar contraseña
console.log("La contraseña actualizada es: " + metodos.updatePass("nuevaPass123"));

//llamar a la funcion por defecto}
//default es una sola exportacion por modulo
saludar();

//crear una instancia de la clase Usuario
let persona = new Personas("Ale", "123456789");
//llamar al metodo imprimir
persona.imprimir();
