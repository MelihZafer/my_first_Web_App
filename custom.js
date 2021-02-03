var nav = document.getElementById("nav");
var top1 = document.getElementsByClassName("burg")[0];
var line = document.getElementById("line1");
var line3 = document.getElementById("line3");
var line2 = document.getElementById("line2");

function oc(){
    nav.classList.toggle("nav1");
    top1.classList.toggle("top");
    line.classList.toggle("line");
    line3.classList.toggle("line");
    line2.classList.toggle("line-color");

}
var menus = document.getElementsByClassName("home");
var menus1 = document.getElementsByClassName("home1");
var icon = document.getElementById("icon");
function openclose(){
for(var i = 0; i<menus.length; i++){
    if(i==0){
        icon.style.transform=" rotate(360deg)";
    }
    if(menus[i].style.display == "block")
    menus[i].style.display = "none";
    else{
        icon.style.transform=" rotate(180deg)";
        menus[i].style.display = "block";
    }
}}
