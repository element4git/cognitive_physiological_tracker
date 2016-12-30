var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter');

	CognitiveApp.RootLayout = Mn.View.extend({

		el: '#cognitiveApp',

		ui: {
			accordian: 'article.selector'
		},

		regions: {
			main: '#main',
			nav: '#nav'
		}
	});
})();