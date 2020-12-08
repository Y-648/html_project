var topSubmenu=document.getElementsByClassName('top-submenu')[0];
var allClass=document.getElementsByClassName('all-class')[0];
var iArrbot=allClass.getElementsByClassName('i-arrbot')[0];
var topHead=document.getElementsByClassName('top-head')[0];
allClass.onmouseover=function(){
topSubmenu.style.display='block';
iArrbot.style.backgroundPosition='-66px -2px';
}
console.log(topHead);
topHead.onmouseleave=function(){
topSubmenu.style.display='none';
iArrbot.style.backgroundPosition='-100px -2px';
}