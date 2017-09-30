angular.module('app').service('shopService',function($http){
    
      this.getProducts = function(){
        return $http.get('https://practiceapi.devmountain.com/products')
      }
    
      this.getProductDetails = function(detail){
        var id = detail.id;
        return $http.get(' https://practiceapi.devmountain.com/products/' + id)
      }
    
    });