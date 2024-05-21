// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/515e271a311df0350d00000f

// Selesaikan fungsi jumlah kuadrat sehigga mengkuadratkan
// setiap bilangan yang dimasukan ke dalamnya, lalu menjumlahkan hasilnya.

function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Math.pow(numbers[i], 2);
  }
  return sum;
}
console.log(squareSum([0, 3, 4, 5]));

// Cara ke 2:

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

console.log(squareSum([0, 3, 4, 5]));
