
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('../models/db')
const router = require('../routes/phoneData.server.routes')


const db = mongoose.connection

const PORT = process.env.PORT || 3001;

const app = express();

// app.get('/api', (req, res) => {
//     res.json({ message: "COMP5347 Assignment 2" });
// });

app.use('/api', router)


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
