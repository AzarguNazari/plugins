$(document).ready(function(){
    
    $.fn.navigation = function(){
        
        $.each($(this).children("li"), function(){
            
            $(this).addClass("col-sm-2").css("backgroundColor", "green");
            
        });
        
    }
    
    
    $("ul.nav").navigation();
    
    
});