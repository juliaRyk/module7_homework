const person = {
    city: "Ekaterinburg",
    age: 25,
    position: "developer"
  }
  
  const newPerson = Object.create(person);
  
  newPerson.ownPosition = "frontend";
  newPerson.ownAge = 24;
  
  //console.log(newPerson.position);
  //console.log(newPerson.age);
              
  for (let key in newPerson) {
      if (newPerson.hasOwnProperty(key)) {
          console.log(key);
      }   
  }