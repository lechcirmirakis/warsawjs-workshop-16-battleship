import Ship from './ship.js'; // import statku

class ShipSet {
  constructor() {
    this.shipsPlacment = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.shipsPlacment[i] = new Array(10);
      for (let j = 0; j < 10; j++) {
        this.shipsPlacment[i][j] = 0;
      }
    }
  }

  generateRandomShip() {
    let ship;
    do {
      ship = new Ship(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)); // tworzymy nowy statek z randomowymi x,y
    }
    while (!ship.isOnField());
    return ship;
  }

  generateSeveralShips(number) {
    let ships = [];
    for (let i = 0; i < number; i++) {
      do {
        ships[i] = this.generateRandomShip();
      } while (!this.spaceIsAvailable(ships[i]));
      this.assignPlacement(ships[i]);
    }
  }

  spaceIsAvailable(ship) {
    // if (this.shipsPlacment[ship.x][ship.y] !== 0) {
    //   return false;
    // } else {
    //   return true
    // }
    return this.shipsPlacment[ship.x][ship.y] == 0;
  }

  assignPlacement(ship) {
    this.shipsPlacment[ship.x][ship.y] = 1;
  }

}

export default ShipSet;
