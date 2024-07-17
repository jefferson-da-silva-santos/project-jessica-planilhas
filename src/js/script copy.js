document.addEventListener('DOMContentLoaded', () => {
  let menuMobileVisible = false;
  const menuMobile = document.querySelector('#listMenu');
  const btnMenu = document.querySelector('.btn-menu');
  const iconBtnMenu = document.getElementById('icon-btn-menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  function openMenu() {
    menuMobile.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    iconBtnMenu.classList.remove('bi-list');
    iconBtnMenu.classList.add('bi-x-lg');
    menuMobileVisible = true;
  }

  function closeMenu() {
    menuMobile.style.display = 'none';
    document.body.style.overflow = 'auto';
    iconBtnMenu.classList.remove('bi-x-lg');
    iconBtnMenu.classList.add('bi-list');
    menuMobileVisible = false;
  }

  btnMenu.addEventListener('click', () => {
    if (!menuMobileVisible) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  function handleResize() {
    if (window.innerWidth > 900) {
      menuMobile.style.display = 'flex';
      document.body.style.overflow = 'auto';
    } else {
      closeMenu();
    }
  }

  window.addEventListener('resize', handleResize);

  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o comportamento padrão de seguir o link
      closeMenu();
      const targetId = link.getAttribute('href').substring(1);

      // Scroll suave para a seção alvo
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  handleResize(); // Chama handleResize uma vez para configurar corretamente o estado inicial do menu

});
