const express = require("express");
const app = express();
const port = 8080;
app.use(express.json()); 
const students = [
    {
        name: 'Esperanza',
        track: 'Mern'
    },
    {
        name: 'Sebastian',
        track: 'Mern'
    },
    {
        name: 'Daniel',
        track: 'Mern'
    }
]

app.get("/api", (req, res) => {
    res.json({data: students});
});

app.post("/api/student", (req, res) => {
    console.log("🚀 ~ file: server.js ~ line 25 ~ app.post ~ req", req.body); 
    res.json({students});
})

app.listen( port, () => console.log(`Demasiado cool que estoy escuchando el puerto ${port}`) );