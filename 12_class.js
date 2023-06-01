class Student {
    constructor(name, age, gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    showDetails(){
        console.log(`Details is  name:- ${this.name}, age:-  ${this.age}, gender:- ${this.gender}, city ;- ${this.city} `);

    }
}
const abhijeet = new Student("Abhijeeet", 21, "Male", "Pune");
const poonam = new Student("Poonam", 20, "Female", "Mumbai" );
const rushi = new Student("Rushikesh", 23, "Male", "Indor");
const snehal = new Student("Snehal", 22, "Male", "Pune");

const array = [abhijeet, poonam, rushi, snehal];

// const  abhi = array[0];
// console.log(abhi);


for (const element of array) {
    element.showDetails();
    
    //   console.log(element);
   
}


abhijeet.showDetails(); 
snehal.showDetails();
rushi.showDetails();

console.log(abhijeet.name);
