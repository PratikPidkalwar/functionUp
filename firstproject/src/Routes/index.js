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

// router.get("/listgmail", function (req, res) {
  // let gmail = aadharData.emails.indexOf(mail=> mail.endsWith("gmail.com"))
  // console.log(aadharData.emails.)
  let gmailList = [];
  aadharData.forEach((info) => {
    if (info.emails) {
      let fullname = info.firstName + " " + info.lastName;
      let email = info.emails;
      gmailList.push({ fullname, email });
    }
  });


  let elist = [];
  aadharData.forEach((info) => {
    if (info.emails) {
      let fullname = info.firstName + " " + info.lastName;
      let email = info.emails;
      elist.push({ fullname, email });
    }
  });

// console.log(gmailList);

//   const result = gmailList.map((o) => ({
//     fullname: `${o.fullname}`,
//     emails: o.emails.filter((e) => e.match(/gmail.com$/)),
//   }));
  
//   console.log(result);
  

  // res.send(gmailList);
// });


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

/**
 * requirement one
 * an object containing the fullname and list of gmail ids
 * i.e. {fullname: 'list of gmail ids'}
 *
 *
 * requirement two
 * list of all gmail ids and its count
 *
 *
 * requirement three
 * list of all unique states and their count
 *
 *
 * requirement four
 * fullname of the person who belongs to haryana and has at least one gmail id
 */

// let nearr = [{name:["jay sardar", "sabiha khan", "nihar sayyad"]}]

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

module.exports = router;
