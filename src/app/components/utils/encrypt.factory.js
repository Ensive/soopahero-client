export function encryptFactory($window) {
  'ngInject';

  var sha256 = $window.sha256;
  var sha224 = $window.sha224;

  delete $window.sha256;
  delete $window.sha224;

  return {
    sha256: sha256,
    sha224: sha224
  };

}
