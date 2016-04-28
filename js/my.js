//screen height

$(function(){
    var windowH = $(window).height();
    var wrapperH = $('#window-height-wrapper').height();
    if(windowH > wrapperH) {                            
        $('#window-height-wrapper').css({'height':($(window).height())+'px'});
    }           
                                                   
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#window-height-wrapper').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('window-height-content').height();
        if(windowH > truecontentH) {
            $('#window-height-wrapper').css('height', (newH)+'px');
        }

    })          
});