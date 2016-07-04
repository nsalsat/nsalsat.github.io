// $(document).ready(function() {

// 	$('.person').click(function() {
// 	    $('.person').removeClass('current');
// 	    $(this).addClass('current');
// 	    $(this).children('.more-info').show();
// 	});
// }

var main = function() {
  	$('.person').click(function() {
    // $('.person').toggleClass('current');
    // $('.more-info').hide();
    $(this).toggleClass('current');
    if($(this).hasClass('current') == true){
    	$('.person').removeClass('current');
    	$('.person').children('.more-info').hide();
    	$(this).addClass('current');
    	$(this).children('.more-info').show();

    }
    else{
    	$('.person').removeClass('current');
    	$(this).children('.more-info').hide();
    }

  });


}// ends

$(document).ready(main);
