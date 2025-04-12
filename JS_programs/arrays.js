var marks = Array(5) // declaring variable for array
var marks=[10,20,30,40,50]// providing values for array
console.log(marks)
console.log("******************")
marks[4] = 60 // assigning value to index positon
console.log(marks)
console.log("******************")
marks.push(80) // adding element at end
console.log(marks)
console.log("******************")
marks.unshift(100) // adding element at begining
console.log(marks)
console.log("******************")
marks.pop()  //deleting element at the end
console.log(marks)
console.log("******************")
console.log(marks.includes(150))  // to check if the element exists in array
console.log(marks.indexOf(30))  // to check the index position of provided element
submarks = marks.slice(2,5) // to get elements from main array
console.log(submarks)
console.log("******************")
for (let i=0;i<marks.length;i++)    // for loop for array
{
    console.log(marks[i])
}

//  to add elememts of array
console.log("******************")
var sum=0
for (let i=0;i<marks.length;i++)    // for loop for array
{
    sum=sum + marks[i]
}
console.log(sum)
console.log("******************")
//reduce filter map
let total= marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)
console.log("******************")
var scores=[12,13,14,15,16]
let newFilterEvenScores= scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//map
console.log("*********map***********")
let mappedArray= newFilterEvenScores.map(score=>score*3) // [12,14,16]*3
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum,score)=>sum+score)
console.log(totalVal)

console.log("*********latest***********")
 
var latestArray=[20,21,22,23,24,25]
let newArrayList= latestArray.filter(score=>score%2==0).map(score=>score*2).reduce((sum,mark)=>sum+mark,0)
console.log(newArrayList)

//sorting a string and reversing it
let sortString = ["ball","dog","table","van","fan"]
console.log(sortString.sort())
console.log (sortString.reverse())

//sorting a number
let sortNumber = [56,02,24,32,15]
console.log(sortNumber.sort((a,b)=>b-a))
