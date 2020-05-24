$(document).on('click', function(event){
    var $trigger = $('.c-header-menu .dropdown');
    if($trigger !== event.target && !$trigger.has(event.target).length){
      $trigger.find('ul').toggleClass('hidden');
      $trigger.find('ul').slideUp('fast');
      $trigger.removeClass('open');
    }
});

$(function() {
  $('.c-header-menu .dropdown').on('click', function() {
    $('.dropdown').removeClass('open');
    $('.dropdown').find('ul').slideUp('fast');
    $(this).addClass('open')
    $(this).find('ul').toggleClass('hidden');
    $(this).find('ul').slideToggle('fast');
  });
});