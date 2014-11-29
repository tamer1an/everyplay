var galleryApp = {
    app : angular.module('galleryApp', [
//        'ngCsv'
    ])
};

/**
 *  @name {galleryApp}
 *  @description {Root derective}
 *  @module {galleryApp}
 */
angular.module('galleryApp').directive('filegallery', function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: '/html/fileGallery.html',
        controller: 'mainViewCtrl',
        link: function($scope,element){

            debugger
            //video target element
            // $scope.videoElement = document.getElementById(element[0].dataset.target);
            // video elem sizes
            // $scope.rect = $scope.videoElement.getClientRects()[0];
            // Ipmp page always starts from event video tab active and we by default making updateEventId
            // $scope.updateEventId();
        }
    }
});
