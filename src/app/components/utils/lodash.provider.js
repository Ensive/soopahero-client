export function lodashProvider() {
  this.$get = function ($window) {
    'ngInject';
    var _ = $window._;
    delete( $window._ );
    return( _ );
  };
}
