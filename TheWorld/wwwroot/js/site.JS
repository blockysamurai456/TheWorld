//site.JS
(function () {
    var ele = document.getElementById("username");
    ele.innerHTML = "My Stupid Brother";

    var main = document.getElementById("main");
    main.onmouseenter = function () {
        main.style = "background-Color: #888";
    };
    main.onmouseleave = function () {
        main.style = "";
    };
})();

