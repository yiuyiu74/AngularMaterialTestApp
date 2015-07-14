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
      link : 'call',
      title: 'Call',
      icon: 'call'
    }
  ];

  $scope.navigateTo = function(event, link) {
    if(link == "call") {
      var confirm = $mdDialog.confirm()
        .title('Call Vince')
        .content('Do you want to call Vince?')
        .ok('Call')
        .cancel('Cancel')
        .targetEvent(event);

       $mdDialog.show(confirm);
    } else {
      $state.go(link);
      $scope.toggleSidenav('left');
    }
  };
}]);