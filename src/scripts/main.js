//  changing colors by time of day
const time = new Date().getHours();
console.log(time);

// sections
const $day = document.querySelector("#day");

if (time > 6 && time <= 12) {
  document.querySelector("#day").innerHTML = " morning";
} else if (time >= 12 && time <= 18) {
  document.querySelector("#day").innerHTML = " afternoon";
} else if (time >= 18 && time <= 24) {
  document.querySelector("#day").innerHTML = " evening";
} else {
  document.querySelector("#day").innerHTML = " night";
}

const typedText = document.querySelector(".title2__container__typed");
const typedCursor = document.querySelector(".title2__container__cursor");
const textArray = [
  "a Telecommunication Engineer",
  "a Front End developer",
  "a Football lover",
  "a Travel addict",
];
const typingDelay = 90;
const erasingDelay = 80;
const newTextDelay = 800; // Delay between current and next text

let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!typedCursor.classList.contains("typing"))
      typedCursor.classList.add("typing");
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    typedCursor.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!typedCursor.classList.contains("typing"))
      typedCursor.classList.add("typing");
    typedText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    typedCursor.classList.remove("typing");
    textArrayIndex+=1;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) 
  setTimeout(type, newTextDelay + 250);
});
