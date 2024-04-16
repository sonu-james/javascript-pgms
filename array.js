weekdays=['mon','tue','wed','thu'];
console.log(weekdays);
//to find total number of array
console.log(weekdays.length);
//print wed from array
console.log(weekdays[2]);
//print thur from array
console.log(weekdays[3]);

//Array methods
//push -to add items to given array
weekdays.push('fri')
console.log(weekdays);
//to add 3 to the given array
weekdays.push(3)
console.log(weekdays);
//remove 3 from array
weekdays.pop(3)
console.log(weekdays);
//add sunday  to given arrray
weekdays.unshift('sun')
console.log(weekdays);

weekdays.unshift('sat')
console.log(weekdays);


weekdays.shift()
console.log(weekdays);