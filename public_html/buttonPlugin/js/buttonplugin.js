$(document).ready(function(){
    
    
    $.fn.fashionButton = function(option){
        
        $this = $(this);
        
        var setting = {
            type : "cool",
            color : "yellow"
        };
        
        setting = $.extend(setting, option);
        
        switch(setting.type){
            
            case "cool":
                $this.addClass("coolButtonInside").html("<span>" + $this.text() + "</span>").wrap("<div class='coolButton'></div>");
                break;
                
            case "bitch":
                $this.addClass("bitchButton").html("<span>" + $this.text() + "</span>");
                break;
                
            case "round":
                
                $this.addClass("rotateButton " + setting.color);
                var firstWord = ($this.text().split(" "))[0];
                $this.html(firstWord + "<span class='rotateButton'>" + $this.substring(firstWord.length + 1) + "</span>");
                
                break;
            
        }
        
        
        
    };
    
});