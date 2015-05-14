( function( $ ) {
$( document ).ready(function() {
$(document).ready(function(){

$('#sidebar > ul > li ul').each(function(index, e){
  var count = $(e).find('li').length;
  var content = '<span class=\"cnt\">' + count + '</span>';
  $(e).closest('li').children('a').append(content);
});
$('#sidebar ul ul li:odd').addClass('odd');
$('#sidebar ul ul li:even').addClass('even');
$('#sidebar > ul > li > a').click(function() {
  $('#sidebar li').removeClass('side_active');
  $(this).closest('li').addClass('side_active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('side_active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#sidebar ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});

});

});
} )( jQuery );
