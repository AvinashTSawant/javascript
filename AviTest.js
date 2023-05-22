// var result = 0=='';
// console.log(result);
// console.log("-----------------------------------------");
// var result = 0=="0";
// console.log(result);
// console.log("-----------------------------------------");
// var result = 0==false;
// console.log(result);
// console.log("-----------------------------------------");
// var result = null==undefined;
// console.log(result);
// console.log("-----------------------------------------");
// var result = 1==[1];
// console.log(result);
// console.log("-----------------------------------------");
// var result = 1==true;
// console.log(result);
// console.log("-----------------------------------------");
// var result = 1=='1';
// console.log(result);
// console.log("-----------------------------------------");

// var num1 = 15;
// var result = num1%2 
// console.log(`${result}`);
// console.log("-----------------------------------------");

//  var num='100'
// var num1=100;
// var result=num + num1;
// console.log(result);



// console.log(0 == '0');
console.log("-----------------------------------------");
function oddPositionedChar(str){
    var abc= "";
    for (let index = 0; index < str.length; index++) {
       // console.log(str.charAt(index));
    
  if (index%2 == 1 && str.charAt(index) !== " ") {
    var char =(str.charAt(index));
    // console.log(char);
    abc = abc.concat(char);
  }
}
 console.log(`Given string is:"${str}"`);
 console.log(`Odd position char:${abc}`);
}
oddPositionedChar("hard work always pays back");
oddPositionedChar("Soon I will be Angular IT Champ");