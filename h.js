

var hh = document.querySelector(".scrol")
var ss = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var bb = document.body
  
 window.addEventListener("scroll" ,()=>{
    var scr = document.documentElement.scrollTop;
    hh.style.width = `${(scr / ss)*100}%`
 })










