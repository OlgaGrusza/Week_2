class Personas 
{
    // Constructor
constructor(altura,peso)
 { this.colorDePelo ="rubio";
  this.altura = altura;
  this.peso   =   peso;
  this.sexo;
  this.edad;
  this.anyoDeNacimiento = 1982;
  this.hobbies= ["bailar","leer","jugar"];
 }

  //Metodo
 calcImc()
  { 
        let resultado = (this.peso / this.altura * this.altura) * 10000 ;
        return resultado;
  }

  calcEdad(valor)
  {
    let edad = valor - this.anyoDeNacimiento;
    return edad;
  }
  printAll()
    {
      for (let propiedad in this)
     {
         let resultado = propiedad + " - " + this[propiedad];
         console.log(resultado);
     }
    }
   printHobbies ()
   {
    for (let i =  0 ; i < this.hobbies.length ; i++)
    {
        console.log(this.hobbies[i]);
    }
   }

}
// ///Main
// let valor = new Personas(160,65);
// console.log(valor);
// console.log(valor.calcIMC());
// console.log(valor.edad(2022));
// valor.printAll()
// valor.printHobbies()

module.exports= {Personas}





