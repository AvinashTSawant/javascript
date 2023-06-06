 arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
 console.log(`Given Array is:-${arrayNumbers}`);
// console.log(`-------------------------------------------------------------`);
// console.log(`1.Add 10 into each element and log new array result on console`);
 
//  let newarr=[]
// arrayNumbers.forEach( (element) => {
    
//       var add = element +10;
//       newarr.push(add)
  
// } );
// console.log(` New  updated array :- [${newarr}]`);

// console.log(`-------------------------------------------------------------`);
// console.log(`2.Square the each array element and log on console`);

//  let newarr1=[]
// arrayNumbers.forEach( (element) => {
    
//       var add = element *element;
//       newarr1.push(add)
  
// } );
// console.log(` New  updated array :- [${newarr1}]`);


// console.log(`-------------------------------------------------------------`);
// console.log(`3. Add the index value into its corresponding each array element and log new array result on console`);
// let newarr2=[]
// arrayNumbers.forEach( (element,index) => {
    
//       var add = element +index ;
//       newarr2.push(add)
  
// } );
// console.log(` New  updated array :- [${newarr2}]`);


//*********************************** using Map ********************************************* */
arrayNumbers = [ 20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19 ];
console.log(`Given Array is:-${arrayNumbers}`);
console.log(`-------------------------------------------------------------`);
console.log(`1.Add 10 into each element and log new array result on console`);
 

 const newarr = arrayNumbers.map( (element) => {
    
      var add = element +10;
   return add
  
} );
console.log(` New  updated array :- [${newarr}]`);

console.log(`-------------------------------------------------------------`);
console.log(`2.Square the each array element and log on console`);

const newarr1 = arrayNumbers.map( (element) => {
    
    var add = element * element ;
 return add
  
} );
console.log(` New  updated array :- [${newarr1}]`);


console.log(`-------------------------------------------------------------`);
console.log(`3. Add the index value into its corresponding each array element and log new array result on console`);


    const newarr2 = arrayNumbers.map( (element,index) => {
    
        var add = element + index;
     return add
  
} );
console.log(` New  updated array :- [${newarr2}]`);