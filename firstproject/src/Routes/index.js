const express = require("express");

const model = require("../Models/index.js");

const router = express.Router();

const aadharData = [
  {
    firstName: "Ritam",
    lastName: "Singhal",
    address: {
      location: "rampur",
      state: "up",
    },
    hasDrivingLicense: false,
    emails: ["abc@outlook.com", "efg@gmail.com", "ghj@gmail.com"],
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
    emails: ["abc@yahoo.com", 'fgdfg@gmail.com'],
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

  // let gmail = aadharData.emails.indexOf(mail=> mail.endsWith("gmail.com"))
  // console.log(aadharData.emails.)
  // let gmailList = [];
  // aadharData.forEach((info) => {
  //   if (info.emails) {
  //     let fullname = info.firstName + " " + info.lastName;
  //     let email = info.emails;
  //     gmailList.push({ fullname, email });
  //   }
  // });
  // let elist = [];
  // aadharData.forEach((info) => {
  //   if (info.emails) {
  //     let fullname = info.firstName + " " + info.lastName;
  //     let email = info.emails;
  //     elist.push({ fullname, email });
  //   }
  // });
// console.log(gmailList);

//   const result = gmailList.map((o) => ({
//     fullname: `${o.fullname}`,
//     emails: o.emails.filter((e) => e.match(/gmail.com$/)),
//   }));
//   console.log(result);
// });

// /**
//  * requirement one
//  * an object containing the fullname and list of gmail ids
//  * i.e. {fullname: 'list of gmail ids'}
//  *

const result = aadharData.reduce((acc, curr) => {
  if (curr.emails) {
    const emails = curr.emails.filter((e) => e.match(/gmail.com$/));
    emails.length &&
      acc.push({
        fullname: `${curr.firstName} ${curr.lastName}`,
        emails,
      });
  }
  return acc;
}, []);
console.log(result);


// *
// * requirement two
// * list of all gmail ids and its count
// *

const gmail = aadharData.reduce((acc, curr) => {
  if (curr.emails) {
    const emails = curr.emails.filter((e) => e.match(/gmail.com$/));
    emails.length &&
      acc.push({
        emails, count: emails.length
      });
  }
  return acc;
}, []);
console.log(gmail);

// * requirement three
// * list of all unique states and their count
// *
const uniquestates = aadharData.reduce((acc, curr) => {
  if (acc.includes(curr.address.state)) {
        acc.push({
        state: `${curr.address.state}`,
         count: state.length})
  }
  return acc;
}, []);

console.log("Uniquestate",uniquestates);


// * requirement four
// * fullname of the person who belongs to haryana and has at least one gmail id
// */

const stateAndPerosn = aadharData.reduce((acc, curr) => {
  if (curr.emails) {
    const emails = curr.emails.filter((e) => e.match(/gmail.com$/));
      if(curr.address.state == 'haryana'){
        acc.push({
        fullname: `${curr.firstName} ${curr.lastName}`,
        emails}
        )};
  }
  return acc;
}, []);


console.log("state and person",stateAndPerosn);






// let filterName = (arr, name)=>arr.filter(el=>el.name.some(x=> x.includes(name)))

// onlyCaret = filterName(nearr,'jay')

// console.log(Object.values(aadharData[0].emails))

// const practiceData = [
//   [1, 2, 3, 4],
//   [3, 4, 5, 6],
//   [5, 6, 7, 8],
//   [7, 8, 9, 10],
//   [9, 10, 11, 12],
// ];
// const newarr = practiceData.map((arr) => arr.map((n) => n + 1));
// console.log(newarr);
// const evenarr = practiceData.map((arr) =>
//   arr.filter((x) => {
//     if (x % 2 == 0) {
//       return x;
//     } else {
//       return undefined;
//     }
//   })
// );
// console.log(evenarr);

//  }))
/**
 * requirement one
 * increment each number by one and output the resultant array,
 * (keep the same structure as that of the input array)
 *
 *
 * requirement two
 * an array of array of even numbers
 */
const arr = [1,2,3,4]
 //find the sum of all numbers of this array using reduce method
let sum = arr.reduce((a, b) =>  a + b ,0)
console.log(sum) 

const secondArray = [[0, 1], [2, 3], [4, 5]]
//  flatten the above array using reduce
// flattened is [0, 1, 2, 3, 4, 5]

let flatarray = secondArray.reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
console.log(flatarray)
module.exports = router;
