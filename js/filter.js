$(document).ready(function(){
  var allItem = $('.c-list__item');

  $('.c-list-filter__item').on('click', function() {
    $('.c-list-filter__item').removeClass('c-list-filter__item--active')
    $(this).addClass('c-list-filter__item--active')
    var data = new RegExp($(this).data('range'), 'g')
    $('.c-list').empty();

    allItem.find('.c-list__item-name').each(function() {
      if ($(this).text()[0].match(data)) {
        $('.c-list').append($(this).parent())
      }
    })

    handleModalClick();
  })
});
