angular.module("topicBook.topic.controller")
	.controller('topicAddCtrl',['$scope', 'Topic','$location', function($scope,Topic,$location){
		$scope.save = function (topic){
			var newTopic = new Topic();

			angular.extend(newTopic, topic);
			newTopic.bookmark = [];
			newTopic.$save(function(d){
				$location.url("/topics");
			})
		};
	}]);