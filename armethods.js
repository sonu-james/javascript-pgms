a=[10,11,12,13,14,15]
//w ap to  find the square of each element in the given array
sq=a.map(num=>num**2)
console.log(sq);

for(let i of a){
    sq=i**2
    console.log(sq);
}
//forEach()
a.forEach(num => {
   console.log(num**2); 
});

//w a p to find the cube of a given  number using map
console.log("-------cube-------------");
cube=a.map(num=>num**3)
console.log(cube);
console.log("--------a new array with number <=13 increment by 1 and number>13  decrement by 1------------");
//w ap to create a new array with number <=13 increment by 1 and number>13  decrement by 1
//o/p [11,12,13,12,13,14]
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

console.log("-------reduce Method-------------");
//reduce method
a=[10,11,2,7,3,6,1]
//w ap to find the highest of the given array
highest=a.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);
//w a p to find the lowest of the given array
lowest=a.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
//w a p to find the sum of the given array
sum=a.reduce((n1,n2)=>n1+n2)
console.log(sum);
console.log("-------filter Method-------------");
//filter() method
a=[10,12,15,13,25,2,3,5]
// w a p to print all even numbers from a given array
even=a.filter((n1=>n1%2==0))
console.log(even);
//w a p to print all numbers >13 from the given array
num=a.filter((n1=>n1>13))
console.log(num);
//w ap to check is there any number number>13 exist in the given number
console.log("-------some  Method returns true or false-------------");
c=a.some(num=>num>13)
console.log(c?'yes':'no');

console.log("-------find  Method returns only first value-------------");
even=a.find((n1=>n1%2==0))
console.log(even);

//find mango from given array
fruits=['apple','pineapple','mango','orange','kiwi']
mango=fruits.find(f=>f=='mango')
console.log(mango);
//is mango present in the array
console.log("-------is mango present in the array  includes method-------------");
b=fruits.includes('mango')
console.log(b?'yes':'no');
console.log("-------indexOf method-------------");
//to find the index of mango
console.log("-------indexof mango-------------");
i=fruits.indexOf('mango')
console.log(i);

console.log("-------indexof kiwi-------------");
i=fruits.indexOf('kiwi')
console.log(i);

console.log("-------splice method-------------");
a=['max','miller','mini','manu']
console.log(a);
console.log("-------remove mini from the given array------------");
//remove mini from the given array
a.splice(2,1);
console.log(a);
console.log("-------remove manu from the given array------------");
//remove manu from the given array
a.splice(2,2);
console.log(a);
console.log("-------add maxwell asthe 3rd item in the given array------------");
//add maxwell asthe 3rd item in the given array
a.splice(2,0,'maxwell');
console.log(a);
console.log("-------remove miller and add ken at the same osition as that of a miller------------");
//remove miller and add ken at the same osition as that of a miller
a.splice(1,1,"ken");
console.log(a);

//slice
console.log("-------slice method-------------");
a=[11,12,13,14,15,16,17,18,19,20]
console.log(a);
//create an array consisting first 3 number from the given
console.log('--------------------------------');
b=a.slice(0,3)
console.log(b);
//create a new array having the numbers 14,15,16,17
console.log('-------------------------------');
c=a.slice(3,7)
console.log(c);
console.log('-------------------------------');
//create a new array having the number 18,19,20
d=a.slice(7)
console.log(d);

d=a.slice(-3)
console.log(d);