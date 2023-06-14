//const array = [10, 5, 'a', 'b', 'h', 11];
//Sort this array and print output with NUMBER and ALPHABET  seperately 


const array=[10 ,5  ,"a" ,"b" ,"h" ,11 ];
console.log(`Given array is:-`);
console.log(array);
console.log(`----------------------------------------------`);
// console.log(array.sort());

let numArray=[];
let alphabetArray=[];

array.forEach((element)=>{
    if (typeof(element)=="string") {
        alphabetArray.push(element)
        // console.log( alphabetArray);
    }
    if (typeof(element)=="number") {
        numArray.push(element)
        // console.log(numArray);
    }
})

//==================================================
 numArray.sort(function(a,b){
     return a-b});

    //  numArray.sort( (n1, n2) => {
    //     return n1 > n2 ? 1 : -1 ;
    //  } );

 //============================================================

//  alphabetArray.sort(function(a,b){
//      return a-b});

alphabetArray.sort( (n1, n2) => {
        return n1 > n2 ? 1 : -1 ;
     } );

//===========================================================     
console.log(`Alphabet array is`);
console.log( alphabetArray);
console.log(`----------------------------------------------`);
console.log(`Number array is `);
console.log(numArray);
