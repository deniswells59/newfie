app.directive('navState', function($window, $state, $rootScope, $animate) {
  return function(scope, element) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        navState($window, toState.name, element);
    });
    angular.element($window).bind("scroll", function() {
      let navSize = element[0].clientHeight;
      let imageSize = 0;

      if ( $('.landingImage').length ) {
        imageSize = $('.landingImage')[0].clientHeight;
      }

      let scrollLength = imageSize - navSize;
      if ($window.pageYOffset <= scrollLength) {
        element[0].style.backgroundColor = 'rgba(85,150,126, 0.05)';
      } else if($window.pageYOffset > scrollLength || !$state.current.name) {
        element[0].style.backgroundColor = '#55967e';
      }
    });
  }
});


function navState($window, state, element) {
  let navSize = element[0].clientHeight;
  let imageSize = 0;

  if ( $('.landingImage').length ) {
    imageSize = $('.landingImage')[0].clientHeight;
  }

  let scrollLength = imageSize - navSize;
  if (state === '' || state === 'home') {
    element[0].style.backgroundColor = 'rgba(85,150,126, 0.05)';
  } else {
    element[0].style.backgroundColor = '#55967e';
  }
};
