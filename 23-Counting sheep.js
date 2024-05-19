// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/54edbc7200b811e956000556

//  fungsi yang menghitung jumlah domba yang ada dalam array (true berarti ada).
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}
console.log(countSheeps([true, true, false, true, true, true, true]));
