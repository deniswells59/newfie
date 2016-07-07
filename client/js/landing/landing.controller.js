function landingCtrl ($scope, $state, $auth, User) {
  $scope.isAuthenticated = function() {
    return $auth.isAuthenticated();
  };

  $scope.authenticate = (provider) => {
    $auth.authenticate(provider)
      .then(res => {
        if(!res.data.user.registered) {
          $('#modal1').closeModal();
          $state.go('registerNav.registerLang');
        }
      })
      .catch(err => {
        console.log('err', err);
      })
  };

};
