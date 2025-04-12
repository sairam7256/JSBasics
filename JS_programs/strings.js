let day ='thursday '
console.log(day.length) // prints the length of string
let subDay = day.slice(0,4) // it will cut the string based on index values
console.log (subDay)
console.log (day[3]) // prints the index value from string
let splitDay = day.split("s") //it will split the day based on the value in string and stores in an array
console.log(splitDay[1].length) // 'day ' will be stored in 1st index 
console.log(splitDay[1].trim().length) // trim will remove white spaces

let today ='23'
let nextDay = '24'
let diff = parseInt(nextDay) - parseInt(today) // parseInt is to convert string to integer
console.log(diff)
diff.toString() //toString is used to convert integer value to string

let newQuote = day+ "is a holiday day" // '+' is used to concatenate the strings
console.log(newQuote)
let val= newQuote.indexOf("day",7) //it checks the index place of the start of the string , after comma , if we apply value , it gives the value from where we can start to search
console.log(val)

count = 0 
let value = newQuote.indexOf("day")
while (value!==-1)
{
    count++
    value = newQuote.indexOf("day",value+1)

}
console.log(count)