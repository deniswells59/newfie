'use strict';

// var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $state, $mdDialog, $auth, User) {

  $scope.openDialog = ($event) => {
    $mdDialog.show({
          targetEvent: $event,
          templateUrl: '../html/landing/login.html',
          controller: 'mainCtrl',
          clickOutsideToClose: true
        });
  }

  $scope.isAuthenticated = () => {
    return $auth.isAuthenticated();
  };

  $scope.authenticate = (provider) => {
    $auth.authenticate(provider)
      .then(res => {

        if(provider === 'facebook') {
          let token = $auth.getToken();
        }

        User.storeUser(res.data.user);
        $mdDialog.hide();
        if(!res.data.user.registered) {
          $state.go('registerNav.registerLang');
        } else {
          $state.go('dashboard');
        }
      })
      .catch(err => {
        console.log('err', err);
      })
  };

  $scope.loginUser = () => {
    $auth.login($scope.login)
      .then(res => {
        User.storeUser(res.data.user);
        $mdDialog.hide();
        if(!res.data.user.registered) {
          $state.go('registerNav.registerLang');
        } else {
          $state.go('dashboard');
        }
      })
  }

  $scope.logout = () => {
    $auth.logout();
    $state.go('home');
  }
});
