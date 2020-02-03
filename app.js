class Alligator {
  constructor(
      name = '',
      color = '',
      gender = '',
      weight = 0,
      tailLengthInch = 0,
      teethSize = '',
      ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
      }
      eat(food) {
      console.log(`Chomp chomp all the ${food}ies.`)
    }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
}


class Bee {
  constructor(name, color, gender, weight, tailLengthInch, teethSize){
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight =  weight;
    this.tailLegthInch = tailLengthInch;
    this.teethSize = teethSize;

  }
eat(food){
  console.log(`Chomp chomp all the ${food}ies.`)
}
speak(noise) {
  alert(`The ${this.constructor.name} says ${noise}!`)
  
}
}

let ally = new Alligator("Ally", "Green", "F", 200, 60, "big");
let honeyBee = new Bee ("Bev", "Yellow", "F", 250, 1, "small" )


ally.speak("AHHHHHHHHH")