//Funciones
//Scope
function suma(a, b) {
    return a + b;
}

//Arrow functions
const resta = (a, b) => a-b;

// console.log("🚀 ~ file: javascriptIntro.js ~ line 10 ~ resta ~ resta", resta(10,2))

// console.log(suma(3,2));


//Variables
var result = suma(4, 23);
// console.log("🚀 ~ file: javascriptIntro.js ~ line 12 ~ result", result)
const result2 = suma(2, 10);
// console.log("🚀 ~ file: javascriptIntro.js ~ line 14 ~ result2", result2)
let string = "Hola chiquillos";
string = 'Soy otro string';
result = 'Hola';
// console.log("🚀 ~ file: javascriptIntro.js ~ line 16 ~ string", result)

//Tipos de datos

//String 'Soy una cadena de texto'
// Son cadenas de texto 
//Number => números
//Boolean => true || false
//Arrays => listas
const users = ['user1', 'user2', 'user3'];
// console.log("🚀 ~ file: javascriptIntro.js ~ line 33 ~ users", users)

// Objetos
const student = {
    name: 'Esperanza',
    age: 25,
    stack: 'MERN',
    hobbies: ['leer', 'trekking', 'cantar']
}


// POO
// Programación orientada a objetos
class Animal {
  constructor(cantidadPatitas, name, habitat) {
    this.cantidadPatitas = cantidadPatitas;
    this.name = name;
    this.habitat = habitat;
  }

  moverse(distancia) {
    console.log(`Me moví ${distancia} metros`)
  }
  

}

const gatito = new Animal(4, 'Michi', 'tierra');

// gatito.moverse(15)

//Dado un string determinar si es un palíndrome
 const isPalindrome = (string) => {
    let reverseString = '';
    for(let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i];
    }
    if(reverseString.toLocaleLowerCase() === string.toLocaleLowerCase()) {
        return true;
    } else {
        return false;
    }
}

 console.log(isPalindrome('casa'))