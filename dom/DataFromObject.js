 var result=0;
 var arr=[{rollno:1,name:"AAA",physics:50,chemistry:80,maths:60},
{rollno:2,name:"BBB",physics:60,chemistry:80,maths:70},
{rollno:3,name:"CCC",physics:80,chemistry:50,maths:60},
{rollno:4,name:"DDD",physics:50,chemistry:40,maths:60},
{rollno:5,name:"EEE",physics:70,chemistry:80,maths:50},
{rollno:6,name:"FFF",physics:50,chemistry:60,maths:40},]

for (let i = 0; i < arr.length; i++) {
    var result1=arr[i].physics+arr[i].chemistry+arr[i].maths
     console.log( ` Roll no of student ${arr[i].rollno}  Total marks :-${result1}  avrage marks of subjet;- ${result1/3}` );
     result=result+result1;
}
console.log(`All Student marks is:- ${result}`);
