 function voteEligibility(num) {
// if (num > 18 ) {
//     console.log(` your age is ${num} eligible for voting ` );
    
// } else {
//     if (((num <= 0) || (num > 120))) {
//         console.log(`  your age is ${num} invalid data`);
        
//     } else {
//         console.log(` your age is ${num} eligible for not voting `) ;
//     }
   
// }
if (num == null || num == undefined) {
    console.log(`your age is "${num}" invalid data`);
    
} else {
    if (((num <= 0) || (num > 120))) {
       console.log(`your age is "${num}" invalid data`);
        
    } else {
        if (num>= 18) {
            console.log(`your age is "${num}" eligible for voting ` );
            
        } else {
            console.log(`your age is "${num}"  not eligible for voting ` );
        }
       
    }
}
    
}
voteEligibility(45);
console.log("------------------------------------------");
voteEligibility(17);
console.log("------------------------------------------");
voteEligibility(8);
console.log("------------------------------------------");
voteEligibility(20);

console.log("------------------------------------------");
voteEligibility(-10);
console.log("------------------------------------------");
voteEligibility(100);
console.log("------------------------------------------");
voteEligibility(0);
console.log("------------------------------------------");
voteEligibility(null);
console.log("------------------------------------------");
voteEligibility(undefined);