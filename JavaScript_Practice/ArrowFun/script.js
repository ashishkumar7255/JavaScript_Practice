// function declaration
function add(a,b)
{
    return a + b;
}

//function expression
const sum = function add(a,b)
{
    return a + b;
}

// Arrow function expression
// const diff = (a,b) => {
//     return a - b;  // explixit return
// }
const diff = (a,b) => a - b; //implicit return