var checkLeapYear = function(leapyear){
    checkValidData = isNaN(leapyear);
    checkYear = leapyear%4;
    if(!checkValidData && leapyear != null){
        if(checkYear == 0){
        console.log(`Given Year - "${leapyear}" is Leap Year`);
        }else{
            console.log(`Given Year - "${leapyear}" is not Leap Year`);
        }
    }else{
        console.log(`Given Year - "${leapyear}" is Invalid Data`);
    }
}

checkLeapYear(2000);
console.log("------------------------------------------");
checkLeapYear(1999);
console.log("------------------------------------------");
checkLeapYear(1600);
console.log("------------------------------------------");
checkLeapYear(2022);
console.log("------------------------------------------");
checkLeapYear(1945);
console.log("------------------------------------------");
checkLeapYear(null);
console.log("------------------------------------------");
checkLeapYear('twenty twenty');
console.log("------------------------------------------");
checkLeapYear(undefined);
console.log("------------------------------------------");
checkLeapYear(NaN);
console.log("------------------------------------------");
checkLeapYear(1750);
console.log("------------------------------------------");