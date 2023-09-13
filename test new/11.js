// function swap(x,y){
//     console.log(`x=${x},y=${y}`);
//     x=x+y;
//     y=x-y;
//     x=x-y;
//     console.log(`x=${x},y=${y}`);
// }
// swap(2,3)


/////////////////////////////////////
// let sum1 ="Aviansh";
// let j=sum1.length-1;
// result="";
// console.log(j);
// while (j>=0) { // condition 0<=15
   
//    console.log(sum1.charAt(j));
//    result=result+sum1.charAt(j)
//    j = j-1;
// }

// console.log(result);

////////////////////////////////////////////
// function isPalindrome(str) {
//     const arrayValues = str.split('');
//     const reverseArrayValue = arrayValues.reverse();
//     const reverseString = reverseArrayValue.join('');
//     if (str == reverseString ) {
//         console.log(`Given string is: "${str}"===> It is a palindrome`);
//     } else {
//         console.log(`Given string is: "${str}"===> It is not a palindrome`);
//     }
// }
// isPalindrome("madam");

/////////////////////////////////////////////////////////////////


 // program to generate fibonacci series up to n terms
//  var n1=0
//  var n2=1
// var result = []
// for (let index = 0; index < 10; index++) {
// //    console.log(n1);
// result= result + " " +n1 
//  sum = n2+n1;
//  n1=n2;
//  n2= sum

// }
// console.log(`Fibonacci Series :- [${result}]`);

////////////////////////////////////////////////////////////////
var fact=1;
// for (let index = 5; index >=1; index--) {
//   fact=fact*index
    
// }
// console.log(fact);
i=5;
while (i >=1) {
    fact=fact*i  
    i--;
}
console.log(fact);