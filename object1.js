var car ={
    name:'boleno',
    model:'hatch black',
    manufacture:'maruti',
    price:'10lakh'
}
// w a p to print model and manufature name of given car
if(car.name=='boleno')
{
    console.log("Model is",car.model);
    console.log('Manufature is',car.manufacture);
}
//w a p to add varient keyto the car object with  the value has 'manuel'
if('varient' in car){
    console.log('yes');
}
else{
    car['varient']=['manuel']
}
console.log(car);
//w a p to add new value 'automatic  to the key varient
car.varient.push('automatic')
console.log(car);

//w ap to add new key as color with value as red,blue,white
car['color']=['red','blue','white']
console.log(car);


var student={
    id:20,
    name:'sonu',

}
console.log(student);
