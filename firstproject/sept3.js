const practiceData = [[1,2,3,4], [3,4,5,6], [5,6,7,8], [7,8,9,10], [9,10,11,12]]

/**
 * requirement one
 * increment each number by one and output the resultant array, 
 * (keep the same structure as that of the input array)
 * 
 * 
 * requirement two
 * an array of array of even numbers
 */


// requirement 1
let resultArray = [];
let subArray = [];

practiceData.forEach(x=>{
let z = 0;

x.forEach(y=>{
    z = y+1
    subArray.push(z)
})

resultArray.push(subArray)
subArray = []
})
console.log(resultArray);


// array of even numbers;
const arrayOfEvenNumber = [];
practiceData.forEach(x=>{
    x.forEach(y=>{
        if(y%2==0 && arrayOfEvenNumber.includes(y)==false)
         arrayOfEvenNumber.push(y)
    })
})
console.log(arrayOfEvenNumber);


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


// requirement 1
const Names = aadharData.map(person => {
    return { fullname:  person.firstName + " " + person.lastName,
             email : person.emails
            }
})
console.log(Names)

// requirement 2
let AllEmails =[]
 aadharData.forEach(person => {
    if(person.emails !== undefined)
    AllEmails.push(person.emails)
})
// console.log(AllEmails)

let AllGmails =[]
let UniqueGmails = []
AllEmails.forEach(y=>{
    y.forEach(z=>{
        if(z.endsWith('@gmail.com'))
            AllGmails.push(z);
    })
})
// console.log(AllGmails)
AllGmails.forEach(x=>{
    if(UniqueGmails.includes(x)==false)
    UniqueGmails.push(x);
})
// console.log(UniqueGmails)
let countArr = []
let count = 0;
UniqueGmails.forEach(x=>{
    for(let i=0;i<AllGmails.length;i++)
    {
        if(AllGmails[i].includes(x))
        count++;
    }
    countArr.push(count);
    count = 0
})

let gmailcount = []
for(i=0;i<UniqueGmails.length;i++)
{
    gmailcount[i] = { gmail: AllGmails[i],
                      count : countArr[i]
                    }

}
console.log(gmailcount)


//requirement 3
let AllStates = []
let UniqueStates = []
aadharData.forEach(x=>{
    AllStates.push(x.address.state)
    if(UniqueStates.includes(x.address.state)===false)
    UniqueStates.push(x.address.state)
})
console.log(AllStates)
console.log(UniqueStates)

let statecount = []
UniqueStates.forEach(x=>{
    for(let i=0;i<AllStates.length;i++)
    {
        if(AllStates[i].includes(x))
        count++
    }
    statecount.push(count)
    count = 0
})

let stateObjects = []
for(let i=0;i<UniqueStates.length;i++)
{
    stateObjects[i] = {
                        state : UniqueStates[i],
                        count : statecount[i]
                       }
}
console.log(stateObjects)