const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://mstar:mstar123@aircnc-tb1dv.mongodb.net/AirCnC?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})


app.use(express.json()) // para indicar que todos os metodos vão utilizar e retornar json
app.use(routes)

app.listen(3333) // porta da apicação



