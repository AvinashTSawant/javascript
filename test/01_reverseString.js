// let a ="Avinash"
// let b= a.length-1;
// var res =""
// while(b >= 0){
//     // console.log(a.charAt(b));
//     res= res+a.charAt(b)
//     b--;
// }
// console.log(res);

// for (let index = 0; index < a.length-1; index++) {
//     const element = a[index];
//     console.log(element);
// }

// for (let index =  a.length-1; index >= 0; index--) {
//     const element = a[index];
//     console.log(element);
// }


let a="Aviansh"
let b= a.length;
console.log(b);
//  console.log(a.charAt(a.length));
// console.log(a.charAt(a.length-1));

// var result="" 
// while(b>=0){
//      console.log(a.charAt(b));
//     result=result+a.charAt(b)
//     b--;
// }
// console.log(result);

for (let index =  a.length-1; index >=0 ; index--) {
    const element = a.charAt(index);
    console.log(element);
}
let n1=0;
let n2=1;
var result=""
let i=0
while( i< 10){
    console.log(n1);
    result=result+' '+n1
    sum=n1+n2;
    n1=n2;
    n2=sum
    i++
}
console.log(result);