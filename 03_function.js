

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