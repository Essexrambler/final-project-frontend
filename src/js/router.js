angular.module('finalProject')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/templates/home.html'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/templates/usersIndex.html',
    controller: 'UsersIndexController as usersIndex'
  })
  .state('usersNew', {
    url: '/users/new',
    templateUrl: '/templates/usersNew.html',
    controller: 'UsersNewController as usersNew'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/templates/usersShow.html',
    controller: 'UsersShowController as usersShow'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/templates/usersEdit.html',
    controller: 'UsersEditController as usersEdit'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginController as login'
  })
  .state('logout',{
    url: 'logout',
    templateUrl: '/templates/logout.html',
    controller: 'LogoutController as logout'
  })
  .state('animalsIndex', {
    url: '/animals',
    templateUrl: '/templates/animalsIndex.html',
    controller: 'AnimalsIndexController as animalsIndex'
  })
  .state('animalsShow', {
    url: '/animals/:id',
    templateUrl: '/templates/animalsShow.html',
    controller: 'AnimalsShowController as animalsShow'
  })
  .state('animalsEdit', {
    url: '/animals/:id/edit',
    templateUrl: '/templates/animalsEdit.html',
    controller: 'AnimalsEditController as animalsEdit'
  })
  .state('adoptsIndex', {
    url: '/adopts',
    templateUrl: '/templates/adoptsIndex.html',
    controller: 'AdoptsIndexController as adoptsIndex'
  })
  .state('adoptsShow', {
    url: '/adopts/:id',
    templateUrl: '/templates/adoptsShow.html',
    controller: 'AdoptsShowController as adoptsShow'
  })
  .state('adoptsEdit', {
    url: '/adopts/:id/edit',
    templateUrl: '/templates/adoptsEdit.html',
    controller: 'AdoptsEditController as adoptsEdit'
  });



  $urlRouterProvider.otherwise('/');
}
