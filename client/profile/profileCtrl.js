app.controller('profileCtrl', profileCtrl);

function profileCtrl(profile, $scope) {
  let self = this;

  $scope.profile = profile;
}
