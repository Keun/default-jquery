$( window ).scroll(function(event) {

    var yPosition = $(this).scrollTop();
    if (yPosition > 100) {

        $( ".pop-up-notification" ).show().click(function(event){
            //$('html, body').animate({scrollTop: '+=150px'}, 800);
            $('html, body').animate({scrollTop: '0px'});
        });
    }
});