'use strict';

define(["app"], function(app) {
  app.lazy.controller('HeaderController', ['$scope', "$rootScope", 'Global', function ($scope, $rootScope, Global) {
    $scope.global = Global;

    // $scope.menu = [{
    //   'title': 'Articles',
    //   'link': 'articles'
    // }, {
    //   'title': 'Create New Article',
    //   'link': 'articles/create'
    // }];

    $scope.isCollapsed = false;

    // for debug
    // $scope.startIndexComponent = function() {
    //   $rootScope.$broadcast("start-index");
    // };

  }]);
});
