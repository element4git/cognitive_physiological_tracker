var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	// Emotion Model
	// ----------
	CognitiveApp.Emotion = Backbone.Model.extend({
		defaults: {
			emotion: ''
		},

		initialize: function () {
			
		},

		matchesFilter: function (filter) {
			if (filter === 'all') {
				return true;
			}else{
				return this.get('primary') === filter
			}
		}
	});

	// Emotion Collection
	// ---------------
	CognitiveApp.EmotionList = Backbone.Collection.extend({
		model: CognitiveApp.Emotion,

		comparator: 'primary',

		url:'/emotion'
	});
})();