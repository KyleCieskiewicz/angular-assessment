angular.module('app').controller('productDetailsCtrl', function($scope, shopService, $stateParams) {
    
    $scope.getProductDetails = function(){
        shopService.getProductDetails($stateParams).then(function(response) {
            return $scope.product = response.data;
        });
    }
  
    $scope.getProductDetails();
    
    });