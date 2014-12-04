'use strict';

/* App Module */
angular.module('frameApp', [
  'ngRoute'
  , 'frameControllers'
  , 'galleryApp'
]);

angular.module('frameApp').value('M',Modernizr);

angular.module('frameApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/fileManager', {
        templateUrl: '/html/frameFileGallery.html',
        controller: 'fileListViewCtrl'
      })
      .when('/imagePreview/:fileId', {
        templateUrl: '/html/fileGalleryImagePreview.html',
        controller: 'imagePreviewViewCtrl'
      })
      .otherwise({
        redirectTo: '/fileManager'
      });
  }]);

/* Controllers */
angular.module('frameControllers', []);

angular.module('frameControllers').controller('controlPanelCtrl', ['$scope' ,'checkFeatures', 
  function($scope,checkFeatures) {
    $scope.myalert = function() {debugger}
    
     checkFeatures.compatible($scope);
    
    debugger
   
  }]);


// angular.module('frameApp').directive('appControlPanel', function() {
//     return {
//         restrict: 'A',
//         replace: true,
//         templateUrl: '/html/controlPanel.html',
//         controller: 'maincontrolPanelCtrlViewCtrl',
//         link: function($scope,element){
//             console.log(element)
//         },
//         compile:function(){
//             debugger
//         }
//     }
// });

// angular.module('frameControllers').controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
//   function($scope, $routeParams, Phone) {
//     $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//       $scope.mainImageUrl = phone.images[0];
//     });

//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     }
//   }]);


/* Filters */

// angular.module('phonecatFilters', []).filter('checkmark', function() {
//   return function(input) {
//     return input ? '\u2713' : '\u2718';
//   };
// });

// angular.module('connectionFilters', [])
// .filter('active', function() {
//     return function(conn) {
//         var connStyle = '';
//           connStyle += (conn.from)? ' btop-green '    : ' btop-red '    ;
//           connStyle += (conn.to)?  ' bbottom-green ' : ' bbottom-red ' ;
//         return connStyle;
//     };
// });

/* Services */

// var phonecatServices = angular.module('phonecatServices', ['ngResource']);
// phonecatServices.factory('Phone', ['$resource',
//   function($resource){
//     return $resource('phones/:phoneId.json', {}, {
//       query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//     });
//   }]);