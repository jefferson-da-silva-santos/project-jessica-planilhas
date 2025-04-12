const menu = document.getElementById("listMenu");
const btnMenuLink = document.getElementById("btn-menu-link");
const iconBtnMenu = document.getElementById("icon-btn-menu");
const linksMenu = document.querySelectorAll(".link-menu");
const groupOption = document.querySelector(".groupOption-project");
let menuOpen = false;
let sessionProjectsExpanded = false;
// Variaveis do details
const detailsList = document.querySelectorAll(".caixa-pergunta");


const dataDialogProducts = [
  {
    id: 1,
    title: "Planilha para Consultório Odontológico",
    description: "Um sistema completo e eficiente",
    list: [
      "Cadastro de pacientes",
      "Histórico de dados e consultas dos pacientes",
      "Controle de Consultas e Agendamentos",
      "Agenda automática",
      "Controle das despesas",
      "Odontograma para orçamento",
      "Painel automático para Análise Financeira do Consultório",
      "Vídeo de instruções de uso e suporte contínuo",
    ],
    description2: "Personalize com sua logo e paleta de cores! Após a compra, entre em contato comigo e faça as alterações sem custo adicional!",
    video: "https://youtu.be/7J7fvxcvLus?si=SvXYX6ptyM3vIPvc",
    price1: "Excel: R$ 160",
    price2: "Google Sheets: R$ 140",
    linkButton1: "https://hotmart.com/pt-br/marketplace/produtos/planilha-para-consultorio-odontologico-excel/W98803019C",
    linkButton2: "https://hotmart.com/pt-br/marketplace/produtos/planilha-para-consultorio-odontologico-google-sheets/M98803397F",
  }
];

window.addEventListener("scroll", () => {
  document.querySelector(".groupNav").style.boxShadow =
    window.scrollY === 0 ? "none" : "0px 0px 10px #023d22";
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".img-service").forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundSize = "115%";
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundSize = "100%";
    });
  });

  document.querySelectorAll(".btn-ver-planilha").forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.parentElement.parentElement.firstElementChild.style.backgroundSize =
        "115%";
    });
    element.addEventListener("mouseout", () => {
      element.parentElement.parentElement.firstElementChild.style.backgroundSize =
        "100%";
    });
  });

  if (btnMenuLink) {
    btnMenuLink.addEventListener("click", (event) => {
      event.preventDefault();
      menuOpen ? closeMenu(menu) : openMenu(menu);
      menuOpen = !menuOpen;
    });
  }

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

  criarObservacao(".hidden-inicio", "show-inicio");
  criarObservacao(".hidden-sobre", "show-sobre");
  criarObservacao(".hidden-youtube", "show-youtube");
  criarObservacao(".hidden-beneficios", "show-beneficios");
  criarObservacao(".hidden-youtube-video", "show-youtube-video");
  criarObservacao(".hidden-inicio-img", "show-inicio-img");

  const btnVerPlanilhaConsultorio = getElement('.btn-ver-planilha-consultorio');

  if (btnVerPlanilhaConsultorio) {
    btnVerPlanilhaConsultorio.addEventListener('click', (e) => {
      e.preventDefault();
      openDialogProduct(dataDialogProducts[0]);
    });
  }

  const btnCloseDialogProduct = getElement('.close-dialog');
  if (btnCloseDialogProduct) {
    btnCloseDialogProduct.addEventListener('click', () => {
      closeDialogProduct();
    });
  }

});

function openDialogProduct(dataDialog) {
  getElement('.container-dialog').style.display = "flex";
  document.body.style.overflow = "hidden";
  getElement('.dialog-product__title').textContent = dataDialog.title;
  getElement('.dialog-product__description').textContent = dataDialog.description;
  getElement('.dialog-product__description2').textContent = dataDialog.description2;
  getElement('.dialog-product__list').innerHTML = dataDialog.list.map((item) => `<li class="dialog-product__item">${item}</li>`).join('');
  getElement('.dialog-product__link').href = dataDialog.video;
  getElement('.dialog-product__price1').textContent = dataDialog.price1;
  getElement('.dialog-product__price2').textContent = dataDialog.price2;
  getElement('.dialog-product__button1').href = dataDialog.linkButton1;
  getElement('.dialog-product__button2').href = dataDialog.linkButton2;
}

function closeDialogProduct() {
  getElement('.container-dialog').style.display = "none";
  document.body.style.overflow = "auto";
}


function openMenu(menu) {
  menu.style.visibility = "visible";
  iconBtnMenu.classList.remove("bi-list");
  iconBtnMenu.classList.add("bi-x-lg");
  document.body.style.overflow = "hidden";
}

function closeMenu(menu) {
  if (menu) {
    menu.style.visibility = "hidden";
    iconBtnMenu.classList.remove("bi-x-lg");
    iconBtnMenu.classList.add("bi-list");
    document.body.style.overflow = "auto";
  }
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


function getElement(className, multiple = false) {
  return multiple ? document.querySelectorAll(className) : document.querySelector(className);
}