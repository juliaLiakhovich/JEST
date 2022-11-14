// function expect(value) {
//   return {
//     toBe: (exp) => {
//       if (value === exp) {
//         console.log("pass");
//       } else {
//         console.log(`Значение ${value} отличается от ${exp}`);
//       }
//     },
//   };
// }

// function sum(a, b) {
//   return a + b;
// }
// expect(sum(4, 5)).toBe(12);

function sum(a, b) {
  return a + b;
}
module.exports = sum;
