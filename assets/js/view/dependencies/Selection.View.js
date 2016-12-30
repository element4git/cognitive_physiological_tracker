var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter');

	// Location List Item View
	// -------------------
	//
	// Display an individual location item, and respond to changes
	// that are made to the item, including marking completed.
	CognitiveApp.SelectionView = Mn.View.extend({

		tagName: 'section',

		className: 'col-xs-6 col-sm-4 col-md-2',

		ui: {
			button: 'button'
		},

		events: {
			'click @ui.button': 'click'
		},

		modelEvents: {
			change: 'render'
		}
	});

	// Item List View Body
	// --------------
	//
	// Controls the rendering of the list of items, including the
	// filtering of items for display.
	CognitiveApp.SelectionBody = Mn.CollectionView.extend({
		tagName: 'article',

		className: 'selector row panel panel-default collapse',

		ui: {
			button: 'button'
		},
		
		initialize: function () {
			this.listenTo(filterChannel.request('filterState'), 'change:filter', this.render, this);
			this.on('add:child',function(){
				this.triggerAccordian();
			});
			
		},
		
		triggerAccordian : function() {
			var filter = filterChannel.request('filterState').get('filter'),
				collectionLength = this.collection.length;
				
			if(filter !== 'all'){
				var filterLength = this.collection.models.filter(function(model){ 
					return model.get('primary') == filter 
				}).length,
				
				collectionLength = filterLength;
			}

			if ( this.children.length == collectionLength ) {
				$('article.selector').collapse('show');
			}
		}
	});
})();