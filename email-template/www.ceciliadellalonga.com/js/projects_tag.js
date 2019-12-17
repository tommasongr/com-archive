$("#editorial").tooltip({'wrapper':'body'});
   
    $(document).ready(function(){
          $(".item").css("opacity",1);
          $(".item").mouseover(function(){
                  $(this).css("opacity",1);                                          
                  $(".trasp").not(this).css('opacity',0.30); 
          });
          $(".item").mouseout(function(){
                 $(".trasp").css('opacity',1);
          });
    });