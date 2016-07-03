// $(document).ready(function() {

// 	$('.article').click(function() {
// 	    $('.article').removeClass('current');
// 	    $(this).addClass('current');
// 	    $(this).children('.more-info').show();
// 	});
// }

var main = function() {
  	$('.article').click(function() {
    // $('.article').toggleClass('current');
    // $('.more-info').hide();
    $(this).toggleClass('current');
    if($(this).hasClass('current') == true){
    	$('.article').removeClass('current');
    	$('.article').children('.more-info').hide();
    	$(this).addClass('current');
    	$(this).children('.more-info').show();

    }
    else{
    	$('.article').removeClass('current');
    	$(this).children('.more-info').hide();
    }

  });


}// ends

$(document).ready(main);
