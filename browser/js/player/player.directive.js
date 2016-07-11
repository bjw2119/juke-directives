juke.directive('player', function(PlayerFactory){
  return {
    restrict: 'E',
    templateUrl: '/js/player/templates/player.html',
    controller: 'PlayerCtrl'

  }
})
