var myApp = angular.module("mgApp",['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl  : 'views/Home.html',
		controller : 'HomeController'
	}).when('/register',{
		templateUrl  : 'views/Registeration.html',
		controller : 'RegisterationController'
	}).when('/',{
		templateUrl  : 'index.html',
		controller : 'MainController'
	}).otherwise({
		redirectTo: '/'
	})
})

myApp.controller("MainController",function($scope){
	//alert("sdfaS")
	$scope.gotask =function(){
		alert("task completed")
	}
})