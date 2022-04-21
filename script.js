"use strict";

//1
//Declare a variable named submissions that is initialized to an array with the following objects:

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-01-24",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-01-24",
    passed: true,
  },
];

//2
// Functionality: construct an object and push it into the array.
// The object must have the same properties as the objects already in the array.
// Use conditional statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

const addSubmission = (array, newName, newScore, newDate) => {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  });
};

addSubmission(submissions, "Mo", 71, "2022-04-20");
console.log(submissions);

//3
//Functionality: remove the object from the array at the specified index using the splice method.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

//4
//Functionality: remove the object from the array that has the provided name.
//Incorporate the findIndex method and the splice method.

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};

//deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

//5 note no loop needed
//Functionality: update an object’s score in the array at the specified index.
//Use conditional statements to set the value for the passed property
//to true if the score is greater than or equal to 60 and false otherwise.

const editSubmission = (array, index, score) => {
  array[index].score = score;
  if (array[index].score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
};

editSubmission(submissions, 3, 80);
console.log(submissions);

//6
//Functionality: return the object in the array that has the provided name. Use the find method.

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
console.log(findSubmissionByName(submissions, "Jill"));

//7
//Functionality: return the object in the array that has the lowest score.
//Use the forEach method to loop through the whole array

const findLowestScore = (array) => {
  let lowestScore = array[0].score;
  array.forEach((item) => {
    if (item.score < lowestScore) {
      lowestScore = item.score;
    }
  });
  return lowestScore;
};
console.log(findLowestScore(submissions));

//8
//Functionality: return the average quiz score.  Use a for...of loop.

const findAverageScore = (array) => {
  for (findAverageScore of array) {
    console.log(submissions.length(score));
  }
}; //** this one isn't even showing in console */

//9

// Functionality: return a new array using the filter method.
// The filter method should find objects in the array that have passing scores.

const filterPassing = (array) => {
  return array.filter((item) => {
    return !item.true;
  });
};
console.log(filterPassing(submissions));

//this needs to be tweaked. showing one that isnt passing

// 10

// Functionality: return a new array using the filter method.
// The filter method should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

console.log(filter90AndAbove());

//this one gives an error too.
