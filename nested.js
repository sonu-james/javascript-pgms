a=[ [2,10],[50,25],[2,100],[7,66],[33,9]]

//w ap to find the numbers less than or equal to 10
for(let num of a){
    // console.log(num);
    for(let n of num)
    {
        if(n<=10)
        console.log(n);
    }
}

//w ap to find the even  numbers l from the array
console.log("Even numbers");
a=[ [2,10],[50,25],[2,100],[7,66],[33,9]]
for(let num of a){
    // console.log(num);
    for(let n of num)
    {
        if(n%2==0)
        {
            console.log(n);
        }
        
    }
}
b=a.flat()
console.log(b);

for(let n of b)
{
    if(n%2==0)
    {
        console.log(n);
    }
    
}

a=[ [2,10],[50,25],[2,[13,11],100],[7,[2,55],66],[33,9]]
b=a.flat(2)
for(let n of b)
{
    if(n%2==0)
    {
        console.log(n);
    }
    
}