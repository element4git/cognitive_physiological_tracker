/*global Backbone, CognitiveApp:true */

var CognitiveApp = CognitiveApp || {};

(function () {
	'use strict';

	var TodoApp = Mn.Application.extend({
		setRootLayout: function () {
			this.root = new CognitiveApp.RootLayout();
		}
	});

	// The Application Object is responsible for kicking off
	// a Marionette application when its start function is called
	//
	// This application has a singler root Layout that is attached
	// before it is started.  Other system components can listen
	// for the application start event, and perform initialization
	// on that event
	CognitiveApp.App = new TodoApp();

	CognitiveApp.App.on('before:start', function () {
		CognitiveApp.App.setRootLayout();
	});

})();


$(function () {
	'use strict';

	// After we initialize the app, we want to kick off the router
	// and controller, which will handle initializing our Views
	CognitiveApp.App.on('start', function () {
		var controller = new CognitiveApp.Controller();
		controller.router = new CognitiveApp.Router({
			controller: controller
		});

		controller.start();
		Backbone.history.start();
	});

	// start the CognitiveApp app (defined in js/CognitiveApp.js)
	CognitiveApp.App.start();
});