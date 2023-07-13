class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
// arrayEmps.forEach(element => {
//      if(element.emp_salary > 55000){
//          console.log(`${element.emp_salary} ${element.emp_dept}`);
//      }
// });

//=====================================================

// for (const element of arrayEmps) {
//     console.log(element.emp_salary);
// }

//=============================================
let salary=arrayEmps.filter((element) =>{
    return element.emp_dept=="IT"
});
console.log(salary);

let salary1=salary.map((element) =>{
         return element.emp_salary
});
console.log(salary1);

let result=salary1.reduce((runningTotal, value) =>{
    return runningTotal+value
});
console.log(result);
 let avg =result/salary.length
console.log(avg);

//============================================



// const arrayItOrHrEmployees = arrayEmps.map((employee) => {
//     return employee.emp_name;
//     });
//     console.log(arrayItOrHrEmployees);