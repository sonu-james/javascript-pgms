//w a p to check given number is mobile number or not(10 digit)
//data that will be coming to backend as string
num='9876452356'
console.log(num.length==10?'its a mobile number':'not a mobile number');
//w ap to  check given mail id is gmail.com (@gmail.com)
mail='sonupjames@gmail.com'
console.log(mail.endsWith('@gmail.com')?'its a mail id':'not a mail id');
//w a p to check a word starts with the letter q
word='query'
console.log(word.startsWith('q')||word.startsWith('Q')?'the word starts with q':'no');

sentance='good morning All'

//w ap to print vowels in the given sentance
str=sentance.split('')
console.log(str);
str2=str.filter(vowels=>vowels=='a'|| vowels=='e'||vowels=='i'||vowels=='o'||vowels=='u'||vowels=='A'||vowels=='E'||vowels=='I'||vowels=='O'||vowels=='U')
console.log(str2);

vowels=['a','e','i','o','u','A','E','I','O','U']
character=sentance.split('')
for(let char of character){
    if(vowels.includes(char)){
        console.log(char);
    }
}


character.filter(char=>vowels.includes(char)).forEach(pro=>{console.log(pro);});
str='hello'
console.log(str[3]);
console.log(str[4]);

str='luminar'
str1='SONU   '
console.log(str.startsWith('Lum'));
console.log(str.endsWith('nar'));
console.log(str.toUpperCase());
console.log(str1.toLowerCase());
console.log(str.trim());
console.log(str1.trim());
console.log(str.substring(2,7));
console.log(str.slice(-5));
sentance='i jointed microsoft,microsoft office is farfrom the home town'
console.log(sentance.replaceAll('microsoft','google'));
