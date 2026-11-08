
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {

  const opened = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(opened));

  menuButton.setAttribute(
    "aria-label",
    opened ? "Fechar menu" : "Abrir menu"
  );

});

nav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "Abrir menu");

  });

});

document.addEventListener("keydown", event => {

  if (event.key === "Escape" && nav.classList.contains("open")) {

    nav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "Abrir menu");

    menuButton.focus();

  }

});
