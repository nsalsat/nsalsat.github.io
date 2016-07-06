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
    $('.picture-name-wrap').click(function() {
    // $('.person').toggleClass('current');
    // $('.more-info-wrap').hide();
    $($(this).parent('.person')).toggleClass('current');
    if($($(this).parent('.person')).hasClass('current') == true){
        $('.person').removeClass('current');
        $('.person').children('.more-info-wrap').hide();
        $($(this).parent('.person')).addClass('current');
        $($(this).parent('.person')).children('.more-info-wrap').show();
    }
    else{
        $('.person').removeClass('current');
        $($(this).parent('.person')).children('.more-info-wrap').hide();
    }
  });


}// ends

$(document).ready(main);
