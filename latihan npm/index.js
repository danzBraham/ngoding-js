import _ from "lodash";

// Tanpa lodash
// const myArray = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//    sum += myArray[i];
// }

// const myArray = [1, 2, 3, 4, 5];
// let sum = myArray.reduce((prev, curr) => {
//    return prev + curr;
// });


// Dengan menggunakan lodash
const myArray = [1, 2, 3, 4, 5];
const sum = _.sum(myArray);

console.log(sum);