class employee{
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId=empId;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;
    }
}
const empAnil=new employee(22,"Anil","IT",50000,"TCS");
const empRadha=new employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new employee(55,"Rishi","finance",47000,"TCS");
const empSonali=new employee(66,"Sonali","finance",45000,"Infy");
const empMonika=new employee(77,"Monika","IT",40000,"wipro");
const empViny=new employee(88,"Vinayak","IT",75000,"TCS");
const empMahi=new employee(99,"Mahesh","HR",85000,"Infy");

const array=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi];

console.log(`-------------------------------------------------------------`);
 console.log(`1.Find out the 'TCS' employee details and log only name & company on console`);
array.forEach( (employee)=> {
     if (employee.empCompany =="TCS") {
        console.log(`  empName :- ${employee.empName} ,empCompany  :- ${employee.empCompany}`);

     }
});

console.log(`-------------------------------------------------------------`);
 console.log(`2.Find the employees with salary greater than or equal 50000`);

 array.forEach( (employee)=> {
    if (employee.empSalary >= 50000) {
       console.log(employee);

    }
});


console.log(`-------------------------------------------------------------`);
 console.log(`3. Find the sum of all employees salary and log on console`);
var sal=0;
 array.forEach( (employee)=> {
     
 sal =sal+employee.empSalary
    
});
console.log(`  All Employees salary is =${sal} `);


console.log(`-------------------------------------------------------------`);
 console.log(`4. Find the average salary and log on console (Average = Total Salary / Number of employees)`);
var salary=0;
 array.forEach( (employee)=> {
     
    salary =salary+employee.empSalary
    
});
avg_salary=salary/array.length
console.log(`  Avarage salary is =${avg_salary} `);


console.log(`-------------------------------------------------------------`);
 console.log(`4. Find the average salary and log on console (Average = Total Salary / Number of employees)`);
var salary=0;
 array.forEach( (employee)=> {
    //   if(((employee.empDept = "IT") || (employee.empDept = "HR")) && (employee.empSalary >=75000))
    if((employee.empDept == "IT") || (employee.empDept == "HR")) 
    {


         if(employee.empSalary >=75000)
         {
            console.log(employee);
         }
     }
    
    
});

