var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	// Emotion Model
	// ----------
	CognitiveApp.Location = Backbone.Model.extend({
		defaults: {
			emotion: ''
		},

		initialize: function () {
			
		}
	});

	// Emotion Collection
	// ---------------
	CognitiveApp.LocationList = Backbone.Collection.extend({
		model: CognitiveApp.Location,

		comparator: 'location',

		url:'/location'
	});
})();