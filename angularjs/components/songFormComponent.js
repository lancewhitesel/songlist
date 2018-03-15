(function (angular) {
  'use strict';

  angular
    .module('songlist')
    .component('addSongForm', {  
      templateUrl: 'components/songFormTemplate.html',
      controller: SongFormController
    });

  function SongFormController($http) {
    const $ctrl = this;

    $ctrl.$onInit = function() {
      /*
      $http.get('/list').then(function(list) {
        console.log('list! ', list);
        $ctrl.songs = list.data;
      });
      */
    };
  }

})(angular);