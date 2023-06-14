// function isPalindrome(str) {
//     const arrayValues = str.split('');
//     const reverseArrayValue = arrayValues.reverse();
//     const reverseString = reverseArrayValue.join('');
//     if (str == reverseString ) {
//         console.log(`Given string is: "${str}"===> It is a palindrome`);
//     } else {
//         console.log(`Given string is: "${str}"===> It is not a palindrome`);
//     }
// }
// isPalindrome("madam");
// isPalindrome("141");
// isPalindrome("Sunday");
// isPalindrome("mom");
// isPalindrome("listen");
// isPalindrome("dad");

//**************************************************************** */


  

    function isPalindrome(string1){
        // let string1 ="121"
        const len = string1.length;
    
        // Use for loop to divide the words into 2 half
        for (let i = 0; i < len / 2; i++) {
    
            // validate the first and last characters are same
            if (string1[i] !== string1[len - 1 - i]) {
               console.log(`Given String/number is "${string1}" :- It is not a palindrome`);
            }
            else{
                console.log(`Given String/number is "${string1}" :- It is a palindrome`);
            }
        }
       

    }

isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");