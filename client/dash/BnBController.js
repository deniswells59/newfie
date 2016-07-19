app.controller('BnBController', BnBController);

function BnBController($scope, $mdDialog, AirBnB) {
  $scope.selectedListing = {};

  AirBnB.getResults()
    .then(results => {
      console.log(results);
      $scope.results = results;
    })

  $scope.saveDialog = () => {
    $mdDialog.hide();
  }

  $scope.closeDialog = () => {
    $mdDialog.cancel();
  }
}
