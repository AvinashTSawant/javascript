console.log(`----------------------------------------------------------`)

console.log(`-------2.Check→ you are eligible for Marriage(Male).------`)
console.log(`----------------------------------------------------- ----`)

var maleMarriageEligibility= function(gender,age,name){
    //  console.log(`Given No are ${gender}, ${age} `)
  var result= (gender == "Male") &&(age >=21 ) ? `Hey "${name}" you are eligible for Marriage `: `Hey "${name}" you are  not eligible for Marriage`;
    console.log(result)
//    return result;

}
 maleMarriageEligibility("Male", 25, "Billgates")
 
 console.log(`***********************************************`)
 maleMarriageEligibility("Male", 17, "Stew Jobs")

 console.log(`-------------------------------------------------------------`)

  console.log(`-------2.Check→ you are eligible for Marriage(Female).------`)
  console.log(`------------------------------------------------------------`)

 var maleMarriageEligibility= function(gender,age,name){
    //  console.log(`Given No are ${gender}, ${age} `)
  var result= (gender == "Female") &&(age >=18 ) ? `Hey "${name}" you are eligible for Marriage `: `Hey "${name}" you are  not eligible for Marriage`;
    console.log(result)
//    return result;

}
 maleMarriageEligibility("Female", 16, "Jenifer")

 console.log(`***********************************************`)

 maleMarriageEligibility("Female", 27, "Malinda Gates")
 console.log(`--------------------------------------------------------`)

