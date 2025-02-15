const express = require('express')
const app = express()
const userRoutes = require('./routes/userRoutes')
const rideRoutes = require('./routes/rideRoutes')
const mongoose = require('mongoose');
// const { config } = require('process');
const dotenv = require('dotenv')
app.listen(2050, () => {
    console.log('listening on port 2000 ');
})

dotenv.config({
    path: './config.env'
})
mongoose
    .connect('mongodb+srv://abdulkhan01:root@trips.yl7b5c0.mongodb.net/?retryWrites=true&w=majority', {
        // strictQuery: true
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true
    }).then(con => {

        console.log('connected with moongoses');
    })


app.use(express.json())
app.use('/', userRoutes)
app.use('/', rideRoutes)
