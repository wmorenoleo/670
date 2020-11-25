$(document).ready(function(){
    $(".text2").hide();
    // Capturamos el click encima de una estrella
    $("#stars a").click(function () {
        if ($(this).is("a:first") && $(this).hasClass("selected") && !$(this).nextAll("a").hasClass("selected")) {
            // Si es la primera estrella la selecciona, y dicha estrella
            // esta marcada y es la unica marcada, quitamos la clase
            $(this).removeClass("selected");
            // aÃƒÂ±adimos al valor al formulario
            $("input[name=stars]").val(0);
            contador = 0;
        } else {
            // aÃƒÂ±adimos la clase "selected"
            $(this).addClass("selected");
            // aÃƒÂ±adimos la clase "selected" a todas las estrellas anteriores
            $(this).prevAll("a").addClass("selected");
            // eliminamos la clase "selected" a todas las estrellas siguientes
            $(this).nextAll("a").removeClass("selected");
            // aÃƒÂ±adimos al valor al formulario
            $("input[name=stars]").val($("#stars a").index($(this)) + 1);
            contador = $("#stars a").index($(this)) + 1;

            // dataLayer.push({
            // 'eventCategory': 'Calificación',
            // 'eventAction': 'clic',
            // 'eventLabel': contador + '-Estrella',
            // 'event': 'eventClick'
            // });

            $(".text1").hide();
            $("#stars").hide();
            $("#stars2").hide();
            $(".text2").show();
            }
        });
    });