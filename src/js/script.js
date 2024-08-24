//Variaveis atribuidas para tratar o menu
const menu = document.getElementById("listMenu");
const btnMenuLink = document.getElementById("btn-menu-link");
const iconBtnMenu = document.getElementById("icon-btn-menu");
const linksMenu = document.querySelectorAll(".link-menu");
let menuOpen = false;
// Variaveis do details
const detailsList = document.querySelectorAll(".caixa-pergunta");

document.addEventListener("DOMContentLoaded", () => {

  btnMenuLink.addEventListener("click", (event) => {
    event.preventDefault();
    menuOpen ? closeMenu(menu) : openMenu(menu);
    menuOpen = !menuOpen;
  });

  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth > 900) {
        document.body.style.overflow = "auto";
        menu.style.visibility = "visible";
      } else {
        menuOpen = false;
        closeMenu(menu);
      }
    }, 100)
  );

  linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuOpen) {
        closeMenu(menu);
        menuOpen = !menuOpen;
      }
    });
  });

  detailsList.forEach((currentDetail, currentIndex) => {
    currentDetail.addEventListener("click", () => {
      detailsList.forEach((detail, index) => {
        if (index !== currentIndex) {
          detail.open = false;
        }
      });
    });
  });

  criarObservacao('.hidden-inicio', 'show-inicio');
  criarObservacao('.hidden-sobre', 'show-sobre');
  criarObservacao('.hidden-youtube', 'show-youtube');
  criarObservacao('.hidden-beneficios', 'show-beneficios');
  criarObservacao('.hidden-youtube-video', 'show-youtube-video');
});

function openMenu(menu) {
  menu.style.visibility = "visible";
  iconBtnMenu.classList.remove("bi-list");
  iconBtnMenu.classList.add("bi-x-lg");
  document.body.style.overflow = "hidden";
}

function closeMenu(menu) {
  menu.style.visibility = "hidden";
  iconBtnMenu.classList.remove("bi-x-lg");
  iconBtnMenu.classList.add("bi-list");
  document.body.style.overflow = "auto";
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function criarObservacao(classeOculta, classeMostrar) {
  const observacao = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classeMostrar);
      } else {
        return;
      }
    });
  });

  const elementosOcultos = document.querySelectorAll(classeOculta);
  elementosOcultos.forEach((element) => observacao.observe(element));
}


