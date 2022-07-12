'use strict'
var filterButton = document.querySelectorAll(".render-type");
var projectImage = document.querySelectorAll(".project-image");



filterButton.forEach(filter);

function filter(item){
    item.addEventListener('click', () => {
 
        // mapping filter buttons
        filterButton.forEach((item)=>{
            // Remove class of all filter buttons
            item.classList.remove("render-type-active");
        });
        // adding class to pressed button
        item.classList.add("render-type-active");

        let selectedFillter = item.textContent.toLowerCase();

        
        projectImage.forEach((item)=>{
            // Remove class of all filter buttons
            if(item.classList.contains(selectedFillter)){
                item.parentElement.parentElement.style.display = "block";
            }
            else{
                item.parentElement.parentElement.style.display = "none";

            }
        });

        
    });
};