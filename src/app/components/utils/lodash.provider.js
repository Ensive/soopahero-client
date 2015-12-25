export function lodashProvider() {
  'ngInject';

  this.$get = function ($window) {
    var _ = $window._;
    delete( $window._ );
    return( _ );
  };
}
