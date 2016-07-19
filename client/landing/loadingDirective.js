app.directive('loadingImage', function() {
  return function(scope, element, a, con) {
    element.bind('load', () => {
      scope.imgLoaded = true;
      scope.$apply();
    })
  }
})
