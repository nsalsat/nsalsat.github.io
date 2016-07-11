var main = function() {

  //showing the more info secction smoothly
  // –--------------------------  Do NOT delete this –----------------------
    // $('.picture-name-wrap').click(function() {

    //     $($(this).parent('.person')).toggleClass('current');
    //     var duration = 400;
    //     if($($(this).parent('.person')).hasClass('current') == true){
    //         $('.person').removeClass('current');
    //         $('.person').children('.more-info-wrap').slideUp(duration);
    //         $($(this).parent('.person')).addClass('current');
    //         $($(this).parent('.person')).children('.more-info-wrap').slideDown(duration);
    //     }
    //     else{
    //         $('.person').removeClass('current');
    //         $($(this).parent('.person')).children('.more-info-wrap').slideUp(duration);
    //     }


    //     var topOffset = ($(this).offset().top - $(window).scrollTop());
    //     // console.log(topOffset);
    //     var target = $(this);
    //     // console.log(target);
    //     if(topOffset >= 40){
    //         $('html,body').animate({
    //             scrollTop: (target.offset().top - 50)
    //         },300);
    //     }
    //     else if(topOffset <= -50){
    //         $('html,body').animate({
    //             scrollTop: (target.offset().top + 15)
    //         },300);
    //     }

    // });

    $('.picture-name-wrap').click(function() {

        $($(this).parent('.person')).toggleClass('current');
        var duration = 400;
        if($($(this).parent('.person')).hasClass('current') == true){
            $($(this).parent('.person')).addClass('current');
            $($(this).parent('.person')).children('.more-info-wrap').slideDown(duration);
        }
        else{
            $($(this).parent('.person')).removeClass('current');
            $($(this).parent('.person')).children('.more-info-wrap').slideUp(duration);
        }


        var topOffset = ($(this).offset().top - $(window).scrollTop());
        // console.log(topOffset);
        var target = $(this);
        // console.log(target);
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

// unit 6 and 7



// funcion bolita negra de la esquina
$(window).scroll(function(){
    var target = $('#top');
    var duracion = 400;
    var wScroll = $(this).scrollTop();
    var topOffset = ($('.under-menu').offset().top - $(window).scrollTop());
    // console.log(topOffset);

    // console.log(target);
    if(topOffset <= 0){
        $('.bolita-wrap').fadeIn(duracion);
    }
    else {
        $('.bolita-wrap').fadeOut(duracion);
    }

    // move the background-image slowly
    // if( wScroll > ($('.record-container').offset().top - $(window).height()) ){
    //   // $('.record-container').css({'background-position':'center '+ (wScroll - $('.record-container').offset().top)  +'px'});
    //   //console.log('yo');
    //   $('record-container').css({'background-position':'center 0px'});
    // }
});
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    // move the background-image slowly
    if( wScroll > ($('.record-container').offset().top - $(window).height()) ){
      // $('.record-container').css({'background-position':'center '+ (wScroll - $('.record-container').offset().top)  +'px'});
      //console.log('yo');
      $('.record-container').css({'background-position':'center -'+ wScroll/5 +'px'});
    }
});

$('.bolita-wrap').click(function(){
    var target = $('#top')
    $('html,body').animate({
        scrollTop: target.offset().top
    },300);
});


// -------------  chek this function  ----------------
//        This is the auto scrolling function
$('a[href*=".html"]').click(function(event){
    // a[href*=".html#"] contains
    // a[href$=".html#"] ends
    // a[href^=".html#"] starts
    var duration = 300;
    var url = $(this).attr('href');
    var selectId = url.indexOf(".");
    var target = $('#' + url.substr(0,selectId));
    // console.log(selectId);
    // console.log(url);
    // console.log(target);
    if( target.length ){
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        },duration);
    }

});


// $('.menu-link').click(function(event){
//     var target =  $( $(this).attr('href') );
//     var duration = 300;

//     console.log(target);
//     if( target.length ){
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         },duration);
//     }
// });

// $('.menu-link').click(function(event){
//     var target =  $( $(this).attr('href') );
//     var duration = 300;

//     console.log(target);
//     if( target.length ){
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: $('#top').offset().top
//         },0);
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         },duration);
//     }
// });




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
