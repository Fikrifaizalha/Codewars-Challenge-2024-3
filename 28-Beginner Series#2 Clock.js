// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

// Jam menunjukan h=jam, m=menit, s=detik,setelah tengah malam.
// tugas anda adalah menulis fungsi yang mengembalikan waktu
// sejak tengah malam dalam milidetik.

function past(h, m, s) {
  return h * 3600 * 1000 + m * 60 * 1000 + s * 1000;
}

console.log(past(1, 0, 0));

// Cara ke 2:

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
console.log(past(1, 0, 0));
