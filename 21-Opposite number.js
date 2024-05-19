// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
  let result;
  if (!isNaN(Math.sign(number))) {
    result = number * -1;
  }
  return result;
}

console.log(opposite());

// CARA KE 2 //
function opposite(number) {
  return -number;
}
console.log(opposite());
