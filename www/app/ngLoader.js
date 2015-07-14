var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons', 'SideMenu', 'ChangeState']);

app.config(function($mdThemingProvider) {
	console.log("Config");

	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('pink')
		.warnPalette('red')
		.backgroundPalette('grey');
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};
}]);

app.directive('userAvatar', function() {
  return {
    replace: true,
    template: '<img src="images/logo.jpg"></img>'
  };
});