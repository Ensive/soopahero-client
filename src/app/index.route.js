export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'app/posts/posts.html',
      controller: 'PostsController',
      controllerAs: 'vm'
    })

    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'app/posts/posts.html',
      controller: 'PostsController',
      controllerAs: 'vm'
    })

    .state('exploits', {
      url: '/exploits',
      templateUrl: 'app/posts/posts.html',
      controller: 'PostsController',
      controllerAs: 'vm'
    })

    .state('users', {
      url: '/heroes',
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
