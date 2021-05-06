var fruits = [
    {id: 1, name: "Banana", color: "Yellow"},
    {id: 2, name: "Apple", color: "Red"}
]

function searchByName(fruits, fruitName) {
    fruits.forEach(function (value, index) {
        if (value.name === fruitName) {
            console.log(fruits[index]);
        }
    });
}

function searchByKey(fruits, key, fruitName) {
    fruits.forEach(function(value, index) {
        if (value[key] === fruitName) {
            console.log(fruits[index]);
        }
    });
}

searchByName(fruits, "Apple");
searchByKey(fruits, "name", "Banana");