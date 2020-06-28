function handleModalClick() {
  var modalElem = null;
  $("[data-modal='true']").on('click', function() {
    $('.modal').css('display', 'none');
    target = $(this).data('target');
    modalElem = target;

    $(target).fadeIn({
      start: function () {
        $(this).css({
          display: 'flex'
        })
      }
    });

    $('body').addClass('no-scroll');

    $(target).find('.modal-close').on('click', function() {
      $(target).fadeOut({
        complete: function () {
          $(this).removeAttr('style')
        }
      });
      $('body').removeClass('no-scroll');
    })
  })

  $(document).on('click', function(event){
    var $trigger = $(modalElem);
    if($trigger.get(0) == $(event.target).get(0)){
      $trigger.fadeOut({
        complete: function () {
          $(this).removeAttr('style')
        }
      });
      $('body').removeClass('no-scroll');
    }
  });
}

$(document).ready(function(){
  handleModalClick();
});
