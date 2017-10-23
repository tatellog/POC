'use strict';

angular
    .module('core' , ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'modules/core/views/home.html',
                    controller: 'HomeController'
                })

            $stateProvider
                .state('detalleCuenta', {
                    url: '/',
                    templateUrl: 'modules/core/views/detalleCuentas.html',
                    controller: 'DetalleCuentaController'
                })

            $stateProvider
                .state('listadoCuenta', {
                    url: '/',
                    templateUrl: 'modules/core/views/listadoCuenta.html',
                    controller: 'ListadoCuentaController'
                })
            $stateProvider
                .state('listadoOperaciones', {
                    url: '/',
                    templateUrl: 'modules/core/views/listadoOperaciones.html',
                    controller: 'istadoOperacionesController'
                })

            $stateProvider
                .state('menu', {
                    url: '/',
                    templateUrl: 'modules/core/views/menu.html',
                    controller: 'MenuController'
                })

            $stateProvider
                .state('autentica', {
                    url: '/autentica',
                    templateUrl: 'modules/core/views/autenticacionUsuario.html',
                    controller: 'AutenticacionUsuarioController'
                });
        }
    ]);
