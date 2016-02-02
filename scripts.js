

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

  $('.toggleMenu').click(function (e) {
      console.log("Received click while clickState = " + clickState);
      advanceToNextClickState();
      $('#slideMenu').animate(cssForState[clickState]);
      $('#hamburger').toggleClass('toggleAnimation normal');
      $('#h-mid').fadeToggle('100');
  });
});
