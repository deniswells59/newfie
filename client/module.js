'use strict';
$(document).ready(function() {
  $('.modal-trigger').leanModal();
});

const _isNotMobile = (function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return !check;
    })();

const app = angular.module('myApp',
  ['ui.router', 'satellizer', 'ngMaterial', 'ngMap', 'ngTable', 'angular-scroll-animate']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'loginCtrl'
    })
    .state('registerNav', {
      url: '/register',
      templateUrl: '/html/register/registerNav.html',
    })
    .state('registerNav.registerLang', {
      url: '/languages',
      templateUrl: '/html/register/registerLang.html',
      controller: 'registerCtrl'
    })
    .state('registerNav.registerInterests', {
      url: '/interests',
      templateUrl: '/html/register/registerInterests.html',
      controller: 'registerCtrl'
    })
    .state('registerNav.registerLocation', {
      url: '/location',
      templateUrl: '/html/register/registerLocation.html',
      controller: 'registerCtrl'
    })
    .state('registerNav.confirm', {
      url: '/confirm',
      templateUrl: '/html/register/regConfirm.html',
      controller: 'registerCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: '/html/landing/home.html',
      controller: 'homeCtrl'
    })
    .state('dashboard', {
      url: '/dash',
      templateUrl: '/html/dash/dash.html',
      controller: 'dashCtrl',
      resolve: {
        user: function(User) {
          return User.getUser();
        }
      }
    })
    .state('dashboard.profile', {
      url:'/profile',
      templateUrl: '/html/dash/profile.html',
      controller: 'dashCtrl'
    })
    .state('dashboard.guideIntro', {
      url:'/guide/intro',
      templateUrl: '/html/dash/guideIntro.html',
      controller: 'dashCtrl'
    })
    .state('dashboard.guide', {
      url:'/guide',
      templateUrl: '/html/dash/guide.html',
      controller: 'dashCtrl'
    })
    .state('dashboard.companions', {
      url:'/companions',
      templateUrl: '/html/dash/companions.html',
      controller: 'dashCtrl'
    })
    .state('connect', {
      url: '/connect',
      templateUrl: '/html/connect/connect.html',
      controller: 'connectCtrl',
      resolve: {
        users: function(User) {
          return User.getAll({query: {}, page: 0});
        }
      }
    })
    .state('profileView', {
      url: '/profile/:id',
      templateUrl: '/html/profile/profile.html',
      controller: 'profileCtrl',
      resolve: {
        user: function(User) {
          return User.getUser();
        },
        profile: function(User, $stateParams) {
          return User.getOne($stateParams.id)
            .then(res => {
              return res.data;
            });
        }
      }
    })

    $urlRouterProvider.otherwise('/');

    $authProvider.google({
      clientId: '50096600078-riejkgcrs9iqkhbdmbfg07neh3ksodvg.apps.googleusercontent.com'
    });

    $authProvider.facebook({
      name: 'facebook',
      clientId: '1255637804476855',
      url: '/auth/facebook',
      responseType: 'token',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
    });
});
