var CognitiveApp = CognitiveApp || {};
(function () {
	'use strict';
	// Selection Model
	// ----------
	var Selection = Backbone.Model.extend({
		defaults: {
			emotion: '',
			location: '',
			notes:'',
			date:new Date()
		},
		url:'/selection'
	});
	
	CognitiveApp.selection = new Selection;

	var selectChannel = Backbone.Radio.channel('select');
	selectChannel.reply('selectState', function () {
		return CognitiveApp.selection;
	});
})();