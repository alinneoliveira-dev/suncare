// Menu mobile
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");

menuButton.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
  menuButton.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  });
});

// Recomendações gerais de textura por tipo de pele.
const products = {
  oleosa: {
    label: "PELE OLEOSA",
    title: "Gel ou toque seco",
    text: "Texturas leves, em gel ou com acabamento matte, podem ajudar a reduzir a sensação de oleosidade ao longo do dia.",
    note: "DICA: procure opções não comedogênicas.",
    image: "static/img/protetor-oleosa.jpg",
    alt: "Protetor solar ilustrativo em embalagem lilás para pele oleosa."
  },
  seca: {
    label: "PELE SECA",
    title: "Fórmula cremosa e hidratante",
    text: "Protetores com textura cremosa e ingredientes hidratantes podem oferecer mais conforto para a pele que tende ao ressecamento.",
    note: "DICA: prefira uma textura que não deixe sensação de repuxamento.",
    image: "static/img/protetor-seca.jpg",
    alt: "Protetor solar ilustrativo em embalagem clara para pele seca."
  },
  mista: {
    label: "PELE MISTA",
    title: "Fluido de textura equilibrada",
    text: "Texturas fluidas e leves podem ser uma boa opção para quem tem áreas mais oleosas e outras mais secas.",
    note: "DICA: observe como o produto se comporta na zona T e nas bochechas.",
    image: "static/img/protetor-mista.jpg",
    alt: "Protetor solar ilustrativo em embalagem pêssego para pele mista."
  },
  sensivel: {
    label: "PELE SENSÍVEL",
    title: "Fórmula suave",
    text: "Produtos desenvolvidos para peles sensíveis, com fórmulas mais simples e adequadas à sua tolerância, podem ser uma alternativa.",
    note: "DICA: observe a composição e suspenda o uso se houver irritação.",
    image: "static/img/protetor-sensivel.jpg",
    alt: "Protetor solar ilustrativo em embalagem azul clara para pele sensível."
  },
  madura: {
    label: "PELE MADURA",
    title: "Proteção com hidratação",
    text: "Fórmulas hidratantes podem ajudar a manter o conforto da pele, que pode ficar mais seca com o passar dos anos.",
    note: "DICA: combine a proteção solar com uma rotina de hidratação.",
    image: "static/img/protetor-madura.jpg",
    alt: "Protetor solar ilustrativo em embalagem roxa para pele madura."
  }
};

const options = document.querySelectorAll(".product-option");
const productLabel = document.querySelector("#productLabel");
const productTitle = document.querySelector("#productTitle");
const productText = document.querySelector("#productText");
const productNote = document.querySelector("#productNote");
const featuredProduct = document.querySelector("#featuredProduct");

function showProduct(type) {
  const product = products[type];
  if (!product) return;

  options.forEach(option => {
    const active = option.dataset.product === type;
    option.classList.toggle("active", active);
    option.setAttribute("aria-selected", String(active));
  });

  productLabel.textContent = product.label;
  productTitle.textContent = product.title;
  productText.textContent = product.text;
  productNote.textContent = product.note;
  featuredProduct.src = product.image;
  featuredProduct.alt = product.alt;
}

options.forEach(option => {
  option.addEventListener("mouseenter", () => showProduct(option.dataset.product));
  option.addEventListener("focus", () => showProduct(option.dataset.product));
  option.addEventListener("click", () => showProduct(option.dataset.product));
});

// A navegação por teclado também funciona na vitrine.
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.focus();
  }
});
