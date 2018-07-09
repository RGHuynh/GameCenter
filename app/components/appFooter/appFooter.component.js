(function(){
  var config = {
    templateUrl: '/app/components/appFooter/appFooter.component.html',
    controller: appFooterCtrl
  };

  function appFooterCtrl(){

  };
  
  angular
    .module('gameCenterApp')
    .component('appFooter', config)
})();