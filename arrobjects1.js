products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
for(data of products)
{
    console.log(data.pName);
}
products.forEach(pro => {
    console.log(pro.pName); 
});
console.log("---------------------");

//2. print all mobile details whose display is lcd
for(data of products)
{
    if(data.display=='lcd')
    {
        console.log(data);
    }
    
}
console.log("---------------------");
products.filter(item=>item.display=='lcd').forEach(pro=>{
    console.log(pro.pName);
})
console.log("---------------------");
//3. print 5g mobile phone name
for(data of products)
{
    if(data.band=='5g')
    {
        console.log(data.pName);
    }

}
console.log("---------------------");

products.filter(pro=>pro.band=='5g').forEach(item=>{console.log(item.pName);})
console.log("---------------------");
//4. sort mobile based on price
products.sort((n1,n2)=>n1.price-n2.price).forEach(item=>{console.log(item.pName);})

//5. print costly mobile
console.log("---------------------");
maxPrice=0
for(data of products)
{
    if(data.price>maxPrice)
    {
    maxPrice=data.price    
    }
   
}
console.log(maxPrice);
console.log("---------------------");
costly=products.reduce((pro1,pro2)=>pro1.price>pro2.price?pro1:pro2)
console.log(costly.pName);

//6. print low cost mobile
console.log("---------------------");
// minPrice=0
// for(data of products)
// {
//     if(data.price>minPrice)
//     {
//     minPrice=data.price    
//     } 
// }
// console.log(minPrice);
minimum=products.reduce((pro1,pro2)=>pro1.price<pro2.price?pro1:pro2)
console.log(minimum.pName);