//Establishing our Node/Express Server Environment
const express = require('express');

//tell app to use express framework
const app = express();

//define the port at the magic number 4100
const PORT = 4100;

//Send requests to the browser

//Please create an instance of Index initialization with a message of "Welcome to the cafe home page!" and a path of "/". Send the message in the response as a string
app.get("/", (request, response, next) => {
    response.send("Welcome to the cafe home page!");
});

app.get("/menu", (request, response, next) => {
    response.send("Welcome to the cafe's menu!");
  
});

app.get("/katz", (request, response, next) => {
    response.send("Welcome to the cafe's cat wall of fame!");

});

app.get("/admin", (request, response, next) => {
    response.send("Hello, this page is for admins only!");

});

//Set up the server
app.listen(PORT, () => {
    console.log(`Welcome ot he Cool CodeSquare Cafe! Now loading server...on [the magic port number]`);
    console.log(`http://localhost:${PORT}`);
});

//To boot up the server: node app.js
//If that fails: npx nodemon app.js