$(function(){

    var i = 1;
    $("#contactForm").hide();

    $("#contactUsForm").focus(function(){
        $("#contactForm").show();
    })

    $("#contactUsForm").blur(function(){
        $("#contactForm").hide();
    })

    $("#currentYear").text(new Date().getFullYear());

});