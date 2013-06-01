# Angular Chartjs Doughnut Directive

This directive let you use a chartjs doughnut thanks to an AngularJS directive.

## Requirements
- Chartjs: http://www.chartjs.org

Load Chart.js and this directive with the following code:
```html
<script type="text/javascript" src="Chart.js"></script>
<script type="text/javascript" src="angular-chartjs-doughnut-directive.js"></script>
```

The latest version of chartjs can be found on its official website:
http://www.chartjs.org

Add a dependency to the module in your own module.
```js
var myModule = angular.module('MyModule', ['angular.directives-chartjs-doughnut']);
```

Use the directive in your HTML files with the following code:
```html
<div ang:chartjs:doughnut data-chartjs-model="scopeVariableName"/>
```

### Parameters
- data-chartjs-model (string: required)
The name of the attribute in the $scope to use as input of the doughnut chart. The attribute in question should have the following structure:

```js
$scope.data = [
    {value: 30, color: '#F7464A'},
    {value: 50, color: '#E2EAE9'},
    {value: 100, color: '#D4CCC5'},
    {value: 40, color: '#949FB1'},
    {value: 120, color: '#4D5360'}
];
```

The value attribute should be a number and the color attribute should be a string. This string can represent a color in any CSS compatible ways (HEX notation, RGB, RGBA, HSL).

- data-chartjs-width (number: default 400). The width in pixel of the canvas.
- data-chartjs-height (number: default 400). The height in pixel of the canvas.
- data-chartjs-segment-show-stroke (boolean: default true). Whether we should show a stroke on each segment.
- data-chartjs-segment-stroke-color (string: default "#fff"). The colour of each segment stroke.
- data-chartjs-segment-stroke-width (number: default 2). The width of each segment stroke.
- data-chartjs-percentage-inner-cutout (number: default 50). The percentage of the chart that we cut out of the middle.
- data-chartjs-animation (boolean: default true). Whether we should animate the chart.
- data-chartjs-animation-steps (number: default 100). Amount of animation steps.
- data-chartjs-animation-easing (string: default "easeOutBounce"). Animation easing effect.
- data-chartjs-animate-rotate (boolean: default true). Whether we animate the rotation of the Doughnut.
- data-chartjs-animate-scale (boolean: default false). Whether we animate scaling the Doughnut from the centre.
- data-chartjs-on-animation-complete (string: default ""). Name of a function from the scope that will be called on animation completion.

A demonstration is visible in the file index.html.


## License
Copyright (c) 2013 Stephane Begaudeau
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Chart.js is available under the MIT license as specified on its github repository: https://github.com/nnnick/Chart.js
