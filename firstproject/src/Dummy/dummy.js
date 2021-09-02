function cityArray()

{

   let students = [  { "firstName": "ram", "secondName": "raj", address: { city : "Delhi" , country: "India"} },

   { "firstName": "shyam", "secondName": "ji" , address: { city : "Bombay" , country: "India"} },

   { "firstName": "mohan", "secondName": "lal", address: { city : "Bangalore" , country: "India"} }];


 

  let cities = students.map(function giveCity(item){

    return item.address.city;

  })


 

  return cities;

}

let cities = cityArray();

console.log(cities);