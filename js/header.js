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

  $('.c-header__toggle-bar').on('click', function() {
    $(this).toggleClass('toggle');
    $('.c-header__menu').toggleClass('open');

    if ($('.c-header__menu').hasClass('open')) {
      $('.c-header__menu').slideDown({
        start: function () {
          $(this).css({
            display: "flex"
          })
        }
      });
    } else {
      $('.c-header__menu').slideUp({
        complete: function () {
          $(this).removeAttr('style')
        }
      });
    }
  });
});