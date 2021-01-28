/*
Ejemplos de Tipos de Datos en JavaScript
*/

//Tipo de Dato String
var nombre = 'Carlos';
console.log(nombre);

//Tipo de Dato Entero
var numero = 125;
console.log(numero);
 
//Tipo de Dato Object
var objeto = {
    nombre : 'Alexander',
    apellido : 'Coral',
    telefono : '0987654321'   
}
console.log(objeto);

//Tipado dinamico (TypeOf)
var nombre = 'Carlos';
console.log(nombre);
console.log(typeof nombre);
nombre = 50;
console.log(typeof nombre);
nombre = true;
console.log(typeof nombre);
console.log(typeof objeto);

//Tipo de dato Boolean (true / false)
var bool = true;
console.log(bool)
console.log(typeof bool)

//Tipo de dato Funcion (function)
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion)

//Tipo de Dato Symbol
var simbolo = Symbol("Mi Simbolo");
console.log(simbolo)
console.log(typeof simbolo)

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona)
console.log(typeof Persona);

//Tipo de Dato undefined
var x;
console.log(x);
console.log(typeof x);
 
//Tipo de Dato NULL
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato Areglos (Array)
var auto = ['bmw','Toyota','Volvo'];
console.log(auto);
console.log(typeof auto);

//Tipo de Dato de Valor Vacio
var z = '';
console.log(z);
console.log(typeof z);


