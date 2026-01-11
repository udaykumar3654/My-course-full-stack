// FOr Each Method

// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach((fruit) => (
//     console.log(fruit)
// ))

const fruits = ["apple", "ball", "cat"]

fruits.forEach(function(fruitS){
    const capitalized = fruitS.charAt(0).toUpperCase() + fruitS.slice(1);
    console.log(capitalized);
})