// $(document).ready(function() {

// 	$('.person').click(function() {
// 	    $('.person').removeClass('current');
// 	    $(this).addClass('current');
// 	    $(this).children('.more-info-wrap').show();
// 	});
// }

// var main = function() {
//   	$('.person').click(function() {
//     // $('.person').toggleClass('current');
//     // $('.more-info-wrap').hide();
//     $(this).toggleClass('current');
//     if($(this).hasClass('current') == true){
//     	$('.person').removeClass('current');
//     	$('.person').children('.more-info-wrap').hide();
//     	$(this).addClass('current');
//     	$(this).children('.more-info-wrap').show();

//     }
//     else{
//     	$('.person').removeClass('current');
//     	$(this).children('.more-info-wrap').hide();
//     }

//   });


// }// ends
var main = function() {

  //showing the more info secction smoothly
    $('.picture-name-wrap').click(function() {

        $($(this).parent('.person')).toggleClass('current');
        var duration = 400;
        if($($(this).parent('.person')).hasClass('current') == true){
            $('.person').removeClass('current');
            $('.person').children('.more-info-wrap').slideUp(duration);
            $($(this).parent('.person')).addClass('current');
            $($(this).parent('.person')).children('.more-info-wrap').slideDown(duration);
            var topOffset = ($(this).offset().top - $(window).scrollTop());
            
        }
        else{
            $('.person').removeClass('current');
            $($(this).parent('.person')).children('.more-info-wrap').slideUp(duration);
        }
        
        console.log(topOffset);
        var target = $(this);
        console.log(target);
        if(topOffset >= 40){ 
            $('html,body').animate({
                scrollTop: (target.offset().top - 50)
            },300);
        }
        else if(topOffset <= -50){
            $('html,body').animate({
                scrollTop: (target.offset().top + 15)
            },300);
        }

    });






// scrolling to the pages
// $('.son').click(function(event){
//     var target =  $( $(this).attr('href') );
//       if( target.length ){
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         },300);
//       }
// });

}// ends main

$(document).ready(main);
