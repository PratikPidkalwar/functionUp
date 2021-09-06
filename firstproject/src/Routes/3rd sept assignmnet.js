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