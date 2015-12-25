/**
 * Created by mithundas on 12/23/15.
 */
(function(){
    require.config({
        priority:'angular',
        paths:{
            'jquery':'vendor/jquery/dist/jquery.min',
            'bootstrap':'vendor/bootstrap/dist/js/bootstrap.min',
            'angular':'vendor/angular/angular.min',
            'domReady':'vendor/requirejs-domready/domReady',
            'angular-route':'vendor/angular-ui-router/release/angular-ui-router.min',
            'appModule':'modules/app/AppModule',
            'ui-bootstrap':'vendor/angular-bootstrap/ui-bootstrap.min',
            'ui-bootstrap-tpl':'vendor/angular-bootstrap/ui-bootstrap-tpls.min'

        },
        shim:{
            'bootstrap':{
                deps: ['angular']
            },
            'angular':{
                exports:'angular'
            },
            'angular-route':{
                deps: ['angular']
            },
            'ui-bootstrap':{
                deps: ['angular','bootstrap']
            },
            'ui-bootstrap-tpl':{
                deps: ['angular','bootstrap']
            }

        }
    });




    var dependencies = ['domReady!','angular','appModule','jquery','angular-route','bootstrap','ui-bootstrap','ui-bootstrap-tpl'];
    var modules =['ui.router','ui.bootstrap'];
    var appName = 'app';

    require(dependencies, function(document,angular,AppModule){

        angular.element(document).ready(function(){
            modules.push(AppModule);
            angular.module(appName,modules);
            angular.bootstrap(document,[appName]);
        });


    });





}());
