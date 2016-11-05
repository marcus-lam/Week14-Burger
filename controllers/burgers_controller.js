var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/insert', function (req, res) {
	burger.insertOne(req.body.name, function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var devoured = req.body.devoured;
	var id = req.params.id;
	burger.updateOne(devoured, id, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;