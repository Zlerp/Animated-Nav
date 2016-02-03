

$(document).ready(function() {


  var clickState = 0;
  var cssForState = [{
          'margin-left': '-300px'
      },{
          'margin-left': '0px'
      }];

  var advanceToNextClickState = function() {
      clickState++;
      if (clickState >= cssForState.length)
          clickState = 0;
  };

  $('.toggleMenu, .overlay, .fa, .navLinkMobile').click(function (e) {
      console.log("Received click while clickState = " + clickState);
      advanceToNextClickState();
      $('#slideMenu').animate(cssForState[clickState]);
      $('#hamburger').toggleClass('toggleAnimation normal');
      $('#h-mid').fadeToggle('100');
      $('.overlay').fadeToggle('100', function() {
      });
  });

  // $('.overlay').click(function(event) {
  //     console.log("overlay clicked while click state equals " + clickState);
  //     advanceToNextClickState();
  //     $('#slideMenu').animate(cssForState[clickState]);
  //     $('#hamburger').toggleClass('toggleAnimation normal');
  //     $('#h-mid').fadeToggle('100');
  //     $('.overlay').fadeToggle('100', function() {
  //     });
  // });


  $("i").mouseover(function(){
    $( ".fa" ).not(this).animate({
      opacity: 0.4,
    }, 500);
  }).mouseout(function(event) {
    $( ".fa" ).not(this).animate({
      opacity: 1,
    }, 500);
  });

});
