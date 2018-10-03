(function() {
    'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        var outputMessage = "";
        var reportStatus = "";

        $scope.checkFunction = function() {
            var entry = $scope.lunchItems;

            // First time with no typing will be null or undefined.
            if (entry === null || entry === undefined) {
                outputMessage = "Please Enter Data First...";
                reportStatus = "error";
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
                    reportStatus = "success";
                } else if (outExistingItems.length > 3) {
                    outputMessage = "Too Much!";
                    reportStatus = "success";
                } else if (outExistingItems.length === 0) {
                    outputMessage = "Please Enter Data First...";
                    reportStatus = "error";
                }
            }
        };

        // Output Message Function
        $scope.sayMessage = function() {
            return outputMessage;
        };

        // Color Select Function
        $scope.reportStatus = function() {
            return reportStatus;
        };
    }

})();