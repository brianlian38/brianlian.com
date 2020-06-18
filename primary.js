// JavaScript Code



//Check if jQuery is loaded
window.onload = function () {
    if (window.jQuery) {
        // jQuery is loaded  
        alert("Currently no Mobile Support");
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
    $(".slider").click(function () {
        $(".intro").toggleClass("intro_alt");
        $(".biography").toggleClass("bio_alt");
        $(".skills").toggleClass("skills_alt");
        $(".section_title").toggleClass("section_title_alt");
        $(".projects").toggleClass("project_alt");
        /*
        $("body").toggleClass("body_alt");*/
    });
});

//Clear Click Me!
$(document).ready(function () {
    $('.slider').click(function () {
        $(".alert_click").hide();
    });
});

/*
$("#download").hover(function () {
    $("#resume_img").addClass("rotate");
}, function () {
    $("#resume_img").removeClass("rotate");
});
*/