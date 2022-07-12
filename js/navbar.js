'use strict'
var navbarItems = document.querySelectorAll('.navbar-nav li')
var menuButton = document.querySelector(".navbar-toggler");
var menuItems = document.querySelector(".navbar-collapse");
var menuIsOpen = false;


menuButton.addEventListener("click",function(){

        if(menuIsOpen == false){
            menuItems.classList.remove("d-none");
            menuIsOpen = true;
        }
        else{
            menuItems.classList.add("d-none");
            menuIsOpen = false;
        }
    
});

window.addEventListener("resize", function(){
    if(window.innerWidth<1200){
        menuItems.classList.add("d-none");
        menuIsOpen = false;
    }

});


if(window.innerWidth<1200){
    menuItems.classList.add("d-none");
}


function changeColor(i){
    navbarItems[i].className += ' active';
}

