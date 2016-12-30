var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var filterChannel = Backbone.Radio.channel('filter'),
		selectChannel = Backbone.Radio.channel('select');

	// EmotionList Router
	// ---------------
	//
	// Handles a single dynamic route to show
	// the active vs complete todo items
	CognitiveApp.Router = Mn.AppRouter.extend({
		appRoutes: {
			'*filter': 'filterItems'
		}
	});

	// EmotionList Controller (Mediator)
	// ------------------------------
	
	// Control the workflow and logic that exists at the application
	// level, above the implementation detail of views and models
	CognitiveApp.Controller = Mn.Object.extend({

		initialize: function () {
			this.listenTo(selectChannel.request('selectState'), 'change', this.nextSelection);
		},

		currentView:0,

		// Start the app by showing the appropriate views
		// and fetching the list of todo items, if there are any
		start: function () {
			this.nextSelection();
		},

		nextSelection: function(){
			var views = ['showEmotionList','showLocationList','showNotes','showComplete'],
				accordian = $('article.selector');
			accordian.collapse('hide');
			accordian.on('hidden.bs.collapse',function(){
				this[views[this.currentView]]();
				if(this.currentView < views.length - 1){
					this.currentView++;
				}else{
					console.log(CognitiveApp.selection);
				}
			}.bind(this));
		},

		loadView: function (collection, method_prefix) {
			CognitiveApp.App.root.showChildView('main', new CognitiveApp[method_prefix+'Body']({
				collection: collection
			}));
		},

		showEmotionList: function(){
			var navView = new CognitiveApp.FilterView(),
				EmotionList = new CognitiveApp.EmotionList();
			this.loadView(EmotionList, 'Emotion');
			CognitiveApp.App.root.showChildView('nav', navView);
			EmotionList.fetch();
		},

		showLocationList: function () {
			var LocationList = new CognitiveApp.LocationList(),
				navView = new Mn.View({
					template: _.template('<h2 class="center">Location</h2>')
				});
			LocationList.fetch();
			this.loadView(LocationList, 'Location');
			CognitiveApp.App.root.showChildView('nav', navView);
		},

		showNotes: function () {
			var navView = new Mn.View({
				template: _.template('<h2 class="center">Notes</h2>')
			});
			CognitiveApp.App.root.showChildView('main', new CognitiveApp.NotesBody({}));
			CognitiveApp.App.root.showChildView('nav', navView);
		},

		showComplete: function(){
			var navView = new Mn.View({
				template: _.template('<h2 class="center">You did it</h2>')
			}),
			completeView = new Mn.View({
				template: JST['assets/templates/view/complete.html'],
				model:CognitiveApp.selection
			});
			CognitiveApp.App.root.showChildView('main', completeView);
			CognitiveApp.App.root.showChildView('nav', navView);
		},

		// Set the filter to show complete or all items
		filterItems: function (filter) {
			var newFilter = filter && filter.trim() || 'all';
			filterChannel.request('filterState').set('filter', newFilter);
		}
	});
})();