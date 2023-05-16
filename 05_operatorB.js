console.log(`---------------------------------------------`)

console.log(`-------1. Find the greatest number amongst two number.------`)



var greaterNumber= function(num1,num2){
    console.log(`Given No are ${num1} ,${num2}`)
  var result= num1>num2 ? `${num1} is greatest No `:`${num2} is greatest No`
  console.log(result);
}
greaterNumber(10,-10)
console.log(`***********************************************`)
greaterNumber(800,899)

console.log(`---------------------------------------------`)

console.log(`-------2. Find the even or odd numbers.------`)



var isEvenOrOddNum= function(num1){
    console.log(`Given No are ${num1} `)
  var result= num1%2 == 0 ? true : false;
//    console.log(result)
   return result;

}
 var result = isEvenOrOddNum(29)
  var  res = (result == true)? "29 is even No":"29 is odd No"
  console.log(`${res}`);

  console.log(`***********************************************`)

  var result = isEvenOrOddNum(44)
  var  res = (result == true)? "44 is even No":"44 is odd No"
   console.log(`${res}`);

  console.log(`***********************************************`)

  var result = isEvenOrOddNum(0)
  var  res = (result == true)? "0 is even No":"0 is odd No"
 console.log(`${res}`);

  console.log(`***********************************************`)
  var result = isEvenOrOddNum(101)
  var  res = (result == true)? "101 is even No":"101 is odd No"
  console.log(res);

  
  console.log(`--------------------------------------------------------`)

  console.log(`-------3.Check→ which word has even or odd length.------`)


  var wordLength= function(str){
    console.log(`Given word are "${str}" `)
    var num1 = str.length; 
  var result= num1%2 == 0 ? "EVEN" : "ODD";
//    console.log(result)
   return result;

}
  var result = wordLength( "JavaScript")
  var  res = (result == "EVEN")? "JavaScript is even wordlength ":"JavaScript is odd wordlength"
  console.log(res);

  console.log(`***********************************************`)

  var result = wordLength( "developer")
  var  res = (result == "EVEN")? "developer is even wordlength ":"developer is odd wordlength"
  console.log(res);

  console.log(`***********************************************`)

  var result = wordLength( "Google")
  var  res = (result == "EVEN")? "Google is even wordlength ":"Google is odd wordlength"
  console.log(res);
  console.log(`***********************************************`)
