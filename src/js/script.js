document.addEventListener('DOMContentLoaded', () => {
  let menuMobileVisible = false;

  const menuMobile = document.querySelector('#listMenu');
  const btnMenu = document.querySelector('.btn-menu');
  const iconBtnMenu = document.getElementById('icon-btn-menu');
  console.log(iconBtnMenu);

  btnMenu.addEventListener('click', () => {
    if (!menuMobileVisible) {
      menuMobile.style.display = 'flex';
      menuMobileVisible = !menuMobileVisible;
      document.body.style.overflow = 'hidden';

      iconBtnMenu.classList.remove('bi-list');
      iconBtnMenu.classList.add('bi-x-lg');
      
    } else {
      menuMobile.style.display = 'none';
      menuMobileVisible = !menuMobileVisible;
      document.body.style.overflow = 'auto';
      iconBtnMenu.classList.remove('bi-x-lg');
      iconBtnMenu.classList.add('bi-list');
    }
  });


});