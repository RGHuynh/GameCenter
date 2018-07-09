(function(){
  var config = {
    templateUrl: '/app/components/heading/heading.component.html',
    controller: headingCtrl
  };

  function headingCtrl(){

  };

  angular
    .module('gameCenterApp')
    .component('heading', config);
})();