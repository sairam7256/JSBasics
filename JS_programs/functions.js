//function is a block of code 
function add(a,b)
{
    return a+b
}
let sum = add(3,4)
console.log(sum)

// functions which doesnot have name => anonymous functions
let sumOfIntergers = function(c,d)
{
    return c+d

}

let sumOfNumbers = (c,d)=>c+d
console.log(sumOfNumbers(10,12))