console.log("Hello World");

// import expres js 
const express = require('express');
// initialsing an app instance
const app = express();

// configure a port address
const port = 5000;

// create a get request handler for /
app.get("/", (req, res) => {
    res.json("welcome to my app");
})

// make the app listen to a port
app.listen(port, ()=> {
    console.log("Server started in " + port);
})