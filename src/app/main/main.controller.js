(function() {
  'use strict';
  angular.module('weightTracker')
    .controller('MainCtrl', MainCtrl); 

  MainCtrl.$inject = ['$state', 'RestfulService'];

  function MainCtrl($state, RestfulService) {
    // Variables
    var main = this;
    main.goalValid = true;

    // Methods
    main.setupSession = setupSession;
    
    // Initial methods
    getSessions();

    function setupSession(valid) {
      main.goalValid = valid;
      // If goal is set properly
      if(valid) {
        var formData = {goal: main.goal};
        // Save the session, and then get the session id
        var newSessionId = RestfulService.saveSession(formData);
        // Then go to measure page
        $state.go('measure', { "sessId": newSessionId});
      }      
    }

    function getSessions() {
      RestfulService.getSessions();
      main.sessions = RestfulService.sessions;
    }
  };
})();

