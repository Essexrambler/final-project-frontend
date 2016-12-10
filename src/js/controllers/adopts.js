angular.module('finalProject')
  .controller('AdoptsIndexController', AdoptsIndexController)
  .controller('AdoptsShowController', AdoptsShowController)
  .controller('AdoptsEditController', AdoptsEditController);


AdoptsIndexController.$inject = ['Adopt'];
function AdoptsIndexController(Adopt) {
  const adoptsIndex = this;

  adoptsIndex.all = Adopt.query();
}

AdoptsShowController.$inject = ['Adopt', '$state'];
function AdoptsShowController(Adopt, $state) {
  const adoptsShow = this;


  adoptsShow.adopt = Adopt.get($state.params);

  function deleteAdopt() {
    adoptsShow.adopt.$remove(() => {
      $state.go('adoptsIndex');
    });
  }

  adoptsShow.delete = deleteAdopt;
}

AdoptsEditController.$inject = ['Adopt', '$state'];
function AdoptsEditController(Adopt, $state) {
  const adoptsEdit = this;

  adoptsEdit.adopt = Adopt.get($state.params);

  function update() {
    adoptsEdit.adopt.$update(() => {
      $state.go('adoptsShow', $state.params);
    });
  }

  this.update = update;

}
