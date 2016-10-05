var myShoppingApp = angular.module('myShoppingApp', ['ngRoute']);

myShoppingApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/women/dresses', {
      templateUrl: 'views/women_dresses.html'
    })
    .when('/women/sweaters', {
      templateUrl: 'views/women_sweaters.html'
    })
    .when('/women/handbags', {
      templateUrl: 'views/women_handbags.html'
    })
    .when('/men/pants', {
      templateUrl: 'views/men_pants.html'
    })
    .when('/men/shirts', {
      templateUrl: 'views/men_shirts.html'
    })
    .when('/men/shoes', {
      templateUrl: 'views/men_shoes.html'
    })
    .when('/girl/dresses', {
      templateUrl: 'views/girl_dresses.html'
    })
    .when('/girl/leggings', {
      templateUrl: 'views/girl_leggings.html'
    })
    .when('/girl/tops', {
      templateUrl: 'views/girl_tops.html'
    })
    .when('/boy/jeans', {
      templateUrl: 'views/boy_jeans.html'
    })
    .when('/boy/shoes', {
      templateUrl: 'views/boy_shoes.html'
    })
    .when('/boy/tshirts', {
      templateUrl: 'views/boy_tshirts.html'
    })
    .otherwise({
      redirectTo: '/women/dresses'
    });
}]);

myShoppingApp.controller('ShoppingCtrl', ['$scope', '$http', function($scope, $http){
/*  $scope.datas = ["images/dress1.jpg", "images/dress2.jpg", "images/dress3.jpg", "images/dress4.jpg", "images/dress5.jpg", "images/dress6.jpg"];*/

  $http.get('data/data.json').success(function(data){
    $scope.datas = data;
  });
}]);
