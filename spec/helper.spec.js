export function sharedSetup() {
  beforeEach(angular.mock.module('soopaheroClient', ($provide, $translateProvider) => {
    $provide.factory('customLoader', ($q) => {
      return () => {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      };
    });
    $translateProvider.useLoader('customLoader');
    $translateProvider.translations('en', {});
  }));
}
