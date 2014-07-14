angular.module("topicBook.topic.controller")
	.controller('topicListCtrl',['$scope', 'topics', 'Topic', function($scope,topics,Topic){
		$scope.topicList = topics;
		temp = topics;

		$scope.$on('search:newSearchInfo',function(e, searchInfo){
			var searchQuery = '{"topicname" : {"$regex": ".*'+searchInfo.topicname+'.*","$options": "i"} }';
			$scope.topicList = Topic.query({ q : searchQuery});
			searchtopic = $scope.topicList;
		});
	}]);