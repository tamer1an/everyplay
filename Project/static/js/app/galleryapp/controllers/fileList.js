'use strict';

/**
 *  @name {fileListViewCtrl}
 *  @description {Controller for file list manager view}
 *
 *  @module {galleryApp}
 *  @author Andrii Trybynenko (trybynenko@gmail.com)
 *  @global {galleryApp}
 */
angular.module('galleryApp')
       .controller('fileListViewCtrl', function ($scope,$http) {
              
       $scope.actionMsg        = 'Select file in the left side by clicking on it';
       $scope.scopeOrder       = 'name';
       $scope.rowSelectedIdx   = -1;  
       
       $scope.rowClick = function(elem){
           if ($scope.rowSelectedIdx == elem.$index){
                $scope.rowSelectedIdx = -1;  
           }else{
                $scope.rowSelectedIdx = (parseInt(elem.$index)>= 0)?elem.$index : -1;
           }
       };
     
       $http.get("/files")
        .success(function(response){
               $scope.files = response.files;
        });
});

