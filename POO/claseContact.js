
let mylib = require("./clasePerson");
class Contacts
{
    constructor ()
    {
        this.contacts = [];
    }
    
      printPersons ()
    {
        for (let i = 0 ; i < this.contacts.length ; i++)
        {
            this.contacts[i].printAll();
        }
    }
}

// let persona = new Contacts()

// let persona1 = new mylib.Persona()

// let persona2 = new mylib.Person()

// let persona3 = new mylib.Person()
// persona.contacts.push(persona1);
// persona.contacts.push(persona2);
// persona.contacts.push(persona3);


// persona.printPersons()
module.exports ={Contacts}