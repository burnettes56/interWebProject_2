$(document).ready(function () {
    var divText = $("#1").text(),
        newText = '',
        css = document.styleSheets[0],
        chars = new Array(divText.length),
        counter = 0,
        randLetter,
        numBlinks,
        blinkRand,
        blinkSound = new Audio("audio/blinkSound.aiff");


    for (var i = 0; i < divText.length; i += 1) {
        newText += '<i id=l' + (i + 1) + '>' + divText.charAt(i) + '</i>';
        css.insertRule('i, #l' + (i + 1) + '{     ' +
            '        font: normal 250px/ 125px \'Nixie One\', Helvetica, Arial;' +
            '        color: #EEDDE0;' +
            '       -webkit-animation: neon 1.5s ease-in-out infinite alternate;\n' +
            '       -moz-animation: neon0 1.5s ease-in-out infinite alternate;\n' +
            '        animation: neon 1.5s ease-in-out infinite alternate;' +
            '        5px 9px 5px rgba(0, 0, 0, 0.5);'
            , css.cssRules.length);
        css.insertRule('i, #l' + (i + 1) + '.off{     ' +
            '        color: rgba(46, 46, 46, 0.61);\n' +
            '        text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.5);' +
            '        -webkit-animation-animation: off 1.5s ease-in-out infinite alternate;\n' +
            '        -moz-animation: off 1.5s ease-in-out infinite alternate;\n' +
            '         animation: off 1.5s ease-in-out infinite alternate;'
            , css.cssRules.length);
        chars[i] = '\"#l' + (i + 1) + '\"';
    }

    $("#1").html(newText);

    function randomFromInterval(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function toggleFlicker(n) {
        $("#l" + n).toggleClass("off");
    }

    function checkHover() {
        setInterval(function () {
            for (var v = 1; v <= 7; v++) {

                if ($("#l" + v).is(":hover")) {
                    toggleFlicker(v);
                }
                else
                    $("#l" + v).removeClass("off");
            }
        }, randomFromInterval(50, 100));
    }

    function randFlicker() {
        counter += 1;

        if (counter === numBlinks) {
            return;
        }

        setTimeout(setInterval(function () {
            toggleFlicker(randLetter + 1);
        }, 0), 10);
    }

    (function loop() {
        var randInterval = randomFromInterval(500, 1000);
        randLetter = randomFromInterval(5, 6);

        numBlinks = randomFromInterval(20, 30);

        setTimeout(function () {
            counter = 0;
            randFlicker();
            blinkRand = randomFromInterval(500, 750);
            checkHover();
            loop();
        }, randInterval);
    }());
});
