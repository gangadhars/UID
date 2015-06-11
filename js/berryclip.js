function getopacity(elem) {
    var ori = $(elem).css('opacity');
    var ori2 = $(elem).css('filter');
    if (ori2) {
        ori2 = parseInt( ori2.replace(')','').replace('alpha(opacity=','') ) / 100;
        if (!isNaN(ori2) && ori2 != '') {
            ori = ori2;
        }
    }
    return ori;
}
$(document).on('click','.red-led',function() {

    if(getopacity($(this)) === "1") {  /*  Turn OFF */       
        $(this).css("opacity","0.4");
        $(this).css("box-shadow","");
    }
    else {                              /*  Turn OFF */
        $(this).css("opacity", "1");
        $(this).css("box-shadow","#000 0 -1px 7px 1px, inset #600 0 -1px 9px, #F00 0 2px 12px");
    }
});

$(document).on('click','.green-led',function() {        
    if(getopacity($(this)) === "1")  {  /*  Turn OFF */
        $(this).css("opacity","0.4"); 
        $(this).css("box-shadow","");
    }
    else {                             /*  Turn ON */
        $(this).css("opacity", "1");
        $(this).css("box-shadow","#000 0 -1px 7px 1px, inset #460 0 -1px 9px, #7D0 0 2px 12px");
    }
});

$(document).on('click','.yellow-led',function() {
    if(getopacity($(this)) === "1") {    /*  Turn OFF */ 
        $(this).css("opacity","0.4");
        $(this).css("box-shadow","");
    }
    else {                              /*  Turn ON */
        $(this).css("opacity", "1");
        $(this).css("box-shadow","#000 0 -1px 7px 1px, inset #660 0 -1px 9px, #DD0 0 2px 12px");
    }
});

$(document).on('click','.main-buzzer',function() {
    $(this).toggleClass('anim');
});