  // 子菜单的显示和隐藏及图标变化
  var topSubmenu=document.getElementsByClassName('top-submenu')[0];
  var allClass=document.getElementsByClassName('all-class')[0];
  var iArrbot=allClass.getElementsByClassName('i-arrbot')[0];
  var topHead=document.getElementsByClassName('top-head')[0];
  allClass.onmouseover=function(){
  topSubmenu.style.display='block';
  iArrbot.style.backgroundPosition='-66px -2px';
 }
 topHead.onmouseleave=function(){
  topSubmenu.style.display='none';
  iArrbot.style.backgroundPosition='-100px -2px';
 }
 //图片轮播{
  var index=0;
  var step;
 function changeImg(){
 var imgArr=['./image/01.jpg','./image/27.jpg','./image/28.png','./image/29.jpg','./image/30.jpg'];
     if(index==imgArr.length-1){
      index=0;
     }else{
      index++;
     }
     for(var i=0;i<document.getElementsByClassName('flash_bar')[0].children.length;i++){
      document.getElementsByClassName('flash_bar')[0].children[i].className='no';
      document.getElementsByClassName('flash_bar')[0].children[i].index=i;
      document.getElementsByClassName('flash_bar')[0].children[i].onmouseover=function(){
          clearInterval(step);
          index=this.index-1;
          changeImg();
      }
      document.getElementsByClassName('flash_bar')[0].children[i].onmouseout=function(){
          clearInterval(step);
          step=setInterval('changeImg()',3000);
      }
     }
     document.getElementsByClassName('flash_bar')[0].children[index].className='dq';
     document.getElementById('slide-img').src=imgArr[index];
 }
  step=setInterval('changeImg()',3000);