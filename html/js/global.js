;$(function($){
    var method = {
        selecterUI:function(){
            $(".selectpicker").each(function(){
                $(this).selectpicker();
            })
        },
        accordion:function(){
            $(".module-accordion").each(function(){
                $(this).find(".module-list").on("click",function(){
                    if($(this).hasClass("open")){
                        $(this).removeClass("open");
                        $(this).find(".module-list-two").stop().slideUp(250)
                    }else {
                        $(".module-accordion").find(".module-list-two").slideUp(250);
                        $(this).addClass("open").siblings(".module-list").removeClass("open") && $(this).find(".module-list-two").stop().slideDown(400);
                    }
                })
            })
        }
    }
    method.selecterUI();
    method.accordion();
})