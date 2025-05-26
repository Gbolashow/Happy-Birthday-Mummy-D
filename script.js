
const messages = [
  "You're an inspiration, Funke. Every moment with you brings joy and light.",
  "Your strength, kindness, and grace are the definition of true beauty.",
  "Thank you for being an incredible sister-in-law. You're truly the best!",
  "You are a heart of gold. You carry yourself with such humility and class — a true role model.",
  "The world needs more Funkes. If every woman had your wisdom and warmth, the world would be better.",
  "Your kindness is your power. The way you treat others is an inspiration — soft, yet strong."
];

function showMessage(index) {
  if (index <= 2) {
    const box = document.getElementById('messageBox');
    box.style.display = 'block';
    box.textContent = messages[index];
  } else {
    const box2 = document.getElementById('messageBox2');
    box2.style.display = 'block';
    box2.textContent = messages[index];
  }
}
