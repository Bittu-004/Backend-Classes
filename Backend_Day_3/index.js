const fs = require("fs");
// Pahele GEC create hoga
let a = 10;
let b = "Hello Ji";

console.log(b);

function sum(a, b) {
    return a + b;
}

// This is an asynchronous function
// Libuv ko de dega ki jab data aa jaye to mujhe call karna hai
// utf-8 nhi use kare to data binary format me aayega
fs.readFile("./data.json","utf-8" ,(err, res)=>{
    console.log(res)
})

// Libuv timer OS se mangaega ki 3 sec baad ye function call karna hai
// Ye wala func libuv ko de dega fir 3 sec baad queue me jayega fir event loop check karega ki call stack empty hai ya nahi agar empty hoga to ye function call ho jayega aur "Hello Time Out" print ho jayega
setTimeout(() => {
    console.log("Hello Time Out")
}, 3000);

console.log(a);

console.log(sum(3,5))

// fs is a file system module --> alredy existing module --> present in node js
// node js ke pass bahut sare modules hote hai jise hum use kar sakte hai --> built in modules 