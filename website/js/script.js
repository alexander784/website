const header= document.querySelector("header");

window.addEventLister("scroll", function(){
  header.classList.toggle("sticky",window.scrollY > 0);
})