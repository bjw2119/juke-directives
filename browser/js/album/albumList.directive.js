juke.directive('albumList', function(){
  return {
    restrict: 'E',
    templateUrl: '/js/album/templates/albumList.html',
    scope:{
      albums: '='
    },
    link: function(scope){
      console.log(scope.albums);
    }
  }
})
