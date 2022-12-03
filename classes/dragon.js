// Your code here
class Dragon{
  constructor(name, color){
    this.name = name;
    this.color =color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons){
    return dragons.map(dragon => dragon.name)
  }

  // my experimentation with static methods
  static dragonsBreathFire(...dragons){
    dragons.forEach(dragon => console.log(dragon.breathesFire()))
  }
}



const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));

console.log(Dragon.dragonsBreathFire(puff, toothless));

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}