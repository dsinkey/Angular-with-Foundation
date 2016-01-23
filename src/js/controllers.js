'use strict';
angular.module('myApp.controllers', ['myApp.filters'])
  .controller('NgAnimateCtrl', ['$scope', function ($scope) {
    $scope.items = [
      { text: "Study Angular", completed: false },
      { text: "Study Python", completed: false },
      { text: "Study AWS", completed: false },
      { text: "Get job", completed: false },
      { text: "Morera Loan", completed: false },
      { text: "Sumpter Loan", completed: false }
    ];

    $scope.inputText = "";
    $scope.addItem = function ($event) {
      if ($event.keyCode !== 13) return;

      $scope.items.push({
        text: $scope.inputText,
        completed: false
      });
      $scope.inputText = ""
    };
  }])

  .animation('.item', function() {
    if (Modernizr.cssanimations) return angular.noop;

    return {
      enter: function(element, done) {
        element.css({'opacity': 0, 'margin-left': '-230px'});

        element.animate({'opacity': 1, 'margin-left': 0}, 500, done);
      },

      leave: function(element, className, done) {
        element.animate({'opacity': 0, 'margin-left': -230}, 500, done);
      }
    }
  });
