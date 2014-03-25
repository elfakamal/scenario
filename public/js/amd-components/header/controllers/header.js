'use strict';

define(["app", "services/global"], function(app) {
  app.amd.controller('HeaderController', ['$scope', "$rootScope", 'Global', function ($scope, $rootScope, Global) {
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
    //   $rootScope.$emit("start-splash");
    // };

  }]);
});
