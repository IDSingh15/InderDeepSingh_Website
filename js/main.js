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

//For animation on page 0

$(document).ready(function(){
	$(".logoimage, .logotext, .menu, .rightindicators, .rights").css("opacity", "0");
    $(".homeimg").css({"opacity":"0","right":"-10%"});
	$(".hometext").css({"opacity":"0", "top":"30%"});
});

$(document).ready(function(){
	$(".logoimage, .logotext, .menu, .rightindicators, .rights").animate({opacity: '1'}, "slow");
	$("#page0").css("display", "initial");
    $("#page0 > .homeimg").animate({opacity:'1', right:'0px'}, "slow");
	$("#page0 > .hometext").animate({opacity:'1', top:'40%'}, "slow");
});

//For animation on Page 1

