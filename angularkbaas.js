var angularkbaas = angular.module('angularkbaas', []);
angularkbaas.factory('angularkbaas', function($http, $q) {
    var angularkBaasClient = function(credentials){
        this.app = credentials.app;
        this.starkbaasUrl = credentials.url; 
    }
    
    angularkBaasClient.prototype.save = function (entity, data) {
        var self = this;
        return $http({
            method: 'POST',
            url: this.starkbaasUrl + "/" + entity,
            data: data
        }).then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                console.log("Error ", response);
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    }
    
    angularkBaasClient.prototype.get = function (entity) {
        var self = this;
        return $http({
            method: 'GET',
            url: this.starkbaasUrl + "/" + entity
        }).then(function(response) {
            if (typeof response.data === 'object') {
                return response.data;
            } else {
                console.log("Error ", response);
                return $q.reject(response.data);
            }
        }, function(response) {
            return $q.reject(response.data);
        });
    }
    
    return angularkBaasClient;
});