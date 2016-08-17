app.controller('homeCtrl', homeCtrl);

function homeCtrl($scope, $timeout, Mail) {
  $scope.imgLoaded = false;
  $scope.sent = false;
  $scope.sending = false;
  $scope.email = {};

  $scope.sendFeedback = () => {
    $('.form').addClass('animated fadeOut');
    $timeout(() => {
      $scope.sending = true;
      Mail.sendFeedback($scope.email)
      .then(() => {
        $scope.sending = false;
        $scope.sent = true;
      });
    }, 1500);
  }

  $scope.animateCircleIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInLeft');
  }

  $scope.animateConnectIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeInLeft');
  }

  $scope.animateTitleIn = function($el) {
    $el.removeClass('hidden');
    $el.addClass('animated fadeIn');
  }


}
