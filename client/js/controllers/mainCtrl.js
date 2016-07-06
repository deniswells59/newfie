'use strict';

// var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $state, $auth, User) {
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $scope.authenticate = (provider) => {
    $auth.authenticate(provider)
      .then(res => {
        if(!res.data.user.registered) {
          $('#modal1').closeModal();
          $state.go('registerNav.register');
        }
      })
      .catch(err => {
        console.log('err', err);
      })
  };

});

app.controller('dashCtrl', function($scope, $state, user) {
  if (!user || !user.registered) {
    $state.go('registerNav.register');
  }
});
app.controller('regCtrl', function($scope, $state) {

});

app.controller('loginCtrl', function($scope, User, $state) {
  $scope.loginUser = () => {
    User.login($scope.log)
      .then(() => {
        $state.go('home');
      });
  };
});

app.controller('homeCtrl', function($scope, User, $state) {

});
