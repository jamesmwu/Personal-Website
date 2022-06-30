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
