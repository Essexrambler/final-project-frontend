angular.module('finalProject')
  .factory('Adopt', Adopt);

Adopt.$inject = ['$resource', 'API_URL'];
function Adopt($resource, API_URL) {
  return new $resource(`${API_URL}/adopts/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
