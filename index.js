const magicBtn = document.getElementById("magicBtn");
const statusText = document.getElementById("status");
const heroArt = document.getElementById("heroArt");
const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");

const lines = [
  "Fresh mode loaded ⚡",
  "Color blast active 🌈",
  "Poster energy on 🔥",
  "New layout vibe ready 🎉"
];

const words1 = ["HOT", "POP", "NEW", "LOUD"];
const words2 = ["WOW", "GO", "FUN", "BOLD"];

magicBtn.addEventListener("click", () => {
  statusText.textContent = lines[Math.floor(Math.random() * lines.length)];
  sticker1.textContent = words1[Math.floor(Math.random() * words1.length)];
  sticker2.textContent = words2[Math.floor(Math.random() * words2.length)];

  heroArt.classList.remove("pop");
  void heroArt.offsetWidth;
  heroArt.classList.add("pop");
});