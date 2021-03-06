(function() {
  'use strict';

  angular
    .module('gDating')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'Search as search',
        restricted: true,
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
}());
