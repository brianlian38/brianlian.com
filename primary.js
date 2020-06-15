// JavaScript Code



//Check if jQuery is loaded
window.onload = function () {
    if (window.jQuery) {
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded   
        alert("Doesn't Work");
    }
}

//Reveal Text when element is hovered over
//CURRENTLY UNUSED
/*
 *  <img src="placeholder.png" id="image" onMouseOver="showText('Some Text')" onMouseOut="hide();">
 *  <div id="text"></div>
*/
function showText(text) {
    document.getElementById("text").innerHTML = text;
}
function hide() {
    document.getElementById("text").innerHTML = "";
}


//Colour Mode Switch (aka darkMode)
$(document).ready(function () {
    $(".toggle").click(function () {
        $("body").toggleClass("dark-mode");
        $(".block").toggleClass("red-mode");
    });
});


/*
$("#download").hover(function () {
    $("#resume_img").addClass("rotate");
}, function () {
    $("#resume_img").removeClass("rotate");
});
*/