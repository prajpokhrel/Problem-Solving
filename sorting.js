/*
* Write a program to sort an array of object by a target key.
* The original array should remain unchanged.
* */

var myArray = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Andrew'}
];

function sortBy( a, b ) {
    if ( a.name < b.name ) {
        return -1;
    }
    if ( a.name > b.name ) {
        return 1;
    }
    return 0;
}

console.log(myArray.sort( sortBy ));

// var sorted = sortBy(myArray, "name");
// console.log(sorted);


