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

console.log("print all employee name ");
// print all employee name 
employee.forEach(emp => {
    console.log(emp[1]);
});
//print developer employee details
console.log('----------------------------------');
console.log('print developer employee details');
developer=employee.filter(emp=>emp[2]=='developer')
console.log(developer);

console.log('----------------------------------');
console.log('print developer employee details');
developer=employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))


console.log('----------------------------------');
console.log('print details of employee Laisha');
// print details of employee Laisha
emp=employee.find(e=>e[1]=='Laisha')
console.log(emp);

console.log('----------------------------------');
console.log('to print employee name whose salary >30000');
//to print employee name whose salary >30000
emp=employee.filter(sal=>sal[4]>30000).forEach(pro=>console.log(pro[1]))
//console.log(emp);

console.log('----------------------------------');
console.log("print the employ name whose have the higest salary");
emp=employee.reduce((n1,n2)=>n1[4]>n2[4]?n1:n2)
console.log(emp[1]);
console.log('----------------------------------');
console.log("print the employ name whose have the least salary");
emp=employee.reduce((n1,n2)=>n1[4]<n2[4]?n1:n2)
console.log(emp[1]);
//total salary expense of company
total=employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);
