$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.hide').addClass("sticky");
    }else{
      $('.hide').removeClass("sticky");
    }
  });
});