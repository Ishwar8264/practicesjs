// ************************PROMISES*****************************************

// To create a promise, you use the Promise constructor, which takes a callback function with two parameters: resolve and reject.Inside this callback, you perform your asynchronous task and call either resolve(value) to fulfill the promise with a value or reject(reason) to reject it with a reason(typically an error object).

function fetchData() {
    return new Promise((resolve,reject) =>{
        //e.g (API request)
        setTimeout(()=>{
            const data = {  id:4 , name: 'razz'};
            resolve(data)
        },2000);
    });
};


fetchData()
.then((data)=>{
    console.log('fetch data', data);
})
.catch((error)=>{
   console.log('error',error.messages);
})
.finally(()=>{
    console.log('fetch operation complete');
});