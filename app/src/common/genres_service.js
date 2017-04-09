'use strict';

angular.module('myApp')
.factory('GenresService', function($resource){
  var url ='http://104.197.128.152:8000/v1';
  var title;
  var id;
    return $resource(url, {}, {
      getAll: {
        method:'GET',
        params:{},
        url:'http://104.197.128.152:8000/v1/genres'
      },
      post: {
        method:'POST',
        params:{},
        url:'http://104.197.128.152:8000/v1/genres'
      },
      update: {method:'PUT', params: {}},
      remove: {method:'DELETE'},
      getSingle: {
        title:title,
        method:'GET',
        params:{},
        url:'http://104.197.128.152:8000/v1/tracks'
      },
      getSingleById:{
        method:'GET',
        params:{},
        url:'http://104.197.128.152:8000/v1/tracks/:id' +'',
      }
    });});
