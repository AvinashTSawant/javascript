console.log( `------------------------------------------------------------------------`,)
const arrayNums = [20, 3, 4, 56, 90, 400, 49]
console.log(`Given array is :- [${arrayNums}]`)
let arrayClone = arrayNums
console.log(`----------------------shallow clone---------------------------------------`)
console.log(`1.Update cloned array with values→ 55, 66 using push`)
arrayClone.push(55, 60)
console.log(`1.A .Original array  After add element 55,60:- [${arrayNums}]`)
console.log(`1.B .cloned array After add element 55,60:- [${arrayNums}]`)
console.log(`------------------------------ Deep clone-----------------------`,)
console.log(`2. update arrayNums with values 10,25 at last position `)

let arrynew = [...arrayNums]
arrayNums.push(10, 25)
console.log(`2.A .Original array After add element 10,25 :- [${arrayNums}]`)
console.log(`2.B .cloned array After add element 10,25 :- [${arrynew}]`)

console.log( `------------------------------ marge ---------------------------`,)
console.log(`3. marge arrayEven and  arrayNums using spard operator `)
arrayEven = [2, 30, 14, 8]
margearray = [...arrayEven, arrayNums]
console.log(`merge array is :-[${margearray}]`)

console.log( `--------------------------------------------------------------------`,)
console.log(`4.Create the employee_info object  `)

const employee_info = {
  emp_id: 27,
  emp_name: 'John Doe',
  salary: {
    july_month: '40,0000 INR',
    aug_month: '50,0000 INR',
    jun_month: '65,0000 INR',
  },
  address: {
    locality: {
      colony: 'OM Vrindavan Society',
      street: 'Kanch Pokli, 431202',
    },
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
  },
  mobiles: ['+91 8600 3456 88', '1800- 4567 32', '+91- 9096 5678 77'],
}
console.log( `--------------------------------------------------------------------`,)
console.log(`5.Log the employee details `)
var addcolony =employee_info.address.locality.colony
var addstreet =employee_info.address.locality.street
// console.log(`employee colony is  :- ${addcolony}`);
// console.log(`employee street is  :- ${addstreet}`);

var addcity =employee_info.address.city
var addstate =employee_info.address.state
var addcountry =employee_info.address.country

// console.log(`employee city is  :- ${addcity}`);
// console.log(`employee state  is  :- ${addstate}`);
// console.log(`employee country is  :- ${addcountry}`);
console.log(`-------------------------------------------------------------`)
console.log(` 5.A Address :- ${addcolony},${addstreet},${addcity},${addstate},${addcountry}`);

console.log(`-------------------------------------------------------------`)
console.log(` 5.B Mobile no of employee is;- ${employee_info.mobiles}`);
console.log( `--------------------------------------------------------------------`,)
console.log(`6.deep copy using JSON.stringify() `)


const deepClonedemployee_info = JSON.parse(JSON.stringify(employee_info));
deepClonedemployee_info.salary.july_month='80,0000 INR';

employee_info.address.country= 'United Kingdom';


console.log(`-----update 'july_month' salary to 80K in  cloned object-----`);
console.log(`6.c Original object salary ; ${employee_info.salary.july_month} `);

console.log(`6.c cloned  object salary :- ${deepClonedemployee_info.salary.july_month}`);


console.log(`----- up date country= 'United Kingdom' in original object-----`);


console.log(`6.c Original object country ; ${employee_info.address.country} `);

console.log(`6.c cloned  object country :- ${deepClonedemployee_info.address.country}`);
