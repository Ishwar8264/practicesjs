// *********************** CLOSURES ********************************
// outerFunction defines an outerVariable and returns innerFunction, which references outerVariable.When outerFunction is invoked and assigned to closure, it creates a closure that retains the reference to outerVariable.Later, when the closure is called, it still has access to outerVariable and can log its value.
function outerFunction() {
    debugger;
    const outerVariables = 'Hell I am from outer function';

    function innerFunction() {

        console.log(outerVariables);
    }
    return innerFunction

}

const closure = outerFunction();

closure();
