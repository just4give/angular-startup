/**
 * Created by mithundas on 12/23/15.
 */
(function(){
    'use strict';
    var dependencies = []	;

    define(dependencies, function(){

        var WelcomeController = function($scope, $rootScope, $log){
            $log.debug('loading welcome controller');


        };

        return ["$scope","$rootScope","$log", WelcomeController];
    });

}());