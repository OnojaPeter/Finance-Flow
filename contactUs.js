// ${"#plus1"}.on("click", function(){
//     alert("working");
// })
let plus = document.getElementById("plus1");
let content = document.getElementById("text");
let minus = document.getElementById("minus1");
let allPlus = document.getElementsByClassName('plus')
let arrayPlus = document.querySelectorAll('.plus')
let arrayContent = document.querySelectorAll('.content')
let arrayMinus = document.querySelectorAll('.minus') 



let items = document.getElementById("menuItems");
let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");



console.log(arrayPlus);
console.log(arrayContent);
console.log(arrayMinus);

arrayPlus.forEach((plusqq, index) => {
    console.log({ plusqq });
    console.log(index);
    plusqq.addEventListener("click", () => {
        if (arrayContent[index].style.display !="flex"){
            arrayContent[index].style.display = "flex";
            arrayMinus[index].style.display ="flex"
            plusqq.style.display = "none"
          } else {
            arrayContent[index].style.display = "none";
            arrayMinus[index].style.display ="none"
          }
    });
    
});

arrayMinus.forEach((minusqq, index) =>{
    minusqq.addEventListener("click", () => {
        if (arrayContent[index].style.display !="none"){
            arrayContent[index].style.display = "none";
            minusqq.style.display ="none"
            arrayPlus[index].style.display = "block"
          } 
    });
})

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