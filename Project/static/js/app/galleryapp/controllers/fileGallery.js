'use strict';

/**
 *  @name {vsKeypadViewCtrl}
 *  @description {Controller for vkLog de$scope.rective}
 *
 *  @module {virtualKeypad}
 *  @author Andrii Trybynenko (ATrybynenko@tycoint.com)
 *  @global {fpApp}
 */
angular.module('galleryApp')
       .controller('mainViewCtrl', function ($scope,checkFeatures,$http) {
              
       $scope.actionMsg = 'Select file in the left side by clicking on it';
       $scope.scopeOrder = 'name';
     
       $http.get("/files")
            .success(function(response){
                   $scope.files = response.files;
            });
            
      checkFeatures.compatible($scope)
});


