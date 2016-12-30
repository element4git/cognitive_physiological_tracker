var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter'),
		selectChannel = Backbone.Radio.channel('select');

	// Location List Item View
	// -------------------
	//
	// Display an individual location item, and respond to changes
	// that are made to the item, including marking completed.
	CognitiveApp.LocationView = CognitiveApp.SelectionView.extend({
		template: JST['assets/templates/view/location.html'],

		click: function () {
			selectChannel.request('selectState').set('location', this.model.get('location'));
		}
	});

	// Item List View Body
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of items for display.
	CognitiveApp.LocationBody = CognitiveApp.SelectionBody.extend({
		attributes:{
			'role':'location-selector'
		},

		id: 'location-body',

		childView: CognitiveApp.LocationView
	});
})();