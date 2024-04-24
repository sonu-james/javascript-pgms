arr=['mon','tue','wed','thu']
console.log(arr);
console.log(arr[1]);
console.log('Total elements',arr.length);

arr.push('fri')
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('sunday')
console.log(arr);
arr.shift()
console.log(arr)
a=[10,11,12,13,14,15]
ar=a.sort((n1,n2)=>n2-n1)
console.log(ar);
sq=a.map(num=>num**2)
console.log(sq);

a=[10,11,12,13,14,15]
for(let i of a){
   
    if(i>=13){
       
        i--
        
    }
    else if(i<=13)
    {
        i++
    }
    else{
        console.log("no increment");
    }
}
console.log(a);

for(let num of a){
    if(num<=13){
        num++
    }
    else if(num>=13){
        num--
    }
    else{
        console.log("no increment");
    }

}
console.log(a);