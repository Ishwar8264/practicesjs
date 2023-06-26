// ************************EVENT LOOP *******************************************

// The event loop is an inherent part of JavaScript’s runtime environment, and it doesn’t require explicit programming.However, I can provide an example that demonstrates how the event loop operates in JavaScript by simulating asynchronous behavior.

console.log('start');

setTimeout(()=>{
    console.log('i am first run');
},1000);

setTimeout(()=>{
    console.log('no way first i am');
},0);

Promise.resolve().then(()=>{
    console.log('ok wait');
})

console.log('End');