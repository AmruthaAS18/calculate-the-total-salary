let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.up();
ladder.showStep();



//   ladder.up().up().down().showStep().up().showStep()