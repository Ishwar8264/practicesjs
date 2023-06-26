// ***************** GENERATORS ************************

// Generators provide a powerful way to create iterable sequences with lazy evaluation.They allow you to control the flow of iteration, pause execution, and resume later.Generators are particularly useful for working with large or infinite sequences of data or for implementing custom iteration patterns.

function* countUp(start,end){
    for (let i = start; i <=end; i++){
        yield i ;
    }
}

//Create Generators Object 
const generator = countUp (1,5);

// Iterator over generator using a for... of loop

for (const num of generator){
    console.log(num);
    
}