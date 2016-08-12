app.controller('messagesCtrl', messagesCtrl);

function messagesCtrl($scope, Messages) {
  $scope.companion = Messages.returnsCompanion();

  $scope.message = {
    _id: $scope.companion._id
  }

  $scope.sendMessage = () => {
    Messages.sendMessage($scope.message)
      
  }
}
