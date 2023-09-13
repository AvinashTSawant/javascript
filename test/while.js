let a=1;
let count =0;
result="";
while(count <= 15){
    if(a%2 == 0){
        result=result+" "+a;
        count++
    }
    a++
}
console.log(result); 

// b=50;
// while(b>=40){
//  console.log(b);
//  b--;
// }

// b=5;
// while(b<50){
//     console.log(b);
//     b=b+5;
// }
 a=0;
 b=1;
 sum=0;
 i=0;
 while(i< 10){
     console.log(a);
     sum=a+b;
     a=b;
     b=sum;
 i++
     

 }

 for (let index = 0; index < 10; index++) {
          console.log(a);
     sum=a+b;
     a=b;
     b=sum;

 }
