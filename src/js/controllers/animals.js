angular.module('finalProject')
  .controller('AnimalsIndexController', AnimalsIndexController)
  .controller('AnimalsShowController', AnimalsShowController)
  .controller('AnimalsEditController', AnimalsEditController);


AnimalsIndexController.$inject = ['Animal'];
function AnimalsIndexController(Animal) {
  const animalsIndex = this;

  animalsIndex.all = Animal.query();
}

AnimalsShowController.$inject = ['Animal', '$state'];
function AnimalsShowController(Animal, $state) {
  const animalsShow = this;


  animalsShow.animal = Animal.get($state.params);

  function deleteAnimal() {
    animalsShow.animal.$remove(() => {
      $state.go('animalsIndex');
    });
  }

  animalsShow.delete = deleteAnimal;
}

AnimalsEditController.$inject = ['Animal', '$state'];
function AnimalsEditController(Animal, $state) {
  const animalsEdit = this;

  animalsEdit.animal = Animal.get($state.params);

  function update() {
    animalsEdit.animal.$update(() => {
      $state.go('animalsShow', $state.params);
    });
  }

  this.update = update;

}
