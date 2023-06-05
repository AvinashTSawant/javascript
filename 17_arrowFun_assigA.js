console.log(`-------------------------------------------------------------`)
console.log(`1.Arrow function with no arguments and no return value`);
let display = ()=> {
    console.log(`  "Good Morning, Today is Monday`);
}
display();

console.log(`-------------------------------------------------------------`)
console.log(`2.Arrow function with arguments and no return value`);
let show = (num1, num2,num3=1) => {
  let   result=num1*num2*num3;
    console.log(`  multiplication of number : ${num1} * ${num2} * ${num3} = ${result}`);
    
}
show(5, 5, 2);
show(10, 4);

console.log(`-------------------------------------------------------------`)
console.log(`3.Arrow function with arguments and return value`);
let add = (num1, num2, num3, num4, num5) => {
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
}
let result = add(100, 100, 200, 349, 756);
console.log(`  Addition  is :- ${result}`);
console.log(`-------------------------------------------------------------`)
let result1 = add("I am ", "learning ", "ES6 ", "features ","in depth");

console.log(`  Addition of word is :- ${result1}`);
console.log(`-------------------------------------------------------------`)



