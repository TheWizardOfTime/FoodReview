#!/usr/bin/env node

/* FoodReview information model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodReviewSchema = new Schema(
{	
		reviewId: { type: String, required:true, unique:true },
		productId: { type: String, required: true },  
		userId: { type: String, required: true },
	    profilename: { type: String, required: true },
	    helpfulnessNum:{ type: Number, required:true },
	    helpfulnessDen:{ type: Number, required:true },
	    score: { type: Number, require:true },
	    time: { type: Number, require:true },
	    summary: { type: String, require:true } ,
	    reviewText:{ type:String, require:true }
	},
		{collection: 'foodreview'}
);

module.exports = mongoose.model( 'foodreview' , FoodReviewSchema );
/*===END-OF-FILE===*/