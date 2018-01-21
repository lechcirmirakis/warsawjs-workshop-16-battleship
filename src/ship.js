class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  isOnField() {
    // if (this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10) {
    //   return true;
    // } else {
    //   return false;
    // }
    return this.x >= 0 && this.x < 10 && this.y >= 0 && this.y < 10;
  }

};

export default Ship;
