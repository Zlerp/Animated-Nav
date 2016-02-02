

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
      $('#hamburger').slideUp(fast);
  });
});


// if (opened == "no" ) {
//   $(".toggleMenu").click(function(){
//     $("#slideMenu").animate({left: "250px"}, 300);
//     opened = "yes";
//     console.log(opened);
//   });
//   if (opened == "yes" ) {
//     $(".toggleMenu").click(function(){
//     $("#slideMenu").animate({right: "250px"}, 300);
//     opened = "no";
//     console.log(opened);
//   });
// }
// var opened = "no";
// if (opened == "no") {
//   $(".toggleMenu").click(function(){
//     console.log("open modal");
//     opened = "yes";
//     console.log(opened);
//   });
// }
// if (opened == "yes") {
//   $(".toggleMenu").click(function(){
//     console.log("close modal");
//     opened = "no";
//
//   });
// }
