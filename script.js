$(document).ready(function () {

  function show() {
    if ($('.offer__show', this).text() === '+') {
      console.log('+');
      $('.offer__treatment', this).slideDown();
      $('.offer__treatment', this).addClass('offer--is-active');
      $('.offer__name', this).addClass('addLine');
      $('.offer__show', this).text('-');
    } else if ($('.offer__show', this).text() === '-') {
      console.log('-');
      $('.offer__treatment', this).slideUp();
      $('.offer__name', this).removeClass('addLine');
      $('.offer__treatment', this).removeClass('offer--is-active');
      $('.offer__show', this).text('+');
    }
  }

  $('.offer__treatments').on('click', show);

  function burger() {
    console.log('click')
    $('.menu__not-burger').toggleClass('menu__not-burger--active');
  }
  $('.menu__burger').on('click', burger)

})