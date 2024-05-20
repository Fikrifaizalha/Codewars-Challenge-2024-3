// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// MENGUBAH NILAI BINER YANG SETARA MENJADI BULAT:

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));
