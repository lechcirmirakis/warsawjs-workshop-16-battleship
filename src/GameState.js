import ShipsSet from './ShipsSet.js';

class GameState {
  constructor() {
    this.shootingTurn = null;
    this.reRender = null;
    this.interval = null;
    this.shipsSet = {
      user: new ShipsSet(),
      computer: new ShipsSet(),
    };
    this.cells = {
      user: this.shipsSet.user.shipsPlacment.map((row) => {
        return row.map((cell) => {
          return {
            attempted: cell ? cell.attempted : false
          };
        })
      }),
      computer: this.shipsSet.computer.shipsPlacment.map((row) => {
        return row.map((cell) => {
          return {
            attempted: cell ? cell.attempted : false
          };
        });
      }),
    }
    this.makeRandomShot = this.makeRandomShot.bind(this);
  }

  startGame() {
    const players = ['computer', 'user'];
    this.shootingTurn = players[Math.round(Math.random())];
    if (this.shootingTurn === 'computer') {
      this.computerShot();
    }
  }

  switchTurn() {
    this.shootingTurn = `${this.shootingTurn === 'computer' ? 'user' : 'computer'}`;
    this.reRender();
    clearInterval(this.interval);
    if (this.shootingTurn === "computer") {
      this.computerShot();
    }
    
  }

  computerShot() {
    this.interval = setInterval(this.makeRandomShot, 1000);
  }

  makeRandomShot() {
    let x, y;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (this.shipsSet.user.shipsPlacment[x][y] && this.shipsSet.user.shipsPlacment[x][y].attempted);
    this.shipAttempt(x, y, 'user');

  }

  shipAttempt(x, y, fieldType) {
    this.cellAttempt(x, y, fieldType);
    if (this.shipsSet[fieldType].shipsPlacment[x][y]) {
      this.shipsSet[fieldType].shipsPlacment[x][y].attemptShip();
    } else {
      this.switchTurn();
    }

  }

  cellAttempt(x, y, fieldType) {
    this.cells[fieldType][x][y].attempted = true;
    this.reRender();
  }
}

export default new GameState();
