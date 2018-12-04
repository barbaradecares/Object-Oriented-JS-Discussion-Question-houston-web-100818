const eventArea = document.getElementById("event_area");
const imageArea = document.getElementById("image_area");

const restartButton = document
  .getElementById("restart")
  .addEventListener("click", function() {
    uni = new Unicorn();
    uni.restart();
  });

const attackButton = document
  .getElementById("attack")
  .addEventListener("click", () => uni.attack());

const defendButton = document
  .getElementById("defend")
  .addEventListener("click", () => uni.defend());

const healButton = document
  .getElementById("heal")
  .addEventListener("click", () => uni.heal());

const breakdanceButton = document
  .getElementById("breakdance")
  .addEventListener("click", () => uni.breakdance());

const eatButton = document
  .getElementById("eat")
  .addEventListener("click", () => uni.eatCronut());

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000;
  }
  restart() {
    while (eventArea.hasChildNodes()) {
      eventArea.removeChild(eventArea.lastChild);
    }
    appendTexts("Out on the street, ready to go!", "new");
  }
  attack() {
    appendTexts("'ATTAAAAAAAAAK!''", "attack");
  }

  defend() {
    appendTexts("You put sunglasses on.", "defend");
  }

  heal() {
    appendTexts("You feel refreshed after yoga.", "heal");
  }

  breakdance() {
    appendTexts("It's really spinning class", "breakdance");
  }

  eatCronut() {
    appendTexts("You've gained 1000 health points.", "eat");
    uni.health += 1000;
    ("eat");
    console.log(uni.health);
  }
}

const appendTexts = (text, imageWord) => {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  eventArea.prepend(div);
  imageArea.className = imageWord;
};
