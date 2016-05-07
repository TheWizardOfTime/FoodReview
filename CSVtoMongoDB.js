/**
 *  The Code below is used to populate your locally running MongoDB instance.
 */


var mongoose = require('mongoose');
var csv = require("fast-csv");
var FoodReview = require("./models/review");

/** NOTE: 
 * You're going to need to set up your own local MongoDB Server 
 * the directions for that are here - https://docs.mongodb.com/manual/installation
 * follow them accoridingly, and you should be able to have a MongoDB instance running
 */
var db = mongoose.connect('mongodb://localhost:27017/application_server');

    //load some data to the database
 
csv.fromPath("data/Reviews.csv", {headers : true})

    .on("data", function(data){

        var record = new FoodReview(data);

        record.save( function( err, user ){

            if(!err){

                console.log('Saved Food Review');

            }

            else{

                console.log(err);

            }

        });

    })

    .on("end", function(){

        console.log("done");

    });
