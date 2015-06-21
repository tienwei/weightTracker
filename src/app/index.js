'use strict';

angular.module('weightTracker', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mgcrea.ngStrap', 'angularMoment', 'LocalStorageModule'])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    $stateProvider 

      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('sessions', {
      	url: '/sessions',
      	templateUrl: 'app/main/sessions.html',
        controller: 'SessionsCtrl',
        controllerAs: 'sessions'
      })
      .state('measure', {
      	url: '/sessions/:sessId',
      	templateUrl: 'app/main/measure.html',
        controller: 'MeasureCtrl',
        controllerAs: 'measure'
      })

    $urlRouterProvider.otherwise('/');
    // RestangularProvider.setBaseUrl('api/');
  })
;
