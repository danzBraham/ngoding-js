const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = [1, 2, 3, 4, 5];

// !Destructuring
// const a = alphabet[0];
// const c = alphabet[2];

// Destructuring
// const [a, , c, ...rest] = alphabet;

// console.log(a);
// console.log(c);
// console.log(rest);

// Spread
// const newArray = [...alphabet, ...numbers];
// console.log(newArray);

function arithmetic(a, b) {
   return [a + b, a - b, a * b, a / b];
}

const [sum, sub, multiply, division, modulus = 'No Modulus'] = arithmetic(3, 5);
console.log(sum);
console.log(sub);
console.log(multiply);
console.log(division);
console.log(modulus);