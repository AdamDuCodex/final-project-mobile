//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

//Hamburger menu
const menu_btn = document.querySelector('#hamburger');
const mobile_menu = document.querySelector('#mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  console.log("Menu Button");
  mobile_menu.classList.toggle('is-active');
  console.log("Mobile Nav is Active");
});

mobile_menu.addEventListener ('click', function () {
  mobile_menu.classList.toggle('is-active');
  console.log("Mobile Menu");
  menu_btn.classList.toggle('is-active');
});