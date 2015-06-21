(function(){
	'use strict';

	angular.module('weightTracker')
		.factory('RestfulService', RestfulService);

	// Use local storage to mock restful apis for now 
	RestfulService.$inject = ['$q', 'Restangular', 'localStorageService'];

	function RestfulService ($q, Restangular, localStorageService) {
		// Mock
		localStorageService.set('entries', [
			{id: 1, weight: 83, date: '20/06/15', sessId: 1},
			{id: 2, weight: 85, date: '19/06/15', sessId: 1},
			{id: 3, weight: 86, date: '18/06/15', sessId: 1}
		]);
		localStorageService.set('sessions', [
			{id: 1, goal: 60, user_id: 1, finished: false, created_at: "2015-06-20 14:00:00"},
			{id: 2, goal: 65, user_id: 1, finished: false, created_at: "2015-06-19 14:00:00"}
		]);

		// Initial variables
		var sessions = [];
		var entries = [];

		var restService = {
			// Variables
			sessions: sessions,
			entries: entries,
			// Methods	
			getSessions: getSessions,
			getSessionById: getSessionById,
			saveSession: saveSession,
			getEntries: getEntries,
			editEntry: editEntry,
			removeEntry: removeEntry,
			saveEntry: saveEntry
		};
		return restService;

		// Get users
		// function getUsers() {
			// var users = Restangular.all('users').getList().$object;
			 
		// }

		// Get sessions 
		function getSessions() {
			// Assume user authentication is done
			// Mock
			restService.sessions = localStorageService.get('sessions');
		}

		function getSessionById(id) {
			getSessions();
			var deferred = $q.defer();
			 
			restService.sessions.map(function(obj) {
		   	if(obj.id === id) {
		   		// Make sure it resolves
		   		deferred.resolve({'obj':obj});
		   	}
			});
			// Return a promise
			return deferred.promise;
		}

		function saveSession(formData) {
			var tmp = localStorageService.get('sessions');
			
			var newSession = {
				id: tmp.length + 1, goal: formData.goal, finished: false, created_at: new Date()
			};
			tmp.push(newSession);
			localStorageService.set('sessions', tmp);
			return newSession.id;
		}

		function getEntries() {
			restService.entries = localStorageService.get('entries');
		}

		function saveEntry(formData) {
			var tmp = localStorageService.get('entries');
			var newEntry = {
				id: tmp.length + 1, weight: formData.weightEntry, date: formData.setDate, sessId: formData.sessId
			};
			tmp.push(newEntry);
			localStorageService.set('entries', tmp);
		}

		function editEntry() {
			// Todo
		}

		function removeEntry() {
			// Todo
		}
	}
})();