arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`Given Array is:-${arrayNumbers}`);
console.log(`-------------------------------------------------------------`);
console.log(`1.Log the array element with it's index using forEach() with arrow function`);
arrayNumbers.forEach( (element ,index) => {
     console.log( ` index ${index} , Element:-${element}`);
});

console.log(`-------------------------------------------------------------`);
console.log(`2.Find the positive numbers and log on console`);

 let newarr=[]
arrayNumbers.forEach( (element) => {
     if(element >= 0)
     
      newarr.push(element)
  
} );
console.log(` Positive number  :- [${newarr}]`);


console.log(`-------------------------------------------------------------`);
console.log(`3.Find the negative numbers, and log on console`);

let newarr1=[]
arrayNumbers.forEach( (element) => {
    if(element < 0)
    
     newarr1.push(element)
 
} );
// console.log(` Negative number   :- [${newarr1}]`);
newarr1.forEach (element => console.log(element)); 

console.log(`-------------------------------------------------------------`);
console.log(`4.Find the even numbers and log on console `);

let newarr2=[]
arrayNumbers.forEach( (element) => {
    if(element%2 ==  0)
    
     newarr2.push(element)
 
} );
console.log(` Even number   :- [${newarr2}]`);

console.log(`-------------------------------------------------------------`);
console.log(`5.Find the sum of all elements from arrayNumbers `);
var result=0;

arrayNumbers.forEach( (element) => {
     result=result+element
    
    
} );
console.log(` Result of all Element   :- [${result}]`);

console.log(`-------------------------------------------------------------`);
console.log(`6. Log the only even indexed array value on console `);

let newarr3=[]
arrayNumbers.forEach( (element,index) => {
    if(index%2 ==  0)
    
     newarr3.push(element)
 
} );
console.log(` Even number   :- [${newarr3}]`);


 