/**
 * Created by mithundas on 12/23/15.
 */
(function(){
    'use strict';
    var dependencies = []	;

    define(dependencies, function(){

        var AppConfig = function( $stateProvider, $urlRouterProvider){

         $stateProvider
                .state('/', {
                    url: '/',
                    templateUrl: 'modules/app/tmpl/welcome.html',
                    controller: 'welcomeController'
                });

            $urlRouterProvider.otherwise('/');



        };

        return ["$stateProvider", "$urlRouterProvider",AppConfig];
    });

}());