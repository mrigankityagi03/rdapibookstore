const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');
const UserController = require('../controllers/user/UserController');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}))
route.post('/admin/login', (req, res) => {
    userController.doAdminLogin(req, res);
})
route.get('/users', (req, res) => {
    userController.getUsers(req, res);
})
route.post('/add/user', (req, res) => {
    UserController.addUser(req, res);
})


module.exports = route;