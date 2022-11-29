$(document).ready(function(){
    $("#parar_animaciones").click(function(){
        $("div").stop(true);
    });

    $("#animar").click(function(){
        $("div").animate({left: '250px'}, 5000);
        $("div").animate({top: '250px'}, 5000);
        $("div").animate({left: '0px'}, 5000);
        $("div").animate({top: '0px'}, 5000);
    });
});



