
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


