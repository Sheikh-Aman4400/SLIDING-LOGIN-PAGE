// Sign In / Sign Up toggle
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Smooth greeting rotation
const greetings = [
  "Hello, Users!",
  "Merhaba, Users!",
  "Namaste, Users!",
  "Ni hao, Users!",
  "Bonjour, Users!"
];

const greetingElement = document.getElementById("greeting");
let index = 0;

setInterval(() => {
  // Fade out
  greetingElement.classList.add("fade-out");

  setTimeout(() => {
    // Change text
    index = (index + 1) % greetings.length;
    greetingElement.textContent = greetings[index];
    // Fade in
    greetingElement.classList.remove("fade-out");
  }, 800); // match CSS transition
}, 3000); // every 3 seconds