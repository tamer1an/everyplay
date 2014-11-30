var galleryApp = {
    app : angular.module('galleryApp', [
//        'ngCsv'
    ])
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
        templateUrl: '/html/fileGallery/fileGallery.html',
        controller: 'mainViewCtrl',
        link: function($scope,element){
            
        }
    }
});
