function toggleMenu(){
    var menuToggle= document.querySelector('.burger');
    var home= document.querySelector('.homeSec');
    var menu= document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    home.classList.toggle('active')
    menu.classList.toggle('active')
}
function closeMenu(){
    var menuToggle= document.querySelector('.burger');
    var menu= document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')
}
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}