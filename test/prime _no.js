
function primeNum(num) {
  
  for (let j = 0; j < num; j++) {
     let isPrime = true;
    //  console.log(j);
    for (let index = 2; index < j; index++) {
      if (j % index == 0) {
        isPrime = false
        // console.log(`Not a prime number as it is divisible by ${index}`)
        break
      }
    }
    if (isPrime) {
      console.log(`${j} is prime number`)
    } else {
      console.log(`Is not prime number ${j}`)
    }
  }
}

primeNum(10)

console.log("------------------------------------------------");

// function primeNum(num) {
  
//   for (let j = 1; j < num; j++) {
//     var isPrime = true;
//     var count =0;
//     //  console.log(j);
//     for (let index = 2; index < j; index++) {
//       if (j % index == 0) {
//         count++;
//         // console.log(`Not a prime number as it is divisible by ${index}`)
       
//       }
//     }
//     if (count == 2) {
//       console.log(`${j} is not prime number`)
//     } else {
//       console.log(`Is  prime number ${j}`)
//     }
//   }
// }

// primeNum(10)