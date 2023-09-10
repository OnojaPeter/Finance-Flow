let items = document.getElementById("menuItems");
let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
    if (items.style.display !="flex"){
    items.style.display = "flex";
    closeMenu.style.display = "block"
    openMenu.style.display = "none"
    } else {
    items.style.display = "none";
    }
  });

  closeMenu.addEventListener("click", () => {
    if (items.style.display !="none"){
    items.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "block";
    } else {
       
    }
  });