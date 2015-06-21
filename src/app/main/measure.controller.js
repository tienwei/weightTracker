(function(){
	'use strict';

	angular.module('weightTracker')
		.controller('MeasureCtrl', MeasureCtrl);

		MeasureCtrl.$inject = ['$state', 'RestfulService'];

		function MeasureCtrl($state, RestfulService) {
			// Variables
			var measure = this;
			measure.entryValid = true;
			measure.dateValid = true;
			measure.done = false;
			measure.setDate = new Date();
			

			// Retrieve session id
			measure.sessId = $state.params.sessId;
			RestfulService.getSessionById(parseInt(measure.sessId)).then(function(ss) {
				measure.session = ss.obj;
			});

			// Methods
			measure.saveEntry = saveEntry;
			measure.editEntry = editEntry;
			measure.removeEntry = removeEntry;
		
			getEntries();

			function getEntries () {
				RestfulService.getEntries();
				measure.entries = RestfulService.entries;
			}

			function saveEntry(entryValid, dateValid) {
	      measure.entryValid = entryValid;
	      measure.dateValid = dateValid;
	      // If goal is set properly
	      if(entryValid && dateValid) {
	      	var formData = {
	      		weightEntry: measure.weightEntry,
	      		setDate: moment(measure.setDate).format('DD/MM/YY'),
	      		sessId: measure.sessId
	      	}
	        // Save the entry
	        RestfulService.saveEntry(formData);
	        measure.done = true;
	        // Refresh the entries
	        measure.weightEntry = '';
	        getEntries();
	      }      
	    }

	    function editEntry() {
	      // Todo
	    }

	    function removeEntry(id) {
	      RestfulService.removeEntry(id);    
	    }
		}



    

})();