'use strict';
/* App Module */
angular.module('app',[]);

/* Controllers */
angular.module('app').controller('ParserCtrl',function($scope,$window,$location,$http) {
    $scope.formData = {};
    $scope.compare = function(e){

        getUrl(this.formData.url1)
        getUrl(this.formData.url2)

        function getUrl (url) {
            $http({
                method  : 'POST',
                url     : url,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
                .success(function(data) {
//                 show comparesing data on success
                }).error(function(data, status, headers, config) {
//                 show error message
                });
        }
    }
});