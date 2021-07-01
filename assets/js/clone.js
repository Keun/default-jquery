$( document ).ready(function (){

    
    // document.getElementById('asdfasdf').addEventListener('click',function (){

    // });

    $('.clone-square').on('click',function (){
        $('.square:first').clone().insertAfter("div.square:last");
    });
});