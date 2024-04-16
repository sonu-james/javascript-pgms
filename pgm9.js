expense =[12000,24000,10000,54000,40000]
//total expense
let sum=0;
for(i in expense){
     sum=sum+expense[i];
}
console.log('Total expense is',sum);
//highest expense
let max;
for (i=0;i<expense.length;i++){
    if(expense[i]>=expense[i+1])
    {
            max=expense[i];
    }
}
console.log('Maxmimum Expense',max);

//minimum expense
let min;
for (i=0;i<expense.length;i++){
    if(expense[i]<=expense[i+1])
    {
            min=expense[i];
    }
}
console.log('Minimum Expense',min);