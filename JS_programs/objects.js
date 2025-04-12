//object is a collection of properties
let person = 
{
    firstName : 'David' ,
    lastName : 'Warner',
    age : 25 ,
    fullName : function()
    {
        console.log(this.firstName+this.lastName)  // this keyword is to access the current object
    }
}
console.log (person.fullName())

console.log (person.firstName) //access object through '.'
console.log(person['firstName']) // access object through array
person.lastName = 'Paul'  // can re-assign a property of an object
console.log(person.lastName)
person.gender ='male' // can add a property to an object
console.log(person)
delete person.gender // deleting a property of an object
console.log(person)
console.log ('mobile' in person) // to check existence of property in an object
// print all the values of an object 
for ( let key in person)
{
    console.log(person[key])

}