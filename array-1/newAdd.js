//########### Add new elements to an array


// #Push method to insert at the end

const arrP1 = [1, 2, 3];
const arrP2 = [1, 2, 3];
arrP1[arrP1.length] = 4;
arrP1.push(5, 6, 7);

// arrP1.push( ...arrP2); (ES6) below old>
Array.prototype.push.apply(arrP1, arrP2);
//
console.log(arrP1);



// ## unshift method to insert at the begining

const arrU1 = [5, 6, 7];
const arrU2 = [1, 2, 3];
arrU1.unshift(4);

// arrU1.unshift(... arrU2); (es6)
Array.prototype.unshift.apply(arrU1, arrU2);

console.log(arrU1);

// Splice method to insert at the given index

const arrS1 = [1, 2, 3, 5, 9];
const arrS2 = [6, 7, 8];
arrS1.splice(3, 0, 4);
// index 0- splice, 1- delete, 2- what to splice
arrS1.splice(5, 0, ...arrS2); 

console.log(arrS1);
