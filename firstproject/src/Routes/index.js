const express = require('express');

const model = require('../Models/index.js');

const solve = require('../Exercises/exercise.js');

const router = express.Router();

const practiceData = [[1,2,3,4], [3,4,5,6], [5,6,7,8], [7,8,9,10], [9,10,11,12]];

let z=[]
practiceData.forEach(v => {
  let i = v.map(o => o + 1)
  z.push(i)
  })
console.log(z)

let arr =[]
practiceData.forEach(c => {let d = c.filter(e => e % 2 == 0)
    arr.push(d)
})

console.log(arr)


const aadharData = [
    {
        firstName: 'Ritam',
        lastName: 'Singhal',
        address: {
            location: 'rampur',
            state: 'up',
        },
        hasDrivingLicense: false,
        emails:['abc@outlook.com', 'efg@gamil.com', 'ghj@gmail.com']
    },
    {
        firstName: 'Siddarth',
        lastName: 'Singhal',
        address: {
            location: 'chandigarh',
            state: 'haryana',
        },
        hasDrivingLicense:false,
        emails:['fgdfg@gmail.com']
    },
    {
        firstName: 'Mukul',
        lastName: 'Gaddiyan',
        address: {
            location: 'lucknow',
            state: 'up',
        },
        hasDrivingLicense:false
    },
    {
        firstName: 'Mayank',
        lastName: 'Attri',
        address: {
            location: 'alwar',
            state: 'rajasthan',
        },
        hasDrivingLicense: true,
        emails:['abc@yahoo.com']
    },
    {
        firstName: 'Akash',
        lastName: 'Agarwal',
        address: {
            location: 'gurgaon',
            state: 'haryana',
        },
        hasDrivingLicense: true,
        emails:['abc@gmail.com', 'efg@yahoo.com', 'ghj@outlook.com']
    },
]


let z = aadharData.map( v => {
    let g = []
    v.emails? g.push(v.emails) : g.push("No email's")
    return v.firstName + ' ' + v.lastName + ': ' + g
})
console.log(z)


let a = []
aadharData.forEach(t =>{
    let b = t.emails
    let count = 0
    b ?  a.push(b) : a.push("No email Exists")
    b ? count = b.length : ""
    a.push(" count of emails: " + count)
})
console.log(a)


let states = []
aadharData.forEach(l =>{
    let j = states.find(g => g.state == l.address.state)
    j ? j.Count++ : states.push({
        state : l.address.state,
        Count : 1
    })
})
console.log(states)


let m = aadharData.find(n => n.address.state == 'haryana' && n.emails)
console.log(m.firstName + ' ' + m.lastName + ' email: ' + m.emails)

const arr = [1,2,3,4]
let u = arr.reduce((c,v) => c+v)
console.log(u)

const secondArray = [[0, 1], [2, 3], [4, 5]]
let h = secondArray.reduce((n,m) => n.concat(m))
console.log(h)
console.log(h.reduce((u,i) => u+i))


module.exports = router;