/**
 * Created by mithundas on 12/3/15.
 */
(function(){
    'use strict';
    var dependencies = [
        'angular',
        'modules/app/AppConfig',
        'modules/app/WelcomeController',
    ];

    define(dependencies, function(angular,AppConfig,WelcomeController){
        var moduleName = 'module.app';
        var app = angular.module(moduleName, []);
        app.config(AppConfig);
        app.controller('welcomeController',WelcomeController);

        return moduleName;

    });

}());