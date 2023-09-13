var str = "6594";
var str1 =str.split("")
// console.log(str1);

var count = 0;
for (var i = 0; i < str1.length; i++)
{

    for (var j  = 0; j < str1.length; j++)
    {
        if (str1[i] < str1[j])
        {
            var a=str1[i] 
            str1[i] = str1[j];
            str1[j]=a;
            // console.log(str1);
        }

    }

}
str2 =str1.join("")
console.log(str2);
