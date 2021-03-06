//import '@iconfu/svg-inject'

//  changing colors by time of day
document.addEventListener("DOMContentLoaded", function () {
const time = new Date().getHours();
console.log(time);

const $navBarHome = document.querySelector('.navBar-home')
$navBarHome.onmouseenter = function(){
  document.querySelector('#navBar-home').innerHTML = 'Home'
document.querySelector('#img-navBar-home').style.display= 'none';
}

$navBarHome.onmouseleave = function(){
  document.querySelector('#navBar-home').innerHTML = ''
  document.querySelector('#img-navBar-home').style.display= '';
} 

const $navBarDocument = document.querySelector('.navBar-document')
$navBarDocument.onmouseenter = function(){
  document.querySelector('#navBar-document').innerHTML = 'Resume'
document.querySelector('#img-navBar-document').style.display= 'none';
}

$navBarDocument.onmouseleave = function(){
  document.querySelector('#navBar-document').innerHTML = ''
  document.querySelector('#img-navBar-document').style.display= '';
}


const $navBarContact = document.querySelector('.navBar-contact')
$navBarContact.onmouseenter = function(){
  document.querySelector('#navBar-contact').innerHTML = 'Contact'
document.querySelector('#img-navBar-contact').style.display= 'none';
}
$navBarContact.onmouseleave = function(){
  document.querySelector('#navBar-contact').innerHTML = ''
  document.querySelector('#img-navBar-contact').style.display= '';
}



// sections
const $day = document.querySelector("#day");

if (time > 6 && time <= 12) {
  document.querySelector("#day").innerHTML = " morning";
} else if (time >= 12 && time <= 18) {
  document.querySelector("#day").innerHTML = " afternoon";
} else if (time >= 18 && time <= 21) {
  document.querySelector("#day").innerHTML = " evening";
} else {
  document.querySelector("#day").innerHTML = " night";
}

const typedText = document.querySelector(".title2__container__typed");
const typedCursor = document.querySelector(".title2__container__cursor");
const textArray = [
  "Gianina Rossi",
  "a Telecommunication Engineer",
  "a Web developer",
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



  // On DOM Load initiate the effect
  if (textArray.length) 
  setTimeout(type, newTextDelay + 250);
});





