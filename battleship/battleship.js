class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
  }

  hit() {
    // function that increases the number of ‘hits’ in your ship.
  }

  isSunk() {
    // should be a function that calculates it based on their length and the number of ‘hits’.
  }
}

class Battleship extends Ship {
  constructor(length, name) {
    super(length);
    this.name = name;
  }
}

const carrier = new Battleship(5, "Carrier");
const battleship = new Battleship(4, "Battleship");
const destroyer = new Battleship(3, "Destroyer");
const submarine = new Battleship(3, "Sumbarine");
const patrolBoat = new Battleship(2, "Patrol Boat");
console.log(carrier);
