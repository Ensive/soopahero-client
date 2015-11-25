export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('users', {
      url: '/heroes',
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
