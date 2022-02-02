let myLib = require("./clasePerson");



let persona1 = new myLib.Personas(160, 50)


console.log(persona1); 
console.log(persona1.calcImc());
console.log(persona1.calcEdad(2022)); 
persona1.printAll()
persona1.printHobbies()




