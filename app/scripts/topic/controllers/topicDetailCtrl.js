angular.module("topicBook.topic.controller")
	.controller('topicDetailCtrl',['$scope', 'topic', 'Topic','$route', function($scope,topic,Topic,$route){
		$scope.topic = topic;

		$scope.add = function(url) {
			$scope.topic.bookmark.push({"url" : url });
			//temp = $scope.topic;
			
			var addPromise = Topic.update({topicId : topic["_id"].$oid},angular.extend(
				{}, $scope.topic, {'_id':undefined})).$promise;

			addPromise.then(function(){
				$route.reload();
			});

			
		};
	}]);