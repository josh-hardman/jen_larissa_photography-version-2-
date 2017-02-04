$(document).ready(function(){
  window.setTimeout(function(){
    $('.name-plaque').addClass('visible');
  },700);

  window.setTimeout(function(){
    $('.js-background').addClass('hidden');
    $('.item').addClass('moveRight');
  },3000);

  window.setTimeout(function(){
    $('.button-container').addClass('visible');
  },5500);
});
