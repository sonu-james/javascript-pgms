//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
// print all employee name 
//print total numbers of employee
//print developer employee details
// print details of employee Laisha
//sort employee based on their salary in descending order
//sort employee based on their experience in ascending order
// print the employ name whose have the higest salary
//print total numbers of employee
console.log("Total number of Employees",employee.length);
console.log('----------------------------------');

console.log("print all employee name ");
// print all employee name 
for(let emp of employee){
    console.log(emp[1]);
}
console.log('----------------------------------');
console.log('print developer employee details');

//print developer employee details
for(let emp of employee)
{
  
    if(emp[2]=='developer')
    console.log(emp);
}
console.log('----------------------------------');
console.log('print details of employee Laisha');
// print details of employee Laisha
for(let emp of employee)
{
    if(emp[1]=='Laisha')
    console.log(emp);
}

console.log('----------------------------------');
console.log('to print employee name whose salary >30000');
//to print employee name whose salary >30000
for(let emp of employee)
{
  
    if(emp[4]>30000)
    console.log(emp[1]);
}

//sort employee based on their salary in descending order
console.log('----------------------------------');
console.log('sort employee based on their salary in descending order');
console.log('----------------------------------');
sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal);




//sort employee based on their experience in ascending order

console.log('----------------------------------');
console.log('sort employee based on their experience in ascending order');
exp=employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
console.log(exp);


// print the employ name whose have the higest salary
console.log('----------------------------------');
console.log("print the employ name whose have the higest salary");
sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal[0][1]);
  
   