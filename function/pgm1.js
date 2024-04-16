//sum of 2 numbers

function add(n1,n2){
   const  sum=n1+n2;
   console.log(`sum of ${n1} and ${n2} is ${sum}`);  
}

add(4,6);
 //w ap to find given a number is positive or negative
 function positive_negative(num){
   if(num>0){
      console.log("positive");
   
   }
   else if(num<0){
      console.log("negative");
   }
   else{
    
      console.log("num is zero");
   }
 }
 positive_negative(0);

 function p_n(num){
  return num>0?'positive':'negative';
 }
 positive_negative(8);

 //to find cube of given number

 function cube(n){
   return n**3;
 }
console.log(cube(3));
 

 //w a p to find given number is odd or even

 function odd_even(n){
  return n%2==0 ? 'even':'odd';
 }
 console.log(odd_even(4));
 

 //arrow function 
 //sum of 3 numbers using arrow fn

const add1 = (n1,n2,n3)=>n1+n2+n3
console.log(add1(1,2,3));

//w ap to find square of a given number

const sq=(n)=>n**2
console.log(sq(3));


//call back function
function greet(name,callback){
   console.log('hai',name);
   callback;
}

function callme(){
   console.log('i am a callback function');
}
greet('sonu',callme());

setTimeout(()=>{
   console.log(('hello'));
},5000)