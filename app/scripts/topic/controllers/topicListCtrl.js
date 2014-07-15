angular.module("topicBook.topic.controller")
	.controller('topicListCtrl',['$scope', 'topics', 'Topic','$location', function($scope,topics,Topic,$location){
		$scope.topicList = topics;
		//temp = topics;

		$scope.$on('search:newSearchInfo',function(e, searchInfo){
			var searchQuery = '{"topicname" : {"$regex": ".*'+searchInfo.topicname+'.*","$options": "i"} }';
			$scope.topicList = Topic.query({ q : searchQuery});
			searchtopic = $scope.topicList;
		});

		$scope.newTopic = function () {
			$location.url("/new-topic");
		};
	}]);