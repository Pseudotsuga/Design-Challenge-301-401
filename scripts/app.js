'use strict';

$(document).ready(function(){
  $(window).resize(function() {
    if($(window).width() <= 774){
      $('.ham-nav').removeClass('hidden');
      $('.header-menu').addClass('hidden');
      $('.ham-nav').click(function(){
        $('.ham-nav-closed').toggleClass('hidden');
        $('.ham-nav-open').toggleClass('hidden');
        $('.header-menu').toggleClass('hidden');
        console.log('click');
      })
    }
    if($(window).width() >= 775){
      $('.ham-nav').addClass('hidden');
      $('.header-menu').removeClass('hidden');
    }
  })
});