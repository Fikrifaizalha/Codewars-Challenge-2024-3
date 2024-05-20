// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// MENGEMBALIKAN HASIL //

// Cara Bar-Bar:
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(8));

// Cara Satu Baris:

// const summation = (n) => (n * (n + 1)) / 2;

// console.log(summation(2));
