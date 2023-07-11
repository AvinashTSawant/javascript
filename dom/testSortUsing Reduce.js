const arr= [18,4,'A',121,181,6,'as','ak'], stringArr =[] , numarr=[];
let result =arr.reduce( (runningTotal, value, index)=>{
  
    if (typeof arr[index]== 'number') {
        numarr.push( arr[index]) ;
    }else{
        stringArr.push(arr[index]);
    }
});

console.log(numarr.sort((n1,n2)=>{
    return n1>n2 ? 1:-1
}));
console.log(stringArr.sort());



//=====================================
// const arr= [18,4,'A',121,181,6,'as','ak'], stringArr =[];
// let result = arr.filter((value)=>{
//     if (typeof value== 'number') {
//         return value
//     }else{
//         stringArr.push(value);
//     }
// });
// console.log(result.sort((n1,n2)=>{
//     return n1>n2 ? 1:-1
// }));
// console.log(stringArr.sort());



