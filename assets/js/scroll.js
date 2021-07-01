$( document ).ready(function(){
    $( window ).scroll(function(event) {
        // console.log('ik ben aan het scrollen');
        var yPosition = $(this).scrollTop();

        // console.log(yPosition);
        if (yPosition > 100) {
            // $( ".pop-up-notification" ).show();
            $( ".pop-up-notification" ).show().on('click',function(event){
                // $('html, body').animate({scrollTop: '+=150px'}, 800);
                $('html, body').animate({scrollTop: '0px'});
            });
        }

        if(yPosition <= 0 ){
            $( ".pop-up-notification" ).hide();
        }
    });
});