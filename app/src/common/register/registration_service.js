(function(){
    'use strict';

angular.module('myApp')
  .service('RegistrationService', function ($resource) {
    var URL = 'http://52.37.109.230:8001/employee';
    return $resource(URL, {}, {
      getAll: {
        method: 'GET',
        params: {},
        url: 'http://104.197.128.152:8000/v1/genres'
      },
      post: {
        method: 'POST',
        params: {},
        url: URL
      },
      update: {
        method: 'PUT',
        params: {}
      },
      remove: {
        method: 'DELETE'
      },
      registrationEmployee: {
        method: 'POST',
        headers : {"Content-Type": "application/x-www-form-urlencoded"},
        params: {},
        url: URL
      },
      getSingleById: {
        method: 'GET',
        params: {},
        url: 'http://104.197.128.152:8000/v1/tracks/:id' + '',
      }
    });
  });
})();