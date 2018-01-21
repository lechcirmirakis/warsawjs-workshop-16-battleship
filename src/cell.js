// tworze funkcje ktora tworzy diva (bedzie to kratka )
const Cell = (ship) => {
  const cell = document.createElement('div');
  cell.className = `cell ${ship === 1 ? 'has-ship' : ''}`; //template string

  return cell;

}

export default Cell;
