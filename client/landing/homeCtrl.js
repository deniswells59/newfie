app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope, Mail) {
  $scope.imgLoaded = false;
  $scope.sent = false;
  $scope.email = {};

  $scope.sendFeedback = () => {
    Mail.sendFeedback($scope.email)
      .then(() => {
        $scope.sent = true;
      })
  }
}
