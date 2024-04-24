//w a p to check whether the given number is palindrome or not
str='malayalam'
str=str;
start=0
end=str.length-1
isPalindrome=true
while(str<end)
{
    if(str[str]!=str[end]){
        isPalindrome=false
    }
    start++;
    end--;

}
console.log(isPalindrome?'palindrome':'notpalindrome');

pal=''
str1='abc'
for(i=str1.length-1;i>=0;i--){
    pal+=str1[i];

}console.log(str1==pal?'palindrome':'not palindrome');