(function(){
  angular
    .module('gameCenterApp')
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          template: '<homepage />'
        })
    }])
})();