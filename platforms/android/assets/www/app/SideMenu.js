var app = angular.module("SideMenu", ['ChangeState']);

app.controller("SideMenuController", ["$scope", "$state", function($scope, $state, $mdDialog) {
  $scope.MenuItems = [
    {
      link : 'home',
      title: 'Home',
      icon: 'home'
    },
    {
      link : 'photo',
      title: 'Photo',
      icon: 'photo'
    },
    {
      link : 'call',
      title: 'Call',
      icon: 'call'
    }
  ];

  $scope.navigateTo = function(event) {
    $state.go(event);
    $scope.toggleSidenav('left');
  };

/*
  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
      .title('Call Vince')
      .content('Imagine being taken to ' + to)
      .ariaLabel('Navigation demo')
      .ok('Call')
      .targetEvent(event)
    );
  };
*/
}]);