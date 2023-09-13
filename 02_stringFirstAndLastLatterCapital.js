var givenString = 'How are you mate'
console.log(`Given string are :- "${givenString}"`)
var sp = givenString.split('')
// console.log(sp);
for (let index = 0; index < sp.length; index++) {
  const element = sp[index]
  //  console.log(`${sp}`);

  if (element == ' ') { 
    sp[index + 1] = sp[index + 1].toUpperCase()
    sp[index - 1] = sp[index - 1].toUpperCase()
    // console.log(sp[index-1]);
    // console.log(sp[index+1]);
  }
}
console.log(`String with 1st and last latter capital :- "${sp.join('')}"`)

///////////////////////////////////////////////////////////////////////
