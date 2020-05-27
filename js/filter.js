$(document).ready(function(){
  $('.c-list-filter__item').on('click', function() {
    $('.c-list-filter__item').removeClass('c-list-filter__item--active')
    $(this).addClass('c-list-filter__item--active')
    var data = new RegExp($(this).data('range'), 'g')
    console.log(data)
    $('.c-list__item').css('display', 'flex')

    $('.c-list__item').find('.c-list__item-name').each(function() {
      console.log(!$(this).text()[0].match());
      console.log($(this).text())
      if (!$(this).text()[0].match(data)) {
        $(this).parent().css('display', 'none');
      }
    })
  })
});
