console.log("**********************01**********************") ;
function  name(){
    console.log("Avinash Sawant") ;
}
name();

console.log("**********************02-personalDetials**********************") ;

function personalDetials(firstname,lastName,collegeName){
    console.log("My Personal Details is--")
    console.log("My name is -- ",firstname,  lastName)
    console.log("My college Name is -- ",collegeName)
}
personalDetials("Avinash", "Sawant ", "SKN SINHGAD clg")

console.log("**********************03_swapUsingFunction**********************") ;


var Male="Virat";
var Femal="Anushka";


var firstNo=1000;
var secondeNo=2000;

function swapValuesDude(valueOne,valueTwo){  //arguments   value0ne=100 ,value0ne=200
    console.log("Before Swap:--  ",valueOne,valueTwo);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log("After Swap:--  ",valueOne,valueTwo);
}
swapValuesDude(Male,Femal);

console.log("--------------------------------------------");

swapValuesDude(firstNo,secondeNo);

console.log("**********************04_addThreeValues**********************") ;
 

function addThreeValues(a, b, c){
    var result=a + b+ c
    console.log("Addition is:-  " ,result );

}
addThreeValues( 10.23 ,600, 40 )
addThreeValues( "Hello"," Good", " Morning" )