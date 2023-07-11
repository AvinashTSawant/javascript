var a =  " Avinash Sawant Avinash";
var b ="don"
// console.log(b.length);
// console.log(b.charAt(2));
console.log(a.trim());
console.log(a.charAt(1));
console.log(a.indexOf("a"));
console.log(a.split(''));
console.log(a.replace('Avinash','savi'));
console.log(a.toUpperCase());
console.log(a.valueOf());
console.log(a.includes("Ab"));
console.log(a.slice(1,3));
console.log(a.substr(1,3));
console.log(a.match(/avinash/g));
console.log(a.startsWith(' Avi'));
console.log(a.endsWith(" "))

console.log(a.concat(b))
console.log(a.length);
var c =""
 for (let index= a.length-1; index >=0 ; index--) {
     const element = a[index];
     c=c+element

 }
 console.log(c);

 ////////////////////////////////////////