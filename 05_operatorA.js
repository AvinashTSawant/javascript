console.log(`1.The Square of length of word  `);
console.log(`***********************************************`)
function squareOfWordLength(str){
 var a= str.split(" ");
 var a1=a.length;
 sq=a1 *a1;
 console.log(`1.square of words in string "${str}" :-  ${sq} `);
 

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log(`***********************************************`)
function str1() {
    var str ="I am Angular Developer";
    console.log(`2. Given a string;-  "${str}" `);
    console.log(`***********************************************`)
    var len=str.length;
    console.log(`2.1 The string length;-  ${len} `);
    console.log(`***********************************************`)

    var wor=str.split(" ");
     var totalWord=wor.length;
     console.log(`2.1 Total number words available in that string;-  ${totalWord} `);

     console.log(`***********************************************`)
     var result1=len / totalWord;
     console.log(`2.1 The string length / the total words;-  ${result1} `);

     console.log(`***********************************************`)
     var Result= len * totalWord;
     console.log(`2.2 The string length * the total words;-  ${Result} `);
     console.log(`***********************************************`)
     



}
str1();