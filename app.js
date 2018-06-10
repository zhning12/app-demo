angular.module('app',['duScroll'])
.controller('scrollContrl',function ($scope) {
    $scope.todoList = [
        'first',
        'second',
        'third',
        'forth',
        'fifth',
        'sixth',
        'seventh'
    ];
    var top = 400;
    // $document.scrollTop(top).then(function () {
    //     console && console.log('You just scroll to the top');
    //   });
  });