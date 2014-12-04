'use strict';

/**
 *  @name {imagePreviewViewCtrl}
 *  @description {Controller for image preview}
 *
 *  @module {galleryApp}
 *  @author Andrii Trybynenko (trybynenko@gmail.com)
 *  @global {galleryApp}
 */
angular.module('galleryApp')
       .controller('imagePreviewViewCtrl',['$scope','$route', '$routeParams', '$location' ,  function ($scope,$route, $routeParams, $location) {
    
    debugger
       $scope.previewImgSrc = 'http://images.unian.net/photos/2014_12/1417625721-5333.jpg'     
     
}]);

