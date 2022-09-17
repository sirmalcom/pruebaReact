// server/index.js

//creando conexion con servidor express con numero de puerto 3001

const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Uniendo ambos lados FRONTEND Y BACKEND --> USARA EL MISMO DOMINIO
app.use(express.static(path.resolve(__dirname, '../client/build')));

// creando endpoint api, conectando con API  react

app.get("/api", (req,res) => {
    res.json({message: "Hola desde el servidor!"});
});

// confirmando conexion con servidor express

app.listen(PORT, () => {
    console.log('Server listening on' +" "+ PORT.toString());
});