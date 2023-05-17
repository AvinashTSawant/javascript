console.log("--------------TCS interview eligibility----------------------")
console.log("");

 var tcs =function(gradScore, hscScore, sscScore, candidateName){
    var result=((gradScore>=70)||(hscScore>=80)||(sscScore>90)) ? `Congrates "${candidateName}" you are eligible for TCS interview`:`"${candidateName}" Unfortunately you are not eligible for interview`;
    console.log(result);
 }
 tcs( 80, 86, 90, "Avinash");
 console.log("------------------------------------------------------------");
 tcs( 70, 65, 55, "Ram");
 console.log("------------------------------------------------------------");
 tcs( 60, 79, 88, "Akshay");
 console.log("------------------------------------------------------------");
 