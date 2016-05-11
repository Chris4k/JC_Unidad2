/**
 * Created by ollidnanref on 04-05-2016.
 */

//Gererando nuestro modulo
var app = angular.module('LoginFormModule'
    ,[]);

//Agregando un control
app.controller('LoginFormController',
    function($scope, $http){

        $scope.formModel = {}; //modelo = entidad generada para sustentar la vista.

        //funcion que llama al submit
        $scope.onSubmit = function(){
            console.log("Llegue, ¡Primer submit con AngularJs!");
            console.log($scope.formModel);

            //mas adelante, haremos llamadas HTTP.
        };
    });
