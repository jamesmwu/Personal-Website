//Adds the characters one by one
function onTick() {
  const span = text.querySelectorAll("span")[char]; //Get all spans generated
  span.classList.add("ani1"); //Adding the 'fade' class to every single span
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

function cycle() {
  //Enables random display
  // var randOption = Math.floor(Math.random() * funFacts.length);

  //Sequential display
  if (i === funFacts.length) i = 0;

  document.getElementById("fact").innerHTML = funFacts[i];
  i++;
}

var i = 0;
var funFacts = [
  "Outside of programming, some of my hobbies include playing basketball, badminton, running, drawing, writing, and playing violin!",
  "I'm red green colorblind!",
  "I love public speaking, and have participated in mock trial as well as advanced two levels through the International Rotary 4-Way Test speech competition. I've even presented a Ted Talk before!",
  "I once fought a coyote alone, bare-handed.",
  "I'd really like to run a marathon or triathlon some day.",
  "",
];

const text = document.querySelector(".james");
const strText = text.textContent; //This gives actual text of class "james".
const splitText = strText.split(""); //Returns array of each individual letter

text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  if (splitText[i] === " ")
    text.innerHTML += '<span style="--i:' + (i + 1) + ';">&nbsp;</span>';
  else
    text.innerHTML +=
      '<span style="--i:' + (i + 1) + ';">' + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50); //Every 50 milliseconds, timer will call "onTick"
