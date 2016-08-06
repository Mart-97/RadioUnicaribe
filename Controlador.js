 $("#news").click( function(){
    //$("#main-wrapper").unload();
    $("#main-wrapper").replaceWith($("#main-wrapper").load("noticias.html"));
});
$("#about").click( function(){
    //$("#main-wrapper").unload();
    $("main-wrapper").replaceWith($("#main-wrapper").load("acerca.html"));
});
$("#lastPrograms").click( function(){
    //$("#main-wrapper").unload();
    $("#main-wrapper").replaceWith($("#main-wrapper").load("pasados.html"));
});
$("#contact").click( function(){
    //$("#main-wrapper").unload();
    $("#main-wrapper").replaceWith($("#main-wrapper").load("contacto.html"));
});
$("#gallery").click( function(){
    //$("#main-wrapper").unload();
    $("#main-wrapper").replaceWith($("#main-wrapper").load("galeria.html"));
});
$("#programs").click( function(){
    //$("#main-wrapper").unload();
    $("#main-wrapper").replaceWith($("#main-wrapper").load("parrilla.html"));
});
$("#history").click( function(){
    //$("#main-wrapper").unload();
    $("#main-wrapper").replaceWith($("#main-wrapper").load("historia.html"));
});