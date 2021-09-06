// problem 1
/*
const practiceData = [[1,2,3,4],[3,4,5,6],[5,6,7,8],[7,8,9,10],[9,10,11,12]]

let result = practiceData.map(p => p.map(x => x+1))
console.log(result)

let result2 = practiceData.map(p => p.filter(x => x%2 == 0))
console.log(result2)
*/

// problem 2

const aadharData = [
  {
    firstName: "Ritam",
    lastName: "Singhal",
    address: {
      location: "rampur",
      state: "up",
    },
    hasDrivingLicense: false,
    emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
  },
  {
    firstName: "Siddarth",
    lastName: "Singhal",
    address: {
      location: "chandigarh",
      state: "haryana",
    },
    hasDrivingLicense: false,
    emails: ["fgdfg@gmail.com"],
  },
  {
    firstName: "Mukul",
    lastName: "Gaddiyan",
    address: {
      location: "lucknow",
      state: "up",
    },
    hasDrivingLicense: false,
  },
  {
    firstName: "Mayank",
    lastName: "Attri",
    address: {
      location: "alwar",
      state: "rajasthan",
    },
    hasDrivingLicense: true,
    emails: ["abc@yahoo.com"],
  },
  {
    firstName: "Akash",
    lastName: "Agarwal",
    address: {
      location: "gurgaon",
      state: "haryana",
    },
    hasDrivingLicense: true,
    emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
  },
];

let fullName = aadharData.map(x => x.firstName + ' ' + x.lastName )
let emails = aadharData.map(x => x.emails)
emails = emails.filter(s => s.includes('@gmail.com'))
console.log({fullName, emails})



// problem 3
/*
const arr = [1,2,3,4];
console.log(arr.reduce((a,b) => a+b))

const secondArray = [[0, 1], [2, 3], [4, 5]];
let flatArray = secondArray.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);
console.log(flatArray)
*/
