var app = angular.module("ChangeState", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	
	$stateProvider
	.state("home", {
		url: "/home",
		templateUrl: "template/home.html"
	})    		

	.state("photo", {
		url: "/photo",
		templateUrl: "template/photo.html"
	});
});