arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601 ];
console.log(`Given Array is:-${arrayNumbers}`);
console.log(`-----------3) Find the negative numbers-------------------------`);
const arrayNegative = [];
arrayNumbers.forEach((element) => {
    if (element<0) {
        arrayNegative.push(element);
    }
 });
 console.log(arrayNegative);
//  arrayNegative.forEach(element => console.log(element));
//======================================================================
const arrayNums ="Avinash";


console.log(" ======== Executing forEach() with only required arguments==========");
arrayNums.forEach( (currentValue) => {
    console.log(currentValue);
} );