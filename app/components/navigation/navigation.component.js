(function(){
  var config = {
    templateUrl: '/app/components/navigation/navigation.component.html',
    controller: navigationController
  };

  function navigationController(){

  };
  
  angular
    .module('gameCenterApp')
    .component('navigation', config);
})();