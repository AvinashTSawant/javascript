// let str ="ACB"
// let str1 ="CBA "

// let count =0;
// console.log(`Given string is:- [${str}]`);
// console.log(`Given string is:- [${str1}]`);

// for (let index = 0; index < str1.length; index++) {
//  let  myno = false;
//  if(str.includes(str1.charAt(index)) == 1)
//  {
//     count ++
//  }

// }
// if(count == str.length){
//   console.log('ok');

// }
// else{
//   console.log("not ok");
// }


//////////////////////////////////////////////////////////////////

            var str2 = "Listen";
            var str1 = "siLent";

            var count = 0;
            for (var i = 0; i < str1.length; i++)
            {

                for (var j  = 0; j < str2.length; j++)
                {
                    if (str1[i] == str2[j])
                    {
                        count++;
                    }

                }

            }
            console.log(count);
     
            
            if(count == str2.length)
            {
                console.log("OK");
            }
            else
            {
                console.log("NOT OK");
            }



