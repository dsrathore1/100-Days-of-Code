//! Reverse a string
const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse('Hi, There'));

//! Check if a number is even or odd
const isEven = (num) => num % 2 === 0;
// console.log(isEven(5)); // False

//! Shuffle an array
const shuffleArr = (arr) => arr.sort(() => 0.5 - Math.random());
// console.log(shuffleArr([1, 4, 5, 6]));

//! Get the unique value in an array
const uniqueArr = (arr) => [...new Set(arr)];
// console.log(uniqueArr([2, 2, 4, 5, 5, 6, 3, 3, 2, 1]));

const result = [];

for (i = 0; i < 19; i++) {
    result.push(i ** 1); //* i**1 === i+1 === i
}

console.log(result)