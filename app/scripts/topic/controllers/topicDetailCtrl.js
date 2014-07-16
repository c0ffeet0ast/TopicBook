angular.module("topicBook.topic.controller")
	.controller('topicDetailCtrl',['$scope', 'topic', 'Topic','$route','$location', function($scope,topic,Topic,$route,$location){
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

		$scope.urlremove = function(bookmark) {
			 var index = $scope.topic.bookmark.indexOf(bookmark);
  			$scope.topic.bookmark.splice(index, 1); 

			var urlremovePromise = Topic.update({topicId : topic["_id"].$oid},angular.extend(
				{}, $scope.topic, {'_id':undefined})).$promise;


			urlremovePromise.then(function(){
				$route.reload();
				$scope.edit();

			});	

			

		};

		$scope.remove = function() {
			var removePromise = Topic.remove({topicId : topic["_id"].$oid}).$promise;

			removePromise.then(function(){
				$location.url("/topics");
			});	
		};

		$scope.edit = function() {
			$scope.isEditing = true;
		};

		$scope.ok = function() {
			$scope.isEditing = false;
		}
	}]);