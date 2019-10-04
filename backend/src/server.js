const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://mstar:mstar123@aircnc-tb1dv.mongodb.net/AirCnC?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})

app.use(cors()) // permitir que qualquer endereço consiga acessar o backend
app.use(express.json()) // para indicar que todos os metodos vão utilizar e retornar json
app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3333) // porta da apicação



