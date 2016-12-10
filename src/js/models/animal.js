angular.module('finalProject')
  .factory('Animal', Animal);

Animal.$inject = ['$resource', 'API_URL'];
function Animal($resource, API_URL) {
  return new $resource(`${API_URL}/animals/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
