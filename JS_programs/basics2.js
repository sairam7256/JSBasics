
const flag=true

if (!flag)
{
    console.log("Condition satisfied")
}
else
{
    console.log(flag)
    console.log("Condition not satisfied")
}

i=0
while(i>5)
{
   i++
    console.log(i)
}

do
{
    i++
}
while (i>5);
    console.log(i)


    for (let k=3;k<=5;k++)
{
    console.log(k)
}

console.log("***************************")

// getting multiples of 2 upto value 10
for (let m=0;m<=10;m++)
{
    if (m%2==0)
        console.log(m)
}

console.log("***************************")

// getting multiples of 5 upto value 10
for (let n=0;n<=10;n++)
{
    if (n%5==0)
        console.log(n)
}
console.log("***************************")
// getting common multiples of 2 & 5 upto value 10
for (let p=0;p<=10;p++)
    {
        if (p%5==0 && p%2===0)
            console.log(p)
    }
    console.log("***************************")
// getting common multiples ( first 2) of 2 & 5 upto value 40
let t=0
for (let x=1;x<=40;x++)
    {
        if (x%5==0 && x%2===0){
            t++
            console.log(x)
            if (t==2)
                break
        }
    }
    let y = 6
    switch(y)
    {
        case 1: console.log("y is one")
        break
        case 2: console.log("y is two")
        break
        case 0: console.log("y is zero")
        break
        case 5: console.log("y is five")
        break
        default : console.log ("input is invalid")

    }