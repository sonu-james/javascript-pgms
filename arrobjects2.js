accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
   console.log('total number of accounts',accounts.length);
   console.log('-----------------------------------------');
//2. print account number whose ac_type is savings
    accounts.filter(data=>data.ac_type=='savings').forEach(pro => {
        console.log(pro.acno);
    });
//3.print the balance of accnount number 1000
 console.log('-----------------------------------------');
 console.log(accounts.find(data=>data.acno==1000).balance);
//4. print all gpay transactions
console.log('-----------------------------------------');
 trans=accounts.map(data=>data.transaction).flat().filter(item=>item.mode=='gpay').forEach(pro=>{console.log(pro);})
    
//5. print all transaction whose amount > 5000
console.log('-----------------------------------------');
trans=accounts.map(data=>data.transaction).flat().filter(item=>item.amount>5000).forEach(pro=>{console.log(pro);})
//6. print credit transaction of account 1002
console.log('-------print credit transaction of account 1002----------------------------------');
credit=accounts.map(data=>data.transaction).flat().filter(item=>item.to==1002)
console.log(credit);
//7. print debit transaction of account 1002
console.log('----------print debit transaction of account 1002-------------------------------');
debit=accounts.find(item=>item.acno==1002).transaction
console.log(debit);
//8. print transaction history of 1002
console.log('-------------print transaction history of 1002 as object----------------------------');

history={}
history['credit']=credit
history['debit']=debit
console.log(history);

//...spred operator
console.log('-------------print transaction history of 1002 as array----------------------------');

transHistory=[...credit,...debit]
console.log(transHistory);

//9. print highest balance account details
console.log('-----------------------------------------');
 highest=accounts.reduce((n1,n2)=>n1.balance >n2.balance?n1:n2)
 console.log(highest);