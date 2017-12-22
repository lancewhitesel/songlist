(function (angular) {
  'use strict';

  angular
    .module('songlist')
    .component('songList', {  
      templateUrl: 'components/songListTemplate.html',
      controller: SongListController
    });

  function SongListController($http) {
    var $ctrl = this;

    $ctrl.$onInit = function() {
      $http.get('/list').then(function(list) {
        console.log('list! ', list);
        $ctrl.songs = list.data;
      });
    };
  }

})(angular);