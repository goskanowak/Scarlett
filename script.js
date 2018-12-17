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
    $('.menu__not-burger').toggleClass('menu__not-burger--active');
  }
  $('.menu__burger').on('click', burger);




  var endTime = new Date('2018-12-31 23:59:59').getTime();
  var spanDays = document.querySelector('.promo__days');
  var spanHours = document.querySelector('.promo__hours');
  var spanMins = document.querySelector('.promo__mins');
  var spanSec = document.querySelector('.promo__sec');

  setInterval(() => {
      var nowTime = new Date().getTime();
      var days = Math.floor((endTime / (1000 * 60 * 60 * 24) - (nowTime / (1000 * 60 * 60 * 24))));

      days = days < 10 ? `0${days}` : days;

      var hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? `0${hours}` : hours;

      var mins = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);

      mins = mins < 10 ? `0${mins}` : mins;

      var secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
      secs = secs < 10 ? `0${secs}` : secs;

      spanDays.textContent = days;
      spanHours.textContent = hours;
      spanMins.textContent = mins;
      spanSec.textContent = secs;
    },
    1000);
});