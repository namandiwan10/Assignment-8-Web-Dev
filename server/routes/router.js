const express = require('express');
const route = express.Router();

const controller = require('../controller/controller');

route.post('/api/users/create', controller.create);

route.get('/api/users/getAll', controller.find);

// API

route.put('/api/users/edit/:id', controller.update);

route.delete('/api/users/delete/:id', controller.delete);

module.exports = route