let arr = [1, [2, [3, 4]], 5];

let flat = arr.flat(Infinity);

console.log(flat);

//otuput: [1, 2, 3, 4, 5]