$(document).ready(function(){
    $("#grande").click(function(){
        $(".noticia__titulo").css("font-size", "50px");
        $(".noticia__texto").css("font-size", "30px");
    });

    $("#mediano").click(function(){
        $(".noticia__titulo").css("font-size", "30px");
        $(".noticia__texto").css("font-size", "20px");
    });

    $("#pequeno").click(function(){
        $(".noticia__titulo").css("font-size", "15px");
        $(".noticia__texto").css("font-size", "10px");
    });

    $(".noticia__titulo").click(function(){
        $(this).next().toggle();
    });

    $(".noticia__texto").hover(function(){
        $(this).parent().css("background-color", "lightblue");
    }, function(){
        $(this).parent().css("background-color", "white");
    });

});