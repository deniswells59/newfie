app.controller('dashCtrl', dashCtrl);

function dashCtrl($state, $scope, user) {
  if (!user) {
    $state.go('home');
  }
  if (!user.registered) {
    $state.go('registerNav.registerLang');
  }

  $scope.user = user;
  console.log(user);
}
