const express = require('express');

const model = require('../Models/index.js');

const solve = require('../Exercises/exercise.js');

const router = express.Router();

const practiceData = [[1,2,3,4], [3,4,5,6], [5,6,7,8], [7,8,9,10], [9,10,11,12]]


for(let i=0;i<practiceData.length;i++)
{
  for(let j=0;j<4;j++)
  {
    practiceData[i][j]=++practiceData[i][j];
  }
}
return practiceData;


module.exports = router;