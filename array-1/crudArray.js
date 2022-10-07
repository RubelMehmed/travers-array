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




console.log(numbers);