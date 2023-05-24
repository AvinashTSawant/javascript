const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11]
var count=0;
for (const index in arrayNumbers) {
   
    if (index % 2 == 0) {
        var c =arrayNumbers[index];
      console.log(` Even no are ${arrayNumbers[index]}`)
      count= count + c
     
    }
    
  }
  console.log(count);
  /////////////////////////////////////////////////
  for (const element of arrayNumbers) {
   
    if (element % 2 == 0) {
        var c =arrayNumbers[element];
      console.log(` Even no are ${element}`)
     
    }

  }