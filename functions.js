/*
* Write a function that transforms an array of inputs into a new array
*  based on a provided transformation function.
* */
var numbers = [1, 2, 3, 4, 5];

function transform(collection, transFunction) {
    var transformedNumbers = [];
    // If forEach is allowed
    collection.forEach(function(value) {
        transformedNumbers.push(transFunction(value));
    });

    // If forEach is not allowed
    // for (var i = 0; i < collection.length; i++) {
    //     transformedNumbers.push(transFunction(collection[i]));
    // }

    return transformedNumbers;
}

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);
