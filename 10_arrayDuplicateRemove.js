let array = [11, 3, 4, 11, 4, 7, 3]
console.log(`Given array is:- [${array}]`);
let arr = []
for (let index = 0; index < array.length; index++) {
  for (let j = index + 1; j < array.length; j++) {
  
    if (array[index] == array[j]) {
      var c = array[j]
      array.splice(j, 1)
      arr.push(c)
      
    }
  }
}

console.log(`After removing Duplicate element array is :-[${array}]`)

console.log(`Duplicate element in array is ;-[${arr}]`)
