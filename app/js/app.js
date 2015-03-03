(function () {

    var app = angular.module('store', []);

    app.controller('StoreController', function($scope) {
        this.salesItems = defaultSalesItems || [];
        $scope.addSalesItem = function () {
            var newSalesItem = {
                quantity: 1,
                name: 'Eternal Teeshirt',
                exclPrice: 260.86956,
                taxRate: 0.15
            };
            $scope.store.salesItems.push(newSalesItem);
        };
    });

    //default data
    var defaultSalesItems = [
        {
            quantity: 1,
            name: 'Eternal Teeshirt',
            exclPrice: 260.86956,
            taxRate: 0.15
        },
        {
            quantity: 1,
            name: 'Eternal Teeshirt',
            exclPrice: 260.86956,
            taxRate: 0.15
        },
        {
            quantity: 1,
            name: 'Eternal Teeshirt',
            exclPrice: 260.86956,
            taxRate: 0.15
        }
    ];


})();