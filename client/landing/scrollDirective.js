app.directive('navScroll', function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      let navSize = element[0].clientHeight;
      let imageSize = $('.landingImage')[0].clientHeight;
      let scrollLength = imageSize - navSize;

      if (this.pageYOffset <= scrollLength) {
        element[0].style.backgroundColor = 'rgba(85,150,126, 0.05)';
      } else if (this.pageYOffset > scrollLength) {
        element[0].style.backgroundColor = '#55967e';
      }
      scope.$apply();
    });
  };
});
