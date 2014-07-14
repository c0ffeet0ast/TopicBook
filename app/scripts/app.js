angular.module("topicBook",['ngRoute','topicBook.topic']);

angular.module("topicBook.topic",['topicBook.topic.controller','topicBook.topic.service']);
angular.module("topicBook.topic.controller",[]);
angular.module("topicBook.topic.service",['ngResource']);

angular.module("topicBook")
 .config(['$routeProvider', function ($routeProvider) {
  $routeProvider
   .when('/topics', 
    { templateUrl: 'scripts/topic/template/topic-list.tmpl.html',
      controller: 'topicListCtrl',
      resolve: {
        topics : function (Topic) {
         return Topic.query().$promise;
        }
      } 
    })
   .when('/topics/:topicId', 
    { templateUrl: 'scripts/topic/template/topic-detail.tmpl.html',
      controller: 'topicDetailCtrl',
      resolve: {
        topic : function (Topic, $route) {
          return Topic.get({
            topicId : $route.current.params.topicId 
          }).$promise;
        }
      }
    })
   .when('/new-topic', 
    { templateUrl: 'scripts/topic/template/topic-new.tmpl.html',
      controller: 'topicAddCtrl'
    })
   .otherwise({ redirectTo: '/topics' });
 }])
 .controller('topicMainCtrl', ['$scope', function ($scope) {
   $scope.topicListViewType = 'grid';
   $scope.searchInfo = {
    topicname : ''
   };

   $scope.toggletopicListViewType = function () {
    if($scope.topicListViewType === 'grid'){
      $scope.topicListViewType = 'list';
    }else{
      $scope.topicListViewType = 'grid';
    }
   };

   $scope.search = function (searchInfo) {
    $scope.$broadcast('search:newSearchInfo',searchInfo);
   };
 }]);