$(document).ready(function(){
  window.setTimeout(function(){
    $('.name-plaque').addClass('visible');
  },700);
});

var performAnimation = function(){
  $('.js-background').addClass('hidden');
  $('.item').addClass('moveRight');

  window.setTimeout(function(){
    $('.button-container').addClass('visible');
  },2000);
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
},3000);
