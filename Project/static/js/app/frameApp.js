'use strict';

/* App Module */
angular.module('frameApp', [
  'ngRoute'
  , 'frameControllers'
  , 'galleryApp'
]);

angular.module('frameApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/fileManager', {
        templateUrl: '/html/frameFileGallery.html',
        controller: 'mainViewCtrl'
      })
      // .when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // })
      .otherwise({
        redirectTo: '/fileManager'
      });
  }]);

/* Controllers */
angular.module('frameControllers', []);

// angular.module('frameControllers').controller('PhoneListCtrl', ['$scope', 'Phone',
//   function($scope, Phone) {
//     $scope.phones = Phone.query();
//     $scope.orderProp = 'age';
//   }]);

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