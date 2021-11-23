const express = require('express');
const email = require('./routes/mail')

const app = express();

app.use(express.json());

app.use('/email', email);

app.listen(8080, ()=>console.log("server running on port 8080"))