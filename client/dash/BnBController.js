app.controller('BnBController', BnBController);

function BnBController($scope, $mdDialog, AirBnB) {
  $scope.selectedListing = {};
  this.index = 0;

  AirBnB.getResults()
    .then(results => {
      console.log(results);
      $scope.results = results;
    })

  $scope.newSelected = (index) => {
    $scope.results[this.index].selected = false;
    $scope.results[index].selected = true;
    $scope.selectedListing = $scope.results[index];
    this.index = index;
  }

  $scope.saveDialog = (listing) => {
    $mdDialog.hide(listing);
  }

  $scope.closeDialog = () => {
    $mdDialog.cancel();
  }
}
