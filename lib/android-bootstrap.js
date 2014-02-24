/**
@toc

@param {Object} scope (attrs that must be defined on the scope (i.e. in the controller) - they can't just be defined in the partial html). REMEMBER: use snake-case when setting these on the partial!
TODO

@param {Object} attrs REMEMBER: use snake-case when setting these on the partial! i.e. my-attr='1' NOT myAttr='1'
TODO

@dependencies
TODO

@usage
partial / html:
TODO

controller / js:
TODO

//end: usage
*/

'use strict';

angular.module('Ardenexal.android-bootstrap', []).directive('androidTopNav', [ function () {
    return {
        templateUrl: '../views/android-top-nav.html',
        restrict: 'E',
        controller: function($scope){
            $scope.toggle = function(){
                var toggle = true;
                if(toggle = !toggle){
                    $animate.addClass('.slide-in');
                }else{
                    $animate.removeClass('.slide-out');
                }
            }
        }
    };
}])
    .directive('androidSideMenu', [ function(){
        return {
            templateUrl: function(element,attr){
                return attr.templateUrl ? attr.templateUrl : 'Set a template using the templateUrl attribute'
            },
            restrict: 'E'

        };
    }]);