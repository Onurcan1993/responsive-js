
var itemt =[".product1",".company1",".connect1"];
var items =[".product",".company",".connect"]
var enableMenu =false;
$(".product1-elem-h").hide();
$(".company1-elem-h").hide();
$(".connect1-elem-h").hide();
$(".product1-elem-h-up").hide();
$(".company1-elem-h-up").hide();
$(".connect1-elem-h-up").hide();
for (let i=0;i<itemt.length;i++)
      {
        $(itemt[i]).click(()=>{
            if(!enableMenu){
6
                $( itemt[i]+"-elem-h" ).slideDown( 1000);
                $(itemt[i]+"-elem-h"+"-down").hide("slow");
                $(itemt[i]+"-elem-h"+"-up").show("slow");
                
                enableMenu=true;
            }
            else{

                $( itemt[i]+"-elem-h" ).slideUp( 1000);
                $(itemt[i]+"-elem-h"+"-up").hide("slow");
                $(itemt[i]+"-elem-h"+"-down").show("slow");
                
                
                enableMenu=false;
            }
            
          });
        
        $(itemt[i]+"-act").click(()=>{
            if(!enableMenu){
                $(itemt[i]+"-act").css("border-bottom","solid 2px #fff");
            }
            else{
                $(itemt[i]+"-act").css("border-bottom",0);
            }
        });
      }


$(document).ready(function(){

    var enableMenu1 =false;

    $(".menu").hide(); 
    $(".btn-close").hide();
    $(".product-elem").hide();
    $(".company-elem").hide();
    $(".connect-elem").hide();

    $(".product-elem-up").hide();
    $(".company-elem-up").hide();
    $(".connect-elem-up").hide();

    $( ".btn-ham" ).on( "click", function() {
    
        $(".btn-ham").hide("fast","linear");
        $(".btn-close").show("fast","linear");
        $(".header-main").hide(50,"linear");
        $(".menu").show(450,"linear");

    
      } );
      $(".btn-close").click(()=>{
        $(".btn-close").hide("fast","linear");
        $(".btn-ham").show("fast","linear");
        $(".menu").hide(50,"linear");
        $(".header-main").show(250,"linear");
      })

      for (let i=0;i<items.length;i++)
      {
        $(items[i]).click(()=>{
            if(!enableMenu1){
                $( items[i]+"-elem" ).slideDown( 1000);
                $(items[i]+"-elem"+"-down").hide("slow");
                $(items[i]+"-elem"+"-up").show("slow");
                
                enableMenu1=true;
            }
            else{
                $( items[i]+"-elem" ).slideUp( 1000);
                $(items[i]+"-elem"+"-up").hide("slow");
                $(items[i]+"-elem"+"-down").show("slow");
                
                
                enableMenu1=false;
            }
            
          });
      }

});

