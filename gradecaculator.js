
//decalre the prompt variables
let math = parseFloat (prompt ("Enter Mathematics Scores : ")); 
let physics = parseFloat(prompt("Enter Physics Score : ")); 
let chem = parseFloat(prompt ("Enter Chemistry Score : "));
let addition= math + physics + chem;
let average = addition / 3;
let grade;
if (average < 70)
{
grade="C";
}else if(average > 70 && average < 90)
{
grade = "B";
}
else {
grade= "A";
}
console.log(`Enter Math Marks : ${math}`);
console.log(`Enter Physics Marks : ${physics}`); 
console.log(`Enter Chemistry Mark: ${chem}`);
 console.log(`*************************************************`);
console.log(`Total marks of Math, Physics and Chemistry is: ${addition}`);
console.log(`*************************************************`);
console.log("Average: ", average);

console.log("Grade : ", grade);
