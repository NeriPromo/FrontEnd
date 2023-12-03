// Exibe o popup
function showPopup() {
   document.getElementById("filter-popup").style.display = "block";
   document.getElementById("popup-about").style.display = "block"
}

// Oculta o popup
function hidePopup() {
    document.getElementById("filter-popup").style.display = "none";
    document.getElementById("popup-about").style.display = "none"
 }

 
function showDelete() {
   event.preventDefault();
   document.getElementById("filter-delete").style.display = "block";
   document.getElementById("filter-delete-div").style.display = "block"
}

function hideDelete() {
   document.getElementById("filter-delete").style.display = "none";
}

function showMenu(div) {
   document.getElementById(div).style.display = "block";
   document.getElementById("filter-popup").style.display = "block";
}

function hideMenu(div) {
   document.getElementById(div).style.display = "none";
   document.getElementById("filter-popup").style.display = "none"
}

function categoryFilter() {
   var categoryMenu = document.getElementById("categoryMenu");
   
   if (categoryMenu.style.display === "block") {
     categoryMenu.style.display = "none";
   } else {
     categoryMenu.style.display = "block";
   }
 }




 