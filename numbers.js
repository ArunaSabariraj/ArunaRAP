

const aNumbers = [1, 2, 3];

// Now lets say I want to double each element of the array.
// Callback using function expression.
aNumbers.map(function (number) {
    return number * 2;
});

// Callback using the arrow function
aNumbers.map((number) => number * 2);
