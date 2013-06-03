/*!
 * AngularJS Chart.js Doughnut Directive
 *
 * Copyright 2013 Stephane Begaudeau
 * Released under the MIT license
 */
angular.module('angular.directives-chartjs-doughnut', []).directive('angChartjsDoughnut', [function () {
  var compilationFunction = function (templateElement, templateAttributes, transclude) {
    if (templateElement.length === 1) {
      var node = templateElement[0];

      var width = node.getAttribute('data-chartjs-width') || '400';
      var height = node.getAttribute('data-chartjs-height') || '400';

      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
      canvas.setAttribute('data-chartjs-model', node.getAttribute('data-chartjs-model'));

      var options = {};

      var potentialOptions = [
        {key:'data-chartjs-segment-show-stroke', value:'segmentShowStroke', isBoolean: true},
        {key:'data-chartjs-segment-stroke-color', value:'segmentStrokeColor'},
        {key:'data-chartjs-segment-stroke-width', value:'segmentStrokeWidth'},
        {key:'data-chartjs-percentage-inner-cutout', value:'percentageInnerCutout'},
        {key:'data-chartjs-animation', value:'animation', isBoolean: true},
        {key:'data-chartjs-animation-steps', value:'animationSteps'},
        {key:'data-chartjs-animation-easing', value:'animationEasing'},
        {key:'data-chartjs-animate-rotate', value:'animateRotate', isBoolean: true},
        {key:'data-chartjs-animate-scale', value:'animateScale', isBoolean: true}
      ];

      for (var i = 0; i < potentialOptions.length; i++) {
        var aKey = node.getAttribute(potentialOptions[i].key);
        if (aKey && potentialOptions[i].isBoolean) {
          if ('true' === aKey) {
            options[potentialOptions[i].value] = true;
          } else if ('false' === aKey) {
            options[potentialOptions[i].value] = false;
          }
        } else if (aKey) {
          options[potentialOptions[i].value] = aKey;
        }
      }

      var chart = new Chart(canvas.getContext('2d'));
      node.parentNode.replaceChild(canvas, node);

      return {
        pre: function preLink(scope, instanceElement, instanceAttributes, controller) {
          var expression = canvas.getAttribute('data-chartjs-model');
          scope.$watch(expression, function (newValue, oldValue) {
            var callback = scope[node.getAttribute('data-chartjs-on-animation-complete')];
            if (callback !== undefined) {
              options.onAnimationComplete = callback;
            }

            chart.Doughnut(newValue, options);
          }, true);
        },
        post: function postLink(scope, instanceElement, instanceAttributes, controller) {}
      };
    }
  };

  var chartjsDoughnut = {
    compile: compilationFunction,
    replace: true
  };
  return chartjsDoughnut;
}]);
