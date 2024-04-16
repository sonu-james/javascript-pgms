n=5
fact=1;
for(i=1;i<=n;i++)
{
    fact=fact*i;
}
console.log(fact);



for(i=0;i<10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}

// w a p to check a given num is prime or not
num=1;
flag=true;
if(num>1){
    for(i=2;i<num;i++)
    {
        if(num%i==0)
        {
            flag=false;
            break;
        }
    } 
}

if(flag==true){
    console.log("prime");

}
else{
    console.log("not prime");
}
//  w a p to print prime no between 2 to 50

    for(i=2;i<50;i++)
    {
        let flag=0;
        for(j=2;j<i;j++){
            if(i%j==0)
            {
                flag=1;
                break;
            }
            
        }
        if(i>0 && flag==0)
        {
            console.log(i);
        }
    }

// if(flag==true){
//     console.log("prime");

// }
// else{
//     console.log("not prime");
// }

// pattern printing
// # # # #
// # # # #
// # # # #
// # # # #

for(row=1;row<5;row++)
{
    str="";
    for(col=1;col<5;col++){
        str+= '#';
    }
    
    console.log(str);
 
}
// pattern2
for(i=1;i<5;i++){
    str="";
    for(j=1;j<5;j++){
        str+=i+' ';
    }
    console.log(str);
}
//pattern3
for(i=1;i<5;i++){
    str="";
    for(j=1;j<5;j++){
        str+=j+' ';
    }
    console.log(str);
}
//pattern 4
for(row=1;row<5;row++)
{
    str="";
    for(col=1;col<=row;col++){
        str+= '*'+' ';
    }
    console.log(str);
 
}

//pattern 5
for(i=1;i<5;i++){
    str="";
    for(j=0;j<i;j++){
        str+=i+' ';
    }
    console.log(str);
}
//pattern 6
for(i=1;i<5;i++){
    str="";
    for(j=1;j<=i;j++){
        str+=j+' ';
    }
    console.log(str);
}

//pattern 6
// ****
// ***
// **
// *
console.log("pattern 6");
for(row=4;row>=1;row--)
{
    str=" ";
    for(col=1;col<=row;col++){
        str+= '*'+' ';
    }
    console.log(str);
 
}
//pattern 6
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

for(row=1;row<5;row++)
{
    str=" ";
    for(col=1;col<=row;col++){
        str+= '*'+'  ';
    }
    console.log(str);
}

    for(row=4;row>=1;row--)
    {
    str=" ";
    for(col=1;col<=row;col++){
        str+= '*'+' ';
    }
    console.log(str);
    
    }
// pattern 7 triangle
//      *
//     * *
//    * * *
//    * * * *
for(row=1;row<5;row++)
{
    str=" ";
    for(space=4;space>row;space--)
    {
        str+= ' ';
    }
    for(col=1;col<=row;col++){
        str+= '*'+'  ';
    }
   
    console.log(str);
}

//pattern 8
//             *
//         *       *
//     *              *
// *   *   *   *   *   *   *


for(row=1;row<5;row++)
{
    str=" ";
    for(col=1;col<=7;col++){
        if(col+row==5||col-row==3||row==4){
            str+= '*';
        }
        else
        {
            str+= ' ';
        }   
    }  
    console.log(str);
}
//pattern 9

//  *****
//  *   *
//  *   *
//  *   *
//  *****

for(row=1;row<=5;row++)
{
    str=" ";
    for(col=1;col<=5;col++){
        if(col==5 ||col==1||row==1 || row==5){
            str+= '*';
        }
        else
        {
            str+= ' ';
        }   
    }  
    console.log(str);
}
//pattern 10
// 1
// 0 1
// 1 0 1
// 0 1 0 1

console.log("pattern 10");

for(row=1;row<=4;row++)
{
    str="";
    for(col=1;col<=row;col++){
        if((row+col)%2==0){
            str+= '1'+' ';
        }
        else
        {
            str+= '0'+' ';
        }   
    }  
    console.log(str);
}

// pattern 11 triangle
//       *
//      * *
//     * * *
//    * * * *
//    * * * *
//     * * *
//      * *
//       *

for(row=1;row<5;row++)
{
    str=" ";
    for(space=4;space>row;space--)
    {
        str+= ' ';
    }
    for(col=1;col<=row;col++){
        str+= '*'+'  ';
    }
   
    console.log(str);
}

for(row=4;row>0;row--)
{
    str=" ";
    for(space=4;space>row;space--)
    {
        str+= ' ';
    }
    for(col=1;col<=row;col++){
        str+= '*'+'  ';
    }
   
    console.log(str);
}