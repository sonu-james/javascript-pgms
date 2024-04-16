num=121;
rev=0;
num1=num;
while(num>0)
{
    rem=num%10;
    rev=(rev*10)+rem;
    num=Math.floor(num/10);

}
console.log(rev);
if(num1 == rev){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}