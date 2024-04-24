array=[10,20,30,40,30,20,50,30,60,70,10,40,80]
//aw ap to find the number count from the given array and display as an object
obj={ }
for(num in array){
    if(num in obj)
    {
        obj[num]+=1
    }
    else{
        obj[num]=1
    }
}
console.log(obj);

//array method
nc={}
array.forEach(item => item in nc?nc[item]+=1:nc[item]=1) 
console.log(nc);

pattern ='ABCBBCAACB'
//W A p to find the first recursive letter -B
data=pattern.split('')
console.log(data);
obj1={}
for(letter of data){
    if(letter in obj1){
        console.log('first recursive letter is ',letter);
        break
    }
    else{
        obj1[letter]=1
    }
   
}
