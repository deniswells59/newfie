app.controller('connectCtrl', connectCtrl);

function connectCtrl($scope, User, mobile) {
  $scope.mobile = mobile;
  console.log('yo', mobile);
}
