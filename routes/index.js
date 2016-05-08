#!/usr/bin/env node

// //////////////////////////// //
//  Router for the Application  //
// //////////////////////////// // 

var express = require('express');
var router = express.Router();
// var foodreview = require('../models/review');

/* GET home page. */
router.get('/', function(req, res, next) {

	console.log('got it!');
	console.log(req.db);

	res.render('index', { title: 'Express' });
});

module.exports = router;

/*===END-OF-FILE===*/