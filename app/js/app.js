(function () {

    var app = angular.module('store', []);

    app.controller('StoreController', function($scope) {
        this.salesItems = [];
        $scope.addSalesItem = function () {
            var newSalesItem = {
                quantity: 1,
                name: 'Eternal Teeshirt',
                exclPrice: 260.86956,
                taxRate: 0.15
            };
            newSalesItem.inclPrice = $scope.addGst(newSalesItem.exclPrice, newSalesItem.taxRate);
            newSalesItem.taxPrice = $scope.calculateGst(newSalesItem.exclPrice, newSalesItem.taxRate);

            $scope.store.salesItems.push(newSalesItem);
        };

        $scope.resetSalesItems = function () {
            var confirmMessage = "You are about to remove all the products from the cart!\r\n 'Cancel' to stop, 'OK' to continue.";
            if ($scope.store.salesItems.length && window.confirm(confirmMessage)) {
                $scope.store.salesItems = [];
            }
        };

        $scope.addSalesItem = function () {
            var newSalesItem = {
                quantity: 1,
                name: 'Eternal Teeshirt',
                exclPrice: 260.86956,
                taxRate: 0.15
            };
            newSalesItem.inclPrice = $scope.addGst(newSalesItem.exclPrice, newSalesItem.taxRate);
            newSalesItem.taxPrice = $scope.calculateGst(newSalesItem.exclPrice, newSalesItem.taxRate);
            $scope.store.salesItems.push(newSalesItem);
        };
        
        $scope.calculateGst = function(price, taxRate) {
            return (price * (taxRate * 100) / 100).toFixed(2);
        };
        
        $scope.addGst = function(price, taxRate) {
            return (price * 1 + ( price * (taxRate * 100) / 100 )).toFixed(2);
        };

        $scope.getTaxTotal = function(){
            var total = 0;
            console.log("$scope.store.salesItems = ", $scope.store.salesItems);

            for(var i = 0; i < $scope.store.salesItems.length; i++){
                var salesItem = $scope.store.salesItems[i];
                total += (salesItem.taxPrice * salesItem.quantity);
            }
            return total.toFixed(2);
        };
        
        $scope.getExclTotal = function(){
            var total = 0;
            console.log("$scope.store.salesItems = ", $scope.store.salesItems);

            for(var i = 0; i < $scope.store.salesItems.length; i++){
                var salesItem = $scope.store.salesItems[i];
                total += (salesItem.exclPrice * salesItem.quantity);
            }
            return total.toFixed(2);
        };

        $scope.getInclTotal = function(){
            var total = 0;
            console.log("$scope.store.salesItems = ", $scope.store.salesItems);

            for(var i = 0; i < $scope.store.salesItems.length; i++){
                var salesItem = $scope.store.salesItems[i];
                total += (salesItem.inclPrice * salesItem.quantity);
            }
            return total.toFixed(2);
        };


    });

    //defaultSalesItems data
    // var defaultSalesItems = [
    //     {
    //         quantity: 1,
    //         name: 'Eternal Teeshirt',
    //         exclPrice: 260.86956,
    //         taxRate: 0.15
    //     },
    //     {
    //         quantity: 1,
    //         name: 'Eternal Teeshirt',
    //         exclPrice: 260.86956,
    //         taxRate: 0.15
    //     },
    //     {
    //         quantity: 1,
    //         name: 'Eternal Teeshirt',
    //         exclPrice: 260.86956,
    //         taxRate: 0.15
    //     }
    // ];


})();