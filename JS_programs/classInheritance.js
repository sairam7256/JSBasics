const Person = require('./classConcept')

class Pet extends Person
{
     get location()
      {
        return "BlueCross"
      }

constructor(firstName,lastName)
{
    super (firstName,lastName) // it will inherit from parent class , super keyword is used here

}

}

const Petty = new Pet ("Black", "Dog")
console.log(Petty.fullName())
console.log(Petty.location)