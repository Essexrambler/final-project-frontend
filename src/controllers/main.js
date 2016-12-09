angular.module('finalProject')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$state', '$rootScope'];
function MainController($auth, $state, $rootScope) {
  const main =this;

  main.isLoggedIn = $auth.isAuthenticated;
  main.message = null;

  function logout() {
    $auth.logout()
      .then(() => {
        $state.go('usersIndex');
        main.message = 'You must be logged in to go there!';
      });
  }

  const protectedStates = ['usersEdit', 'usersNew'];

  function secureState(e, toState) {
    main.message = null;
    console.log(toState);
    // e.prevetDefault();
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)){
      e.preventDefault();
      main.message = 'You must be logged in to go there!';
      $state.go('login');
    }
  }
  $rootScope.$on('$stateChangeStart', secureState);

  main.logout = logout;
}
