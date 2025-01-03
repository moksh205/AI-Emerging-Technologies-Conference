const textArray = ["Innovating Today for Tomorrow.", "Shaping the Future with AI.", "Advancing Humanity through Technology."];
const dynamicText = document.getElementById("dynamicText");
let arrayIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;

function typeEffect() {
    if (charIndex < textArray[arrayIndex].length) {
        dynamicText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        setTimeout(eraseEffect, delayBetweenTexts);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        dynamicText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, erasingSpeed);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(typeEffect, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

const hamburger = document.querySelector(".hamburger");
const navLinksMobile = document.querySelector(".nav-links-mobile");

hamburger.addEventListener("click", () => {
    navLinksMobile.classList.toggle("active");
});