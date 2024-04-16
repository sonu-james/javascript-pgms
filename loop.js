i=1;
while(i<=3){
    console.log("javascript");
    i++;
   
}
// w.a p to print number 1 to 5,10 to 1

i=1;
while(i<=5)
{
    console.log(i);
    i++;
}
// w.a p to print number 10 to 1
i=10;
while(i>0)
{
    console.log(i);
    i--;
}
// w a p to print all even number bw 1 to 50
console.log("even numbers btw 1 to 50");
i=2;
while(i<=50)
{
    if(i%2==0)
    {
        console.log(i);
    }
    i++;
}
//w ap to find the sum of 1 to 10
console.log("to find sum of first 10 natural numbers");
i=1;
sum=0;
while(i<=10)
{
    sum=sum+i;
    i++;
}
console.log("sum of first 10 natural num is",sum);

console.log("pattern");
i=1;
n=3;
str="";
mul=1;
while(i<=n)
{ 
    str=str+i;
    i++;
}
    mul=n*str;
    console.log(mul);

    console.log("pattern2");
i=1;
n=3;
str="";
sum=0;
while(i<=n)
{ 
    str=str+n;
    i++;
}
    sum=n+ Number(str);
    console.log(sum);