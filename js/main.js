// main.js

//To disable right click on the contents

$(document).ready(function () {
    
    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });
	$("body").on("contextmenu",function(e){
        return false;
    });
});

//For animation on .underline



//For animation on page 0

$(document).ready(function(){                                                           //Intial values
	$(".logoimage, .logotext, .menu, .rightindicators, .rights").css("opacity", "0");
    $(".homeimg").css({"opacity":"0","right":"-10%"});
	$(".hometext").css({"opacity":"0", "top":"30%"});
    $(".divimg").css({"opacity":"0","right":"10%"});
	$(".divtext").css({"opacity":"0", "top":"30%"});
});

$(document).ready(function(){                                                           //Initial execution
	$(".logoimage, .logotext, .menu, .rightindicators, .rights").animate({opacity: '1'}, "slow");
	$("#page0").css("display", "initial");
    $("#indi0").css("background-color", "black");
    $("#page0 > .homeimg").animate({opacity:'1', right:'0px'}, "slow");
	$("#page0 > .hometext").animate({opacity:'1', top:'40%'}, "slow");
});

$(document).ready(function(){                                                           //On click page 0
    $(".pg0").click(function(){
        $(".homeimg").animate({opacity:'0', right:'-10%'}, "fast");
	    $(".hometext").animate({opacity:'0', top:'30%'}, "fast");
        $(".divimg").animate({opacity:'0', right:'10%'}, "fast");
	    $(".divtext").animate({opacity:'0', top:'30%'}, "fast");
        $(".section").css("display", "hidden");
        $("#page0").css("display", "initial");
        $(".dot").css("background-color", "darkgrey")
        $(".underline").css("color", "darkgrey");
        $("#indi0").css("background-color", "black");
        $("#page0 > .hometext").animate({opacity:'1', top:'40%'}, "slow");
        $("#page0 > .homeimg").animate({opacity:'1', right:'0px'}, "slow");
    });
});

//For animation on Page 1

$(document).ready(function(){
    $(".pg1").click(function(){
        $(".homeimg").animate({opacity:'0', right:'-10%'}, "fast");
	    $(".hometext").animate({opacity:'0', top:'30%'}, "fast");
        $(".divimg").animate({opacity:'0', right:'10%'}, "fast");
	    $(".divtext").animate({opacity:'0', top:'30%'}, "fast");
        $(".section").css("display", "hidden");
        $("#page1").css("display", "initial");
        $(".dot").css("background-color", "darkgrey")
        $(".underline").css("color", "darkgrey");
        $(".pg1").css("color", "black");
        $("#indi1").css("background-color", "black");
        $("#page1 > .divtext").animate({opacity:'1', top:'40%'}, "slow");
        $("#page1 > .divimg").animate({opacity:'1', right:'20%'}, "slow");
    });
});

//For animation on Page 2

$(document).ready(function(){
    $(".pg2").click(function(){
        $(".homeimg").animate({opacity:'0', right:'-10%'}, "fast");
	    $(".hometext").animate({opacity:'0', top:'30%'}, "fast");
        $(".divimg").animate({opacity:'0', right:'10%'}, "fast");
	    $(".divtext").animate({opacity:'0', top:'30%'}, "fast");
        $(".section").css("display", "hidden");
        $("#page2").css("display", "initial");
        $(".dot").css("background-color", "darkgrey")
        $(".underline").css("color", "darkgrey");
        $(".pg2").css("color", "black");
        $("#indi2").css("background-color", "black");
        $("#page2 > .divtext").animate({opacity:'1', top:'40%'}, "slow");
        $("#page2 > .divimg").animate({opacity:'1', right:'20%'}, "slow");
    });
});

//For animation on Page 3

$(document).ready(function(){
    $(".pg3").click(function(){
        $(".homeimg").animate({opacity:'0', right:'-10%'}, "fast");
	    $(".hometext").animate({opacity:'0', top:'30%'}, "fast");
        $(".divimg").animate({opacity:'0', right:'10%'}, "fast");
	    $(".divtext").animate({opacity:'0', top:'30%'}, "fast");
        $(".section").css("display", "hidden");
        $("#page3").css("display", "initial");
        $(".dot").css("background-color", "darkgrey")
        $(".underline").css("color", "darkgrey");
        $(".pg3").css("color", "black");
        $("#indi3").css("background-color", "black");
        $("#page3 > .divtext").animate({opacity:'1', top:'40%'}, "slow");
        $("#page3 > .divimg").animate({opacity:'1', right:'20%'}, "slow");
    });
});

//For animation on Page 4

$(document).ready(function(){
    $(".pg4").click(function(){
        $(".homeimg").animate({opacity:'0', right:'-10%'}, "fast");
	    $(".hometext").animate({opacity:'0', top:'30%'}, "fast");
        $(".divimg").animate({opacity:'0', right:'10%'}, "fast");
	    $(".divtext").animate({opacity:'0', top:'30%'}, "fast");
        $(".section").css("display", "hidden");
        $("#page4").css("display", "initial");
        $(".dot").css("background-color", "darkgrey")
        $(".underline").css("color", "darkgrey");
        $(".pg4").css("color", "black");
        $("#indi4").css("background-color", "black");
        $("#page4 > .divtext").animate({opacity:'1', top:'40%'}, "slow");
        $("#page4 > .homeimg").animate({opacity:'1', right:'0px'}, "slow");
    });
});

//For animation on Page 5

$(document).ready(function(){
    $(".pg5").click(function(){
        $(".homeimg").animate({opacity:'0', right:'-10%'}, "fast");
	    $(".hometext").animate({opacity:'0', top:'30%'}, "fast");
        $(".divimg").animate({opacity:'0', right:'10%'}, "fast");
	    $(".divtext").animate({opacity:'0', top:'30%'}, "fast");
        $(".section").css("display", "hidden");
        $("#page5").css("display", "initial");
        $(".dot").css("background-color", "darkgrey")
        $(".underline").css("color", "darkgrey");
        $(".pg5").css("color", "black");
        $("#indi5").css("background-color", "black");
        $("#page5 > .divtext").animate({opacity:'1', top:'40%'}, "slow");
    });
});