// Function declaration

add1(2, 4);
function add1(a, b) {
    console.log(a + b);
}


// Function Expression

const add2 = function  (a, b) {
    console.log(a + b);
}
add2(5, 4);

// Single line of code 

let add3 = (a, b) => a + b;
console.log(add3(3, 2));

// Multiple line of code

const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));

//Immediately Invoked Function Expressions

(function () {
    console.log("Welcome");
})();

//Hoisting

greet();
function greet() {
    console.log("Hello world");
} 