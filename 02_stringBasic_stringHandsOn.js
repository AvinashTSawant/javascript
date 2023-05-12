  

  console.log("***********************Assigement 02********************************");
   function stringHandsOn(){
    var givenString ="    Hey you are doing good, keep it up   "
  console.log("********************************************************************");
  console.log("Given String is=",givenString);
 

  console.log("********************** length of the String*************************");
  var lengthOfString = givenString.length;
  console.log("Length of  String is=",lengthOfString);
  console.log("***********Remove the leading and trailing extra spaces*************");
   
  var trimmedgivenString = givenString.trim();
  console.log("After Trim givenString is: ",trimmedgivenString);
  console.log("Lenght Trim givenString is: ",trimmedgivenString.length );

  console.log("***********************extra spaces*********************************");
 
 console.log("Total number extra spaces : ",givenString.length - trimmedgivenString.length );
 console.log("*********************first  character********************************");
 trimmedgivenString.charAt(0);
 console.log("first  character  : ",trimmedgivenString.charAt(0))
 console.log("*********************last  character*********************************");
 const last = trimmedgivenString.charAt(trimmedgivenString.length - 1);
 console.log("Last  character  : ",last)
}
stringHandsOn();