var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter'),
		selectChannel = Backbone.Radio.channel('select');

	// Item List View Body
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of items for display.
	CognitiveApp.NotesBody = Mn.View.extend({

		tagName: 'article',

		className: 'selector row panel panel-default collapse',

		template: JST['assets/templates/view/notes.html'],

		ui: {
			button: 'button',
			textarea: 'textarea'
		},

		onDomRefresh: function(){
			$('article.selector').collapse('show');
		},

		events: {
			'click @ui.button': 'click'
		},

		click: function(){
			selectChannel.request('selectState').set('notes', this.getUI('textarea').val());
			CognitiveApp.selection.save();
		}
	});
})();