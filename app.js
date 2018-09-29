(function() {
    'use strict';

    angular.module('Assignment1', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        var outputMessage = "";

        $scope.checkFunction = function() {
            var entry = $scope.lunchItems;

            // First time with no typing will be null or undefined.
            if (entry === null || entry === undefined) {
                outputMessage = "Please Enter Data First...";
            } else {
                var splitArr = entry.split(',');

                var outExistingItems = splitArr.map(function(name) {
                    var trimName = name.trim();

                    // Remove all of the empty items
                    if (trimName.length !== 0) {
                        return trimName;
                    }

                }).filter(Boolean);

                // Output the necessary message
                if (outExistingItems.length >= 1 && outExistingItems.length <= 3) {
                    outputMessage = "Enjoy!";
                } else if (outExistingItems.length > 3) {
                    outputMessage = "Too Much!";
                } else if (outExistingItems.length === 0) {
                    outputMessage = "Please Enter Data First...";
                }
            }
        };

        // Output Message Function
        $scope.sayMessage = function() {
            return outputMessage;
        }
    }

})();