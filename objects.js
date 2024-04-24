arr=[1000,'Neel','developer','kochi',25000,3],
console.log(arr);
employee={
    id:1000,
    name:'neil',
    designation:'developer',
    age:35,


}
//different methods to access values stored in objects
console.log(employee);
console.log(arr[2]);
console.log(employee['designation']);
console.log(typeof(employee));
console.log(employee.name);

//how to acess key from a object
//in method is used
console.log('--------------------');
for(let key in employee){
    console.log(key);
}
console.log('--------------------');
 //w a p to check whether emplocation key is present in the given object

    

if('emplocation' in employee){
    console.log('present');
}
    else{
console.log('not present');
    }

    console.log('emplocation'in employee?'present':'not present');
    console.log('--------------------');
    //how to add a key value pair in to an object

//add experience to the given object employee
employee['expeience']=3
console.log(employee);
console.log('--------------------');

//check gender key in the given objects if present print 'yes' else add gender key to the given object with value as male
if('gender' in employee){
    console.log('yes');
}
else{
    employee['gender']='male'
}
console.log(employee);
console.log('--------------------');
console.log('gender' in employee?'yes':( employee['gender']='male'));
console.log('--------------------');
//ho w to update a value  in an object
employee.age+=5
console.log(employee);

//delete a key from an object
delete employee.age
console.log(employee);