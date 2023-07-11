// arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];

// var a= [67, 56, 78, 90, 60, 90, 40, 99, 80];
// console.log(a[0]);
// console.log(a.push(20));
// console.log(a);
//  for (let index = 0; index < a.length-1; index++) {
//      const element = a[index];
//      console.log(element);
     
//  }
// for (const key of a) {
   
       
//         console.log(key);
   
// }
// var a2=[]
// var a1= [40, 40, 40, 90, 60, 90, 40, 80, 80];
// for (const iterator of a1) {
//     console.log(iterator);
//     if(a2.includes(iterator) == 0){
//         a2.push(iterator)
        
//     }
// }
// console.log(a2);

// a1.forEach((element,index) => {
//      console.log(element);
//      console.log(index);
// });
// console.log(`//==============================================`);
// function f(num){
//     let fact =1;

//     for (let index = num; index >1; index--) {

//         fact=fact*index
        
//     }
//     // console.log(fact);
//     return fact
// }

// console.log(f(5));
// // f(5);
// var a1= [40, 40, 40, 90, 60, 90, 40, 80, 80];
// var a2= [40, 40, 40, 90, 60, 90, 40, 80, 80];
// var a3=a1.concat(a2)
// console.log(a3);
// var a3=a1 + a2
// console.log(a3);
var a1= [40, 40, 40, 90, 60, 90, 40, 80, 80];
a2= a1.slice(3);
console.log(a2);
a2= a1.slice(0,3);
console.log(a2);
console.log(`===============================`);
a2= a1.splice(2,0,100,200);
console.log(a1);
console.log(`===============================`);
a2= a1.splice(0,3,100,200,300);
console.log(a1);
// console.log(`===============================`);
// a2= a1.splice(2);
// console.log(a1);
console.log(`===============================`);
a2= a1.splice(0,5);
console.log(a1);
console.log(a1.includes(50));

