/**
 * Services to handle Tax (GST) calculations 
 *
 */
angular.module('store')
    .factory('CurrencyCalc', function() {
        return {
            calculateGst: function(price, taxRate) {
                return (price * (taxRate * 100) / 100).toFixed(2);
            },
            addGst: function(price, taxRate) {
                return (price * 1 + ( price * (taxRate * 100) / 100 )).toFixed(2);
            }
      };
  });