/**
 * The main controller for the sales screen.:
 * - adding & removing sales items to cart
 * - adds totals
 */

 angular.module('store')
     .controller('SalesScreenController', function TodoCtrl($scope, CurrencyCalc) {
        'use strict';

        this.salesItems = [];

        $scope.resetSalesItems = function () {
            var confirmMessage = "You are about to remove all the products from the cart!\r\n 'Cancel' to stop, 'OK' to continue.";
            if ($scope.salesScreen.salesItems.length && window.confirm(confirmMessage)) {
                $scope.salesScreen.salesItems = [];
            }
        };

        $scope.addSalesItem = function () {
            var newSalesItem = {
                quantity: 1,
                name: 'Eternal Teeshirt',
                exclPrice: 260.86956,
                taxRate: 0.15
            };
            newSalesItem.inclPrice = CurrencyCalc.addGst(newSalesItem.exclPrice, newSalesItem.taxRate);
            newSalesItem.taxPrice = CurrencyCalc.calculateGst(newSalesItem.exclPrice, newSalesItem.taxRate);
            $scope.salesScreen.salesItems.push(newSalesItem);
        };

        $scope.getTaxTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.salesScreen.salesItems.length; i++){
                var salesItem = $scope.salesScreen.salesItems[i];
                total += (salesItem.taxPrice * salesItem.quantity);
            }
            return total.toFixed(2);
        };
        
        $scope.getExclTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.salesScreen.salesItems.length; i++){
                var salesItem = $scope.salesScreen.salesItems[i];
                total += (salesItem.exclPrice * salesItem.quantity);
            }
            return total.toFixed(2);
        };

        $scope.getInclTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.salesScreen.salesItems.length; i++){
                var salesItem = $scope.salesScreen.salesItems[i];
                total += (salesItem.inclPrice * salesItem.quantity);
            }
            return total.toFixed(2);
        };

    });