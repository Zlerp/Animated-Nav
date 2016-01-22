$(document).ready(function() {
  $('#menu').addClass('responsive').before('<div id="hamburger">&#9776;</div>');

  $('#hamburger').click(function() {
      $('#menu').toggle();
    });
});
