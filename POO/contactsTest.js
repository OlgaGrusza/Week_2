let myLib = require("./claseContact") 
let myLib2 = require("./clasePerson")


let personas = new myLib.Contacts()

let persona1 = new myLib2.Personas(189, 80)
let persona2 = new myLib2.Personas(170,74)
let persona3 = new myLib2.Personas(150,50)

personas.contacts.push(persona1);
personas.contacts.push(persona2);
personas.contacts.push(persona3);
personas.printPersons()
