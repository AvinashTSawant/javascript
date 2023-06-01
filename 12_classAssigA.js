console.log('**************************************');
class Vehicle  {
    constructor(name, color1, model,price,SeatingCapacity){
        this.name = name;
        this.color = color1
        this.model = model;
        this.price = price;
        this.SeatingCapacity = SeatingCapacity;
    }
    // showDetails(){
    //     console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city} `);

    // }
}
const Tata  = new Vehicle("Tata", "Black", "Nexon XE", "Rs.7.80 Lakh*",5);
console.log('');
const BMW = new Vehicle("BMW", "White", "BMW Z4", "Rs.89.30 Lakh*",5 );
console.log('');
const Mercedes = new Vehicle("Mercedes", "Graphite Grey", "Mercedes-Benz EQC", "Rs.99.50 Lakh*",5);
console.log('');
const Jaguar = new Vehicle("Jaguar", "British Racing Green", "Jaguar F-TYPE", "Rs.99.98 Lakh",5);
console.log('');
const MG = new Vehicle("MG", "Starry Black", "MG Comet EV", "Rs.7.98 - 9.98 Lakh*",4);
console.log('');



  
 let allVechical=[Tata,BMW,Mercedes,Jaguar,MG]
 
 for (const Vehicle of allVechical) {
     console.log(` Details Of the Vechical ${Vehicle.name}, ${Vehicle.color}, ${Vehicle.model} , ${Vehicle.price} ,${Vehicle.SeatingCapacity}`);
     
 }

 
 console.log('********************************************');
 //===================================================================
 class college  {
    constructor(name, city, Departments,NAAC_accredited){
        this.name = name;
        this.city = city
        this.Departments = Departments;
        this.NAAC_accredited = NAAC_accredited;
        
    }
}
const COEP  = new college("College of Engineering,", "Pune", "Engineering","A");
const FC = new college("Fergusson College", "Pune", "Arts, Science & Commerce","A+" );
const TC = new college("Tuljaram Chaturchand College", "Baramati", "Arts, Science & Commerce", "A");
const SKN = new college("SKN SINHGAD COLLEGE OF ENGINEERING", "Pandharpur", "Engineering","A++");
 console.log(`All College Details Are Follows:-`);
//  console.log(COEP);
 console.log(``);
 traverseObject(COEP);
 console.log(`-------------------------------------------------`);
 traverseObject(FC);
 console.log(`-------------------------------------------------`);
 traverseObject(TC);
 console.log(`-------------------------------------------------`);
 traverseObject(SKN);
 console.log(`-------------------------------------------------`);


 function traverseObject(college){
  
    for (const key in college) {
        if (Object.hasOwnProperty.call(college, key)) {
            const element = college[key];
            console.log(`${key}, ${element}`);
            
        
            
        }
    }

 }
 