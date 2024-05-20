// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/5949481f86420f59480000e7

// MENENTUKAN JUMLAH ELEMEN GANJIL/GENAP

function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven([1023, 1, 2]));
console.log(oddOrEven([1]));
