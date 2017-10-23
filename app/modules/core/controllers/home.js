'use strict';

angular
    .module('core')
    .controller('HomeController', ['$scope',
        function($scope) {

        }
    ]);

angular
    .module('myApp',[]).factory('DataSource', ['$http',function($http){
        alert("gggg");
    return {
        get: function(file,callback,transform){
            $http.get( file, {transformResponse:transform} ).

            success(function(data, status) {
                console.log("Request succeeded", data);
                callback(data);
            }).error(function(data, status) {
                console.log("Request failed " + status);
            });

        }
    };
}]);

var AppController = function($scope,DataSource) {

    var SOURCE_FILE = "modules/core/utils/ConsultaSaldo.js";

    xmlTransform = function(data) {
        console.log("transform data");
        var x2js = new X2JS();
        var json = x2js.xml_str2json(data);
        var consultarDatos = json.definitions;
        console.log( consultarDatos);
        return consultarDatos;
    }

    setData = function(data) {
        console.log("setdata", data.process.sequenceFlow);
        $scope.dataSet = data.process;
    };

    DataSource.get(SOURCE_FILE,setData,xmlTransform);
};