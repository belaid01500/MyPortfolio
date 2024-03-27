let menuNav = document.querySelector(".header-nav");
menuNav.addEventListener("click", () => {
  afficheMenuBurger();
  closeMenuBurger();
});

let overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  afficheMenuBurger();
  closeMenuBurger();
});

let openBurger = document.querySelector(".menu-burger");
openBurger.addEventListener("click", () => {
  afficheMenuBurger();
});

let closeBurger = document.querySelector(".close-burger");
closeBurger.addEventListener("click", () => {
  closeMenuBurger();
});

function afficheMenuBurger() {
  menuNav.classList.add("open");
  overlay.classList.add("open");
}

function closeMenuBurger() {
  menuNav.classList.remove("open");
  overlay.classList.remove("open");
}

new Typewriter("h1", {
  deleteSpeed: 40,
})
  .changeDelay(40)
  .typeString("<span> BELAID GHERBI <br></span> ")
  .pauseFor(300)
  .typeString("<span> Developpeur Front-End</span>")
  .pause(1000)
  .typeString('<span style="color: #ec5e5f"> HTML !</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('<span style="color: #55b3b4"> CSS !</span>')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #f7ba40"> JavaScript !</span>')
  .pauseFor(1000)
  .deleteChars(12)
  .start();
