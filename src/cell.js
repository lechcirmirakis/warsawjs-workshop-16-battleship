// tworze funkcje ktora tworzy diva (bedzie to kratka )
// const Cell = (ship) => {
//   const cell = document.createElement('div');
//   cell.className = `cell ${ship === 1 ? 'has-ship' : ''}`; //template string
//   cell.addEventListener('click', () => {
//   });
//
//   return cell;
// }
import gameState from './GameState.js';

class Cell {
  constructor(x, y, ship, fieldType, attempted) {
    this.htmlNode = document.createElement('div');
    this.htmlNode.className = `cell ${fieldType === 'computer' ? '' : ship ? 'has-ship' : ''}`; //template string
    this.htmlNode.className += `${attempted ? (ship ? ' hit' : ' miss') : ''}`
    this.x = x;
    this.y = y;
    this.fieldType = fieldType;


    if (fieldType === 'computer') {
      this.htmlNode.addEventListener('click', this.atemptCell.bind(this));
    }
    this.ship = ship;

  }

  atemptCell() {
    this.htmlNode.className += `${this.ship ? ' hit' : ' miss'}`;
    gameState.shipAttempt(this.x, this.y, this.fieldType);
  }
}

export default Cell;
