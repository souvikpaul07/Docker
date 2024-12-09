const express = require('express');
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to Docker, Souvik!");
})

app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.send(`Received data: Name - ${name}, Age - ${age}`);
});

app.listen(8080, ()=>{
    console.log("Server is listening to port :", 8080);
})