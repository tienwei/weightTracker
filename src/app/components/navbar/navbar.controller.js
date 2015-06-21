'use strict';

angular.module('weightTracker')
  .controller('NavbarCtrl', NavbarCtrl);

  function NavbarCtrl () {
  	var nav = this;
    nav.date = new Date();
  };
