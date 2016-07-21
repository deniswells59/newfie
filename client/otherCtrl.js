'use strict';

// var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $state, $auth, User) {

  $scope.isAuthenticated = () => {
    return $auth.isAuthenticated();
  };

  $scope.authenticate = (provider) => {
    $auth.authenticate(provider)
      .then(res => {
        User.storeUser(res.data.user);
        if(!res.data.user.registered) {
          $('#modal1').closeModal();
          $state.go('registerNav.registerLang');
        }
      })
      .catch(err => {
        console.log('err', err);
      })
  };

  $scope.logout = () => {
    $auth.logout();
    $state.go('home');
  }
});

app.controller('loginCtrl', function($scope, User, $state) {
  $scope.loginUser = () => {
    User.login($scope.log)
      .then(() => {
        $state.go('home');
      });
  };
});

app.controller('homeCtrl', function($scope) {
  $scope.imgLoaded = false;
});
