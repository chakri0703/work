//var app = angular.module('chatApp',[]);
var app = angular.module('chatApp',['ui.router','btford.socket-io']);
// var app = angular.module('chatApp', ['ngRoute'])

 
app.config(function($stateProvider,$urlProvider)
{
    
        $stateProvider.state('login',{
        url:'/login',
        templateUrl:'./templates/login.html',
        controller:'loginCtrl'
    })
   

    $stateProvider.state('register',{
        url:'/register',
        templateUrl:'./templates/register.html',
        controller:'registerCtrl'
})

    $stateProvider.state('reset',{
        url:'/reset',
        templateUrl:'./templates/reset.html',
        controller:'resetCtrl'
    })

    $urlProvider.otherwise('/login')
})