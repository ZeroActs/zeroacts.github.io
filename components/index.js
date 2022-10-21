const navMenu = document.querySelector('.nav-menu');
const btnNav = document.querySelector('.hamburger-btn');
btnNav.addEventListener('click',()=>{
  navMenu.classList.toggle('show-nav');
  btnNav.classList.toggle('rotate')
})
