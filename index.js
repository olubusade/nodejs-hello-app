const express = require("express");
const app = express();


app.get("/", (req,res) => { 
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.send("<h1>Testing Jenkins and CI/CD using Github and AWS EC2</h1>"); // send Hello World to this route
});

app.listen(5000, () => { 
    console.log("Server running on port 5000");
});


