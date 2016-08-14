app.controller('messagesCtrl', messagesCtrl);

function messagesCtrl($scope, $timeout, Messages, User, NgTableParams) {
  const messages = User.getUser().messages;
  $scope.messages = new NgTableParams({}, { dataset: messages});
  $scope.companion = Messages.returnsCompanion();

  $scope.newMessage = {
    _id: $scope.companion._id
  }

  $scope.sendMessage = () => {
    Messages.sendMessage($scope.newMessage)
      .then(res => {
        $scope.sent = true;
        $scope.newMessage.content = '';

        $timeout(() => {
          $scope.sent = false;
        }, 5000);
      })
  }
}
