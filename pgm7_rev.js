// w a p to find reverse of a given number
num=123;
rev=0;
console.log("the given number is",num);
while(num>0){
    rem=num%10;
    rev=rem+(rev*10);
    num=Math.floor(num/10);
}
console.log(rev);