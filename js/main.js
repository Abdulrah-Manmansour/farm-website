$(document).ready(function(){
    //start loading page
    $(window).on("load",function(){
     $("body").css("overflow-y","auto");
     $(".loading").fadeOut(1000);
    });
    //smoth scroll
    $("nav li a").on("click",function(){
    $("html,body").animate({
      scrollTop:$('#' + $(this).data("scroll")).offset().top - 95
    },1000)
    });
   
      });

//scroll to top button 
var myButton=document.getElementById("btop");
//function on scroll
window.onscroll=function(){
    'use strict';
    //cheak if pageY more than 300px
    if(window.pageYOffset >= 300){
        //make button appear
        myButton.style.display="block";
    }
    //else make button disaperar
    else{

        myButton.style.display="none";
    }
}
//when click on button top and left be 0 with smoth scroll
myButton.onclick=function(){
    'use strict';
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
}


