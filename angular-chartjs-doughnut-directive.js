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

      var segmentShowStroke = node.getAttribute('data-chartjs-segment-show-stroke');
      if (segmentShowStroke) {
        options.segmentShowStroke = segmentShowStroke;
      }

      var segmentStrokeColor = node.getAttribute('data-chartjs-segment-stroke-color');
      if (segmentStrokeColor) {
        options.segmentStrokeColor = segmentStrokeColor;
      }

      var segmentStrokeWidth = node.getAttribute('data-chartjs-segment-stroke-width');
      if (segmentStrokeWidth) {
        options.segmentStrokeWidth = segmentStrokeWidth;
      }

      var percentageInnerCutout  = node.getAttribute('data-chartjs-percentage-inner-cutout');
      if (percentageInnerCutout) {
        options.percentageInnerCutout = percentageInnerCutout;
      }

      var animation = node.getAttribute('data-chartjs-animation');
      if (animation) {
        options.animation = animation;
      }

      var animationSteps = node.getAttribute('data-chartjs-animation-steps');
      if (animationSteps) {
        options.animationSteps = animationSteps;
      }

      var animationEasing = node.getAttribute('data-chartjs-animation-easing');
      if (animationEasing) {
        options.animationEasing = animationEasing;
      }

      var animationRotate = node.getAttribute('data-chartjs-animate-rotate');
      if (animationRotate) {
        options.animationRotate = animationRotate;
      }

      var animationScale = node.getAttribute('data-chartjs-animate-scale');
      if (animationScale) {
        options.animationScale = animationScale;
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
