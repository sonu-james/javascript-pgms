//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log("-------------------");
console.log('district having Highest +ve case ');
highest=covid_data.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(highest[1]);
console.log("-------------------");
//2. district having Highest 1st dose vaccine
console.log(' district having Highest 1st dose vaccine ');
highest=covid_data.reduce((n1,n2)=>n1[5]>n2[5]?n1:n2)
console.log(highest[1]);
console.log(' district having lowest death rate ');
//3. district having lowest death rate
lowest=covid_data.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)
console.log(lowest[1]);
console.log('sort data with +ve case in descending order');
//4. sort data with +ve case in descending order
sortdata=covid_data.sort((n1,n2)=>n2[2]-n1[2]).forEach(pro =>console.log(pro[1]));

//5. is district with +ve cases > 15000
console.log('is district with +ve cases > 15000');
dist=covid_data.some(num=>num[2]>=15000)
console.log(dist?'yes':'no');

//6. sort data with 1st dose vaccine ascending order
console.log('sort data with 1st dose vaccine ascending order');
sortdata=covid_data.sort((n1,n2)=>n1[5]-n2[5]).forEach(pro =>console.log(pro[1]));
//7. Print Thrissur details
console.log('Print Thrissur details');
dtname=covid_data.find(data=>data[1]='Thrissur')
console.log(dtname);
//8. Print total number of positive cases
console.log("Print total number of positive cases");
tnpcase=covid_data.map(pc=>pc[2]).reduce((n1,n2)=>n1+n2)
console.log(tnpcase);
//9. Print total number of curred cases
console.log('Print total number of curred cases');
curred=covid_data.map(cc=>cc[4]).reduce((n1,n2)=>n1+n2)
console.log(curred);
//10. Print curred cases in Idukki
console.log('Print curred cases in Idukki');
details=covid_data.find(data=>data[1]='Idukki')
console.log(details[4]);