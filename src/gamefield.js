import Cell from './cell.js'; // import "kratki"
import ShipsSet from './ShipsSet';

const GameField = () => {

  const field = document.createElement('div');
  field.className = 'field';
  const shipSet = new ShipsSet();
  shipSet.generateSeveralShips(15);
  shipSet.shipsPlacment.forEach((row) => {
    row.forEach((cell) => {
      field.append(Cell(cell));
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
