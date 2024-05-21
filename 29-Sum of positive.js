// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/5715eaedb436cf5606000381

// MENGHITUNG JUMLAH POSITIF

function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));

// Cara ke 2:

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
console.log(positiveSum([1, 2, 3, 4, 5]));
