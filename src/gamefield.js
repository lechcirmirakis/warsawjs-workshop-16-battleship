import Cell from './cell.js'; // import "kratki"
import GameState from './GameState.js';

const GameField = (type) => {
  const field = document.createElement('div');
  field.className = `field ${type}`;
  const shipSet = GameState.shipsSet[type];
  const cells = GameState.cells[type];
  shipSet.shipsPlacment.forEach((row, x) => {
    row.forEach((cell, y) => {
      field.append(new Cell(x, y, cell, type, cells[x][y].attempted).htmlNode);
    });
  });
  // let i = 0;
  // while (i < 100) { // petla while "wstrzykuje" kratki cell * 100 do fielda (planszy);
  //   field.append(Cell());
  //   i++;
  // }
  //
  return field;
}

export default GameField;
