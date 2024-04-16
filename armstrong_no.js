num=153;
temp=num;
sum=0;
while(num>0){
    rem=num%10;
    sum+=rem*rem*rem;
    num=Math.floor(num/10);
}
console.log(sum);
if(temp==sum)
console.log("Arm");
else{
    console.log("not arm");
}

//Armstrong number between 8 to 500
console.log("Atmstrong no between 8 to 500");
for(i=8;i<=500;i++){
    sum=0;
    temp=i;
    while(temp>0)
    {
        rem=temp%10;
        sum+=rem*rem*rem;
        temp=Math.floor(temp/10);  
    }
    if(i==sum)
    {
        console.log(sum);
    }
   
}
