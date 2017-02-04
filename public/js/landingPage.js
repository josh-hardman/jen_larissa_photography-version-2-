$(document).ready(function(){
  window.setTimeout(function(){
    $('.name-plaque').addClass('visible');
  },700);

  window.setTimeout(function(){
    $('.button-container').addClass('visible');
  },3500);
});

var performAnimation = function(){
  $('.js-background').addClass('hidden');
  $('.item').addClass('moveRight');
}

var imgLoaded = false;
$('#bg').on('load', function() {
    imgLoaded = true;
});

window.setTimeout(function(){
  if( imgLoaded ) {
    performAnimation();
  } else {
    $('#bg').on('load', function() {
      imgLoaded = true;
      performAnimation();
    });
  }
},2500);
