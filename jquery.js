// $('.slide_down_text').hide();
//
$('.zwischenbild').mouseover (function () {
   $('.slide_down_text').slideDown('slow');
});
$('.zwischenbild').mouseout (function () {
   $('.slide_down_text').slideUp('slow');
});
