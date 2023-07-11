// let person ={
//     age: 20,
//     name:"Avinash"
// }
// console.log(person.age);
// console.log(person);
// console.log(Object.keys(person));
// console.log(Object.values(person));

//  for (const key in person) {
//      if (Object.hasOwnProperty.call(person, key)) {
//          const element = person[key];
//          console.log(`${key} ${element}`);
         
//      }
//  }

//  const person1=person
//  person.age=22
//  console.log(person1);
//  console.log(person);

 let Ats ={
    age: 25,
    name:"Avinash Sawant"
}
let Ats1 ={
    age1: 40,
    name1:"sawi Sawant",
    city: "pune"
}

let ats_new ={

}
// Object.assign(ats_new,Ats)
// ats_new.age=25;
// console.log(Ats);
// console.log(ats_new);


// Object.assign(Ats1,Ats);
// console.table(Ats1)
// let marg_obj=Object.assign({}, Ats)

// console.table(marg_obj)

 //================================================

// class person{
//     constructor(age2 ,name){
//         this.age1=age2
//         this.name1=name
//     }


// }

//  const detail =new person (12,"Avi")
// console.log(detail.age1);


//=========================================================
function person (my_name,my_age){
    this.name=my_name
    this.age=my_age
}

const avi =new person ("Avinash",31)
const sawvi=new person ("sawvi",35)

const det =[avi,sawvi]

det.forEach(element => {
    
   if(element.name.startsWith("A")) {
    console.log( element.age);
    console.log( element.name);
   }
    
});