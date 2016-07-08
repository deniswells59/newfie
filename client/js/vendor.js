require.config({
     baseUrl: '../../public/bower_components/',
     paths: {
         'jQuery': 'jquery/dist/jquery.min.js"',
         'materialize': '/Materialize/dist/js/materialize.min.js',
         'angular': 'angular/angular.min.js',
         'satellizer': 'satellizer/satellizer.min.js',
         'angular-ui-router': 'angular-ui-router/release/angular-ui-router.min.js',
         'angular-animate': 'angular-animate/angular-animate.min.js',
         'angular-aria': 'angular-aria/angular-aria.min.js',
         'angular-messages': 'angular-messages/angular-messages.min.js',
         'angular-material': 'angular-material/angular-material.min.js'
     },
     shim: {
         'materialize': ['jQuery'],
         'jQuery': { exports: ['$'] },
         'satellizer': ['angular'],
         'angular-ui-router': ['angular'],
         'angular-animate': ['angular'],
         'angular-aria': ['angular'],
         'angular-messages': ['angular'],
         'angular-material': ['angular', 'angular-animate', 'angular-aria', 'angular-messages'],
     }
 });

 require(['angular', 'app'], function(angular) {
    angular.bootstrap(document, ['newfie']);
});
