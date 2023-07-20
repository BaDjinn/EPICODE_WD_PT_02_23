function toggleMenu(){
const menu = document.getElementById("menu");
menu.classList.toggle('menu-open')

const hamburgerMenu = document.querySelector('.hamburger-menu')
hamburgerMenu.classlist.toggle('open')
};

window.addEventListener("DOMContentLoaded", function(evt){
    const menuBtn = document.getElementById("menuBtn")

    menuBtn.addEventListener("click", function(){
        toggleMenu();
    })
})



