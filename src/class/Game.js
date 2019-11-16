
// class definition
class Game {
  constructor() {
  }

  startGame() {
    console.log("game started, foo!");
  }
}


// used from somewhere else
const game = new Game();
game.startGame();