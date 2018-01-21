import GameField from './gamefield.js';
import GameState from './GameState.js';

const app = document.getElementById('app');
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
const notification = document.createElement('div');
notification.className = 'notification';

const render = () => {
  wrapper.append(GameField('computer'));
  wrapper.append(GameField('user'));
};

const clear = () => {
  wrapper.innerHTML = '';
}

GameState.reRender = () => {
  clear();
  render();
  notification.innerText = "It`s " + GameState.shootingTurn + " shoots";
};

const main = () => {
  GameState.startGame();
  notification.innerText = "It`s " + GameState.shootingTurn + " shoots";
  app.append(notification);
  app.append(wrapper);
  render();
}

main();
