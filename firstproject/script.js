//        Question No. 2
"use strict"

const practiceData = [[1, 2, 3, 4], [3, 4, 5, 6], [5, 6, 7, 8], [7, 8, 9, 10], [9, 10, 11, 12]]

/**
 * requirement one
 * increment each number by one and output the resultant array, 
 * (keep the same structure as that of the input array)
 * 
 * 
 * requirement two
 * an array of array of even numbers
 */

let array1 = [];
practiceData.forEach(x => {
    let z = x.map(y => y + 1)
    array1.push(z)
})
console.log(array1);

let array2 = [];
practiceData.forEach(a => {
    let b = a.filter(c => c % 2 == 0)
    array2.push(b)
})
console.log(array2);


//    Question No. 1

const aadharData = [
    {
        firstName: 'Ritam',
        lastName: 'Singhal',
        address: {
            location: 'rampur',
            state: 'up',
        },
        hasDrivingLicense: false,
        emails: ['abc@outlook.com', 'efg@gamil.com', 'ghj@gmail.com']
    },
    {
        firstName: 'Siddarth',
        lastName: 'Singhal',
        address: {
            location: 'chandigarh',
            state: 'haryana',
        },
        hasDrivingLicense: false,
        emails: ['fgdfg@gmail.com']
    },
    {
        firstName: 'Mukul',
        lastName: 'Gaddiyan',
        address: {
            location: 'lucknow',
            state: 'up',
        },
        hasDrivingLicense: false
    },
    {
        firstName: 'Mayank',
        lastName: 'Attri',
        address: {
            location: 'alwar',
            state: 'rajasthan',
        },
        hasDrivingLicense: true,
        emails: ['abc@yahoo.com']
    },
    {
        firstName: 'Akash',
        lastName: 'Agarwal',
        address: {
            location: 'gurgaon',
            state: 'haryana',
        },
        hasDrivingLicense: true,
        emails: ['abc@gmail.com', 'efg@yahoo.com', 'ghj@outlook.com']
    },
]

/*
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

//  1st problem

let fullname;
let emailId;
aadharData.forEach(x => {
    if (x.emails !== undefined) {
        fullname = x.firstName + " " + x.lastName
        emailId = x.emails.join(" ")
        console.log(`{${fullname}: ${emailId}}`)
    }
})


//   2nd problem

let count;
aadharData.forEach(y => {
    if (y.emails != undefined) {
        emailId = y.emails.join(" ")
        count = y.emails.length
        console.log(emailId, `(${count})`)
    }
})

//   3rd problem

let states1 = aadharData.map(p => p.address.state)
// console.log(states1)
let states2 = states1.sort();
// console.log(states2)

for (let i = 0; i < states2.length; i++) {
if(states2[i] !== states2[i+1]){
    console.log(states2[i])
}
}

//   4th problem

aadharData.forEach(q => {
    if (q.address.state == "haryana" && q.emails != undefined) {
        console.log(q.firstName + " " + q.lastName)
    }
})


// let harName = aadharData.find(s => s.address.state=="haryana" && s.emails != undefined);
// console.log(harName.firstName + " " + harName.lastName)


//       Question no. 3

const arr = [1,2,3,4]

// find the sum of all numbers of this array using reduce method

let total =0;
total= arr.reduce((total, num) =>{
    return total + num;
})
console.log(total);


const secondArray = [[0, 1], [2, 3], [4, 5]]

// flatten the above array using reduce
