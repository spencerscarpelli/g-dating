(function() {
  'use strict';

  angular
    .module('gDating')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'Home as home',
        resolve: {
          currentUser: function(User) {
            return User.getCurrentUser();
          },
          members: function(Members) {
            return Members.getAllMembers();
          }
        }
      });
  }
})();
