/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');

module.exports = {
	init : function(req, res){
		Selection.find().exec(function(err,emotionArray){
			_.map(emotionArray,function(emotion){
				emotion.date = moment(emotion.date).format('dddd MMMM Do YYYY h:mma');
				return emotion;
			});
			return res.view('dashboard/homepage', {emotionArray:emotionArray} );
		})
	}	
};

