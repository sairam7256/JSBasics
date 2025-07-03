module.exports =  class Person
{


     age = 30;
      get location()
      {
        return "Bhopal"
      }
      constructor(firstName,lastName)
      {
        this.fName = firstName;
        this.lname = lastName;
      }

      fullName()
      {
        console.log(this.fName+" "+this.lname);
      }

}

// let Student = new Person("Sai Ram","karankote Nagekar");  //commented this code to use it in other class
// console.log(Student.age);
// console.log (Student.fullName());
