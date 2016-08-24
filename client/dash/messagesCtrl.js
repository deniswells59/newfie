app.controller('messagesCtrl', messagesCtrl);

function messagesCtrl($scope, $timeout, Messages, NgTableParams) {
  const messages = Messages.getCompanionMessages();
  $scope.messages = new NgTableParams({}, { dataset: messages });
  $scope.companion = Messages.returnsCompanion();
  $scope.viewing = false;
  $scope.length = messages.length;

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

  $scope.viewMessage = (message) => {
    message.new = false;
    Messages.read(message._id)
      .then(message => {
        $scope.currentMessage = message;
        $scope.viewing = true;
      });
  }

  $scope.goBack = () => {
    $scope.viewing = false;
  }

}
