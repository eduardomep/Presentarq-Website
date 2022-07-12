'use strict'
var imageGallery = document.querySelectorAll(".gallery-item");
var modalLightBox = document.querySelector(".modalLightBox");
var closeModalLightBox = document.querySelector(".closeModalLightBox");
var imageLightBox = document.querySelector(".imgLightBox");
var nextImageLightBox = document.querySelector(".nextImage");
var backImageLightBox = document.querySelector(".backImage");
var imageIndex = 0;




imageGallery.forEach(contar);

 function contar(item, index){
    item.addEventListener('click', () => {
        modalLightBox.classList.add("openLightBox");
        imageLightBox.src =item.firstElementChild.attributes[0].textContent;
        document.body.style.overflowY = "hidden";
        imageIndex = index;
        // console.log("el contador tiene: " + imageIndex)
    }
    )}   

    nextImageLightBox.addEventListener("click",function(){
        if (imageGallery.length == imageIndex+1){
            imageIndex = 0;
            imageLightBox.src =imageGallery[imageIndex].firstElementChild.attributes[0].textContent;
        }
        else if(imageGallery.length > imageIndex){
            imageIndex = imageIndex+1;
            imageLightBox.src =imageGallery[imageIndex].firstElementChild.attributes[0].textContent;
        }
   

        // console.log("el contador tiene: " + imageIndex);
        
    });

    backImageLightBox.addEventListener("click",function(){
        if (imageIndex == 0){
            imageIndex = imageGallery.length-1;
            imageLightBox.src =imageGallery[imageIndex].firstElementChild.attributes[0].textContent;
        }
        else if(imageGallery.length > imageIndex){
            imageIndex = imageIndex-1;
            imageLightBox.src =imageGallery[imageIndex].firstElementChild.attributes[0].textContent;
        }
   

        // console.log("el contador tiene: " + imageIndex);
        
    });


    closeModalLightBox.addEventListener("click",function(){
        modalLightBox.classList.remove("openLightBox");
        modalLightBox.classList.add("closedLightBox");
        document.body.style.overflowY = "scroll";
    // modalLightBox.style.display = "flex";
});


// document.body.onKeyDownHandler(event);

// function onKeyDownHandler(event) {

//     var codigo = event.which || event.keyCode;

//     console.log("Presionada: " + codigo);
     
//     if(codigo === 13){
//       console.log("Tecla ENTER");
//     }

//     if(codigo >= 65 && codigo <= 90){
//       console.log(String.fromCharCode(codigo));
//     }

     
// }