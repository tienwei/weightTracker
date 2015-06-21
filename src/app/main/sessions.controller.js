(function(){
	'use strict';

	angular.module('weightTracker')
		.controller('SessionsCtrl', SessionsCtrl);

	SessionsCtrl.$inject = ['RestfulService'];

	function SessionsCtrl(RestfulService) {
		// Variables
		var sessions = this;

		// Methods

		getSessions();
		function getSessions() {
			RestfulService.getSessions();
			sessions.sessions = RestfulService.sessions;
		}
	}
})();