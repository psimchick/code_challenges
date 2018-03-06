$(document).ready(function() {

  $('button').on('click', function(e) {
    e.preventDefault();

    // get the button clicked
    var buttonClicked = $(this).attr('id');

    // only update colors when a color button is clicked, otherwise reset all colors
    if(buttonClicked !== 'reset') {
      // add inline style so it overrides the class
      $(this).parents().find('.change').css('background-color', buttonClicked);
    } else {
      // remove all inline styles so class determines the color shown
      $('section').removeAttr('style');
    }
  });

});
