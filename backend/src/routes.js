const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router() // armazenando as rotas na variavel routes
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.get('/spots',  SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.shoow);

routes.get('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes; // exportar as rotas do arquivo para a aplicação saber 