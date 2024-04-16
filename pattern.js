// *****
//  *  *
//   *
// *   *
// ***** 

for(row=1;row<=5;row++)
{
    str=" ";
    for(col=1;col<=5;col++){
        if(col==row ||col+row==6||row==1 || row==5){
            str+='*'+' ';
        }
        else
        {
            str+= ' ';
        }   
    }  
    console.log(str);
}
//                11
//            12 13 14
//         15 16 17 18 19
//     20 21 22 23 24 25 26 
// 27 28 29 30 31 32 33 34 35


num=11;
for(row=1;row<5;row++)
{
    str=" ";
    for(space=1;space<=5-row;space++)
    {
        str+= ' ';
    }
    for(col=1;col<=2*row-1;col++){
        str+= num+'  ';
        num++;
    }
   
    console.log(str);
}