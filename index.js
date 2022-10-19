
/*====SHOW MENU====*/
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
  }
  showMenu('nav-toggle','nav-menu')
  
  /*====REMOVE MENU MOBILE====*/
  const navLink = document.querySelectorAll('.drop-bio')
  
  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  /*====End of Show Left MENU====*/

//   start of reveal

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;

        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }

}
// end of reveal


//   start of reveal2

window.addEventListener('scroll', reveal2);

function reveal2() {
    var reveals2 = document.querySelectorAll('.reveal2');

    for(var i = 0; i < reveals2.length; i++) {
        var windowheight = window.innerHeight;

        var revealtop2 = reveals2[i].getBoundingClientRect().top;

        var revealpoint2 = 150;

        if(revealtop2 < windowheight - revealpoint2) {
            reveals2[i].classList.add('active2');
        }
        else {
            reveals2[i].classList.remove('active2');
        }
    }

}
// end of reveal2

//   start of reveal3

window.addEventListener('scroll', reveal3);

function reveal3() {
    var reveals3 = document.querySelectorAll('.reveal3');

    for(var i = 0; i < reveals3.length; i++) {
        var windowheight = window.innerHeight;

        var revealtop3 = reveals3[i].getBoundingClientRect().top;

        var revealpoint3 = 150;

        if(revealtop3 < windowheight - revealpoint3) {
            reveals3[i].classList.add('active3');
        }
        else {
            reveals3[i].classList.remove('active3');
        }
    }

}
// end of reveal3

// start of active link
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('live'))
        this.classList.add('live')


    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))
// end of active link


/*====SHOW SCROLL TOP====*/
function scrollTop(){
    const navil = document.getElementById('scroll-top')
    if(this.scrollY >= 560) {
        navil.classList.add('show-scroll');
    }
    else {
        navil.classList.remove('show-scroll')
    }

}
window.addEventListener('scroll', scrollTop)