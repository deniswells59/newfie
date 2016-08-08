app.controller('profileCtrl', profileCtrl);

function profileCtrl(profile, notMobile, $scope) {
  let self = this;

  $scope.profile = profile;
  $scope.trip = profile.trip[0];
  $scope.notMobile = notMobile;
  console.log(profile);
}
