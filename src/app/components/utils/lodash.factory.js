export function lodashFactory($window) {
  'ngInject';

  var _ = $window._;
  delete $window._;

  return _;
}
