// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/577a98a6ae28071780000989

// TEMUKAN NILAI MAKSIMUM DAN MINIMUM DARI SUATU LIST

var min = function (list) {
  return Math.min(...list);
};
var max = function (list) {
  return Math.max(...list);
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([5]));
