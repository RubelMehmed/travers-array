
// traver array for matrix number summation


const matrixA = [
	[1, 3],
	[1, 0],
	[1, 2],
];

const  matrixB = [
	[6, 0],
	[7, 5],
	[2, 1],
];
const matrixSum = (matrixA, matrixB) => {
	const result = [];
	for (let i = 0; i < matrixA.length; i++) {
		const row = [];
		for (let j = 0; j < matrixA[i].length; j++) {
			row.push(matrixA[i][j] + matrixB[i][j]);
		}
		result.push(row);
}
return result;
}
const matrixC = matrixSum(matrixA, matrixB)
console.log(matrixC);


// to run 
// "c:\projects\javascript\Array\travers-array\array-1\travers.js"
// Ctrl+Alt+N

// for git add in  travers Array


// git remote add origin https://github.com/RubelMehmed/travers-array.git
//git remote add.

// git branch -M main
// git push -u origin main


// Crud array and update


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

//Remove First ELement
numbers.shift();

// Remove last element
numbers.pop();

numbers.length = numbers.length - 1; // another option

// remove inside element -Splice using index
numbers.splice(2, 1);

//Remove inside elements - Slice using value
const toBeDeleted = 5;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === toBeDeleted) {
        numbers.splice(i, 1);
    }
}

// Filter Array , filter method never change existing array
// array is to be assigned with let


// Reset Array
// while (numbers.length) numbers.pop();

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


