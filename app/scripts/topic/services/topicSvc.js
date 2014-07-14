angular.module("topicBook.topic.service")
 .value('mogolabApiKey','0VndlEmBR-6sB4GtocIS4i_-kWoY3pPa') //개인 API-KEY로 변경해야 함
 .factory('Topic', ['$resource','mogolabApiKey',function ($resource,mogolabApiKey) {
  var topicResource = $resource('https://api.mongolab.com/api/1/databases/topicbook/collections/topics/:topicId?apiKey=:apiKey',{
   apiKey: mogolabApiKey
  },{
   'update' : {
    method: 'PUT'
   }
  });

  return topicResource;
 }]);