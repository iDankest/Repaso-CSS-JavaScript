const animals = ['🙈', '🐶', '🐷'];

animals.at(0); // 🙈 - Es un nuevo mentodo para acceder a los datos de una array como [x]

const fruts = ['🍎', '🍌', '🍇']; // Tipica manera de hacer una copia de un array sin modificar la original

const copy = [...fruts];
copy[0] = '🍉';
//Nueva manera de hacer una copia de un array sin modificar la original
const newcopy = fruts.with(1, '🥑');

// Nuevo metodo groupBy
// ejemplo antiguo
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let grouped = {
//   par: [],
//   impar: [],
// };
// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     grouped.par.push(number);
//   } else {
//     grouped.impar.push(number);
//   }
// });

//nuevo metodo
const grouped = Object.groupBy(numbers, (number) => {
  if (number % 2 === 0) return 'par';
  return 'impar';
});
