$(window).on('load', function(){
  $('a[href*="https://www.amazon.co.jp"]').has('img').each(function(i) {
    $(this).css('text-decoration', 'none');
    $(this).children('img').css('margin','0');

    $(this).append('<p style="font-size:0.2em; text-align:center;">Jump to Amazon</p>');
    $(this).children('p').css('margin', '0px');

    $(this).wrap('<span />');
    $(this).parent().css('border','solid gray 1px');
    $(this).parent().css('float', 'right');
    $(this).parent().css('clear', 'both');
    $(this).parent().css('margin', '10px');
  });
});
