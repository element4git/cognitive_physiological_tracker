var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter'),
		selectChannel = Backbone.Radio.channel('select');

	// Emotion List Item View
	// -------------------
	//
	// Display an individual emotion item, and respond to changes
	// that are made to the item, including marking completed.
	CognitiveApp.EmotionView = CognitiveApp.SelectionView.extend({
		template: JST['assets/templates/view/emotion.html'],

		click: function () {
			selectChannel.request('selectState').set('emotion', this.model.get('emotion'));
		}
	});

	// Item List View Body
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of items for display.
	CognitiveApp.EmotionBody = CognitiveApp.SelectionBody.extend({

		attributes:{
			'role':'emotion-selector'
		},

		id: 'emotion-body',

		childView: CognitiveApp.EmotionView,

		filter: function (child) {
			var filteredOn = filterChannel.request('filterState').get('filter');
			return child.matchesFilter(filteredOn);
		}
	});

	// Manages List View
	CognitiveApp.FilterView = Mn.View.extend({

		tagName:'section',

		attributes: {
			"role": "emotion-selector"
		},

		className : 'selector',

		template: JST['assets/templates/view/emotion_filter.html'],

		ui: {
			toggle: '#toggle-all'
		},

		events: {
			'click @ui.toggle': 'onToggleAllClick'
		}
	});
})();