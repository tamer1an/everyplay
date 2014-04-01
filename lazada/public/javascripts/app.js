'use strict';
/* App Module */
angular.module('app',[]);

/* Controllers */
angular.module('app').controller('ParserCtrl',function($scope,$window,$location,$http) {
    $scope.formData = {};
    $scope.compare = function(e){

        getUrl('compare/'+this.formData.url1+'/'+this.formData.url2);

        function getUrl (url) {
            $http({
                method  : 'GET',
                url     : url,
                headers : { 'Content-Type': 'text/html' }
            })
                .success(function(data) {
//                 show comparesing data on success
                    var xmlString = data
//                        , parser = new DOMParser()
//                        , doc = parser.parseFromString(xmlString, "text/xml")


                }).error(function(data, status, headers, config) {
//                 show error message
                });
        }
    }
});