var app = angular.module("SideMenu", ['ChangeState']);

app.controller("SideMenuController", ["$scope", "$state", "$mdDialog", function($scope, $state, $mdDialog) {
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
      link : 'video',
      title: 'Video',
      icon: 'videocam'
    },
    {
      link : 'call',
      title: 'Call Vince',
      icon: 'call'
    }
  ];

  $scope.navigateTo = function(event, link) {
    if(link == "call") {
      window.location.href="tel:+852";
    } else {
      $state.go(link);
      $scope.toggleSidenav('left');
    }
  };
}]);