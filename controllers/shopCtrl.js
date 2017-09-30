angular.module('app').controller('shopCtrl', function($scope, shopService) {
    
      shopService.getProducts()
      .then(function(response) {
        return $scope.products = response.data;
      })
    });