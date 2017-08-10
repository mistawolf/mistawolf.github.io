if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 202);

}

var x = 0;

var titleText = [ "W", "WO", "WOL", "WOLF", "I", "IS", "H", "HE", "HER", "HERE", "WOLF IS HERE", ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}