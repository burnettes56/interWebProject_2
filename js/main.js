$(document).ready(function () {
    var divText = $("#1").text(),
        newText = '',
        css = document.styleSheets[0],
        chars = new Array(divText.length);

    for (var i = 0; i < divText.length; i += 1) {
        newText += '<i id=l' + (i + 1) + '>' + divText.charAt(i) + '</i>';
        css.insertRule('i, #l' + (i + 1) + '{     ' +
            '        font: normal 250px/ 125px \'Nixie One\', Helvetica, Arial;' +
            '        color: #EEDDE0;' +
            '        text-shadow: 0 0 30px #EEDB13,' +
            '        0 0 10px rgba(230, 161, 173, 0.41),' +
            '        0 0 100px #E6A1AD,' +
            '        0 0 500px #F0D200,' +
            '        5px 9px 5px rgba(0, 0, 0, 0.5);', css.cssRules.length);
        css.insertRule('i, #l' + (i + 1) + '.off{     ' +
            '        color: rgba(46, 46, 46, 0.61);\n' +
            '        text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);', css.cssRules.length);
        chars[i] = '\"#l' + (i + 1) + '\"';
    }

    $("#1").html(newText);

    setInterval(function () {
        if ($("#l1").is(":hover")) {
            flicker(1);
        }
        else
            $("#l1").removeClass("off");
        if ($("#l2").is(":hover")) {
            flicker(2);
        }
        else
            $("#l2").removeClass("off");
        if ($("#l3").is(":hover")) {
            flicker(3);
        }
        else
            $("#l3").removeClass("off");
        if ($("#l4").is(":hover")) {
            flicker(4);
        }
        else
            $("#l4").removeClass("off");
        if ($("#l5").is(":hover")) {
            flicker(5);
        }
        else
            $("#l5").removeClass("off");
        if ($("#l6").is(":hover")) {
            flicker(6);
        }
        else
            $("#l6").removeClass("off");
        if ($("#l7").is(":hover")) {
            flicker(7);
        }
        else
            $("#l7").removeClass("off");
    }, 50);

    function flicker(n) {
        $("#l" + n).toggleClass("off");
    }
});
