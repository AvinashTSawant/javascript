

function  showName(){
      console.log("show Function") ;
}
console.log("Before Function");
showName();
console.log("After Function");

console.log("///////////////////////////////////////////");
var numOne=100;
var numTwo=200;


var name1="Avinash";
var name2="Sawant";


function swapVariable(valueOne,valueTwo){  //arguments   value0ne=100 ,value0ne=200
    console.log("Before Swap:--  ",valueOne,valueTwo);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log("After Swap:--  ",valueOne,valueTwo);
}
swapVariable(numOne,numTwo);

console.log("///////////////////////////////////////////");

swapVariable(name1,name2);

console.log("///////////////////////////////////////////");

function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);