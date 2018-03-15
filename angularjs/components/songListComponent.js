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

    const URL_MAP = {
      'www.youtube.com': 'YouTube'
    }

    $ctrl.getSource = function(url) {
      var host;
      try {
        host = new URL(url).hostname
      } catch(error) {
        console.warn('Invalid URL for song: ', url);
      }
      
      return URL_MAP[host] || 'Unknown';
    }

    
    $ctrl.$onInit = function() {
      $http.get('/list').then(function(list) {
        console.log('list! ', list);
        $ctrl.songs = list.data;
      });
    };
  }

})(angular);