const obj =JSON.parse(`{
    "name": "Aleix Melon", 
    "id": "E00245",
    "role": [ "Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
    }`) ;

    console.log(`Log on console "Dev`);
    console.log(obj.role[0]);
    console.log(`-------------------------------------`);
    console.log(`Log on console "Melon`);
  
    const  mel=obj.name.split(" ");
    //  console.log(mel.split(" "));
    const mel1= mel[1]
     console.log(mel1);
     console.log(`-------------------------------------`);
     console.log(`Log on console "21019`);
     const  dob=obj.doj.split("-");
     //  console.log(mel.split(" "));
     const dob1= dob[2]
      console.log(dob1);
      console.log(`-------------------------------------`);