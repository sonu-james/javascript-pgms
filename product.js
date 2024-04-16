//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('-----display all product name--------');
products.forEach(item => {
    console.log(item[1]);
    
});

//2. display product whose price < Rs.50
console.log('-----display product whose price < Rs.50--------');
item=products.filter(price=>price[2]<50).forEach(pro=>console.log(pro[1]))

//3. print price of oreo
console.log('----- print price of oreo--------');
oreo=products.find(item=>item[1]='oreo')
console.log(oreo[2]);

//4. print costly product name
console.log('----- print costly product name--------');
costlyprod =products.reduce((item1,item2)=>item1>item2?item1:item2)
console.log(costlyprod[1]); 

//5. display out of stock product
console.log('----- display out of stock product--------');
outOfStockItem=products.filter(stock=>stock[3]==0).forEach(pro=>console.log(pro[1]))

//6. sort products based on stock in decsending order
console.log('----------------------------------');
console.log('sort products based on stock in decsending order');
console.log('----------------------------------');
stock=products.sort((item1,item2)=>item2[3]-item1[3])
console.log(stock);

//7. print product having maximum available stock
console.log('----- print product having maximum available stock--------');
maxStockItem=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
console.log(maxStockItem[1]);

//8. is there any product can be purchased by Rs. 10
console.log('----- is there any product can be purchased by Rs. 10--------');
item=products.some(price=>price[2]<=10)
console.log(item?'yes':'no');

//9. Is there any product price in the range of 10 to 30
console.log('----- Is there any product price in the range of 10 to 30--------');
item=products.some(price=>price[2]>=10 && price[2]<=30)
console.log(item?'yes':'no');
//10. print all products in the range of 10 to 30
console.log('-----  print all products in the range of 10 to 30--------');
item=products.filter(price=>price[2]>=10 && price[2]<=30).forEach(pro=>console.log(pro[1]))
// console.log(item[1]);