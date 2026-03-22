const express = require("express");

const app = express();

// To get response
// app.use("/about" ,(req, res)=>{
//     res.send({"name": "Danendra", "age": 29, "id": 1234, "money": 20,});
// })

// app.use("/contact" ,(req, res)=>{
//     res.send("Your are in Contact Page");
// })

// app.use("/detail" ,(req, res)=>{
//     res.send("Your are in Detail Page");
// })

// app.use("/last" ,(req, res)=>{
//     res.send("Your are in last page");
// })

// app.use("/" ,(req, res)=>{
//     res.send("Your Home Page");
// })  // Use this in last it will work properly

app.use("/about/:id/:user", (req, res)=>{
    console.log(req.params)
    res.send("About Page");
})

app.listen(4000, ()=>{
    console.log("listening at port 4000");
})

// Why we do routing in backend when frontend can also do?