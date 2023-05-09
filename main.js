window.addEventListener('scroll', onScroll)
onScroll() 

function onScroll() {
  showNaveOnScroll()
  showBackToTopButtonOn ()
}
function showNaveOnScroll() {
  if (scrollY > 0) {
    const nav = document.getElementById("navigation").classList;
    nav.add("scroll");
  } else {
    const nav = document.getElementById("navigation").classList;
    nav.remove("scroll");
  }
}
function showBackToTopButtonOn (){
  if (scrollY > 1400) {
    const nav = document.getElementById("backToTopButton").classList;
    nav.add("show");
  } else {
    const nav = document.getElementById("backToTopButton").classList;
    nav.remove("show");
  }
}

function openMenu() {
   const menu = document.body.classList.add('menu-expanded');
}
function closeMenu() {
    const close = document.body.classList.remove('menu-expanded');
}

//Animations

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home 
  .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`); /*Template strings */
