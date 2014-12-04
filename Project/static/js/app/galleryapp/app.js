var galleryApp = {
    app : angular.module('galleryApp', [
//        'ngCsv'
    ]),
};

/**
 *  @name {filegallery}
 *  @description {Root filegallery derective}
 *  @module {filegallery}
 */
angular.module('galleryApp').directive('filegallery', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: '/html/fileGallery.html',
        // controller: 'mainViewCtrl',
        link: function($scope,element){
            console.log(element)
        },
        compile:function(){
            // debugger
        }
    }
});


angular.module('galleryApp').service('checkFeatures', function(M){
  return {
    compatible:function(scope){
        
        if (M.localstorage) {
        //use localStorage object to store data
            console.log('ok');
        
        } else {
          alert('browesr not support localstorage')
        }
    }
  }
});

angular.module('galleryApp')
    .filter('rowSelect', function() {
        return function(item) {
            debugger
        }
});
    


// window.addEventListener('storage', storageEventHandler, false);
// function storageEventHandler(event) {
//                 applySetting();
// }