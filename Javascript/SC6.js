const animals = ['🙈', '🐶', '🐷'];

animals.at(0); // 🙈 - Es un nuevo mentodo para acceder a los datos de una array como [x]

const fruts = ['🍎', '🍌', '🍇']; // Tipica manera de hacer una copia de un array sin modificar la original

const copy = [...fruts];
copy[0] = '🍉';
//Nueva manera de hacer una copia de un array sin modificar la original
const newcopy = fruts.with(1, '🥑');
