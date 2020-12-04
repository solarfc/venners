"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight)); // document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {
  // setTimeout(() => {
  //     document.querySelector('.loader').style.display = 'none';
  //     document.querySelector('html').style.overflowY = 'scroll';
  // }, 1500);
  $('a.to-review').on('click', function () {
    var href = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 800);
  });
  /*
      increase date
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('p.period output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year.toString().slice(2));
  }

  document.querySelector('.footer__content p output').innerHTML = year;
  /*
      gallery slider
   */

  $('.gallery__content-block').twentytwenty();
  /*
      slider
   */

  var sliderSettings = {
    items: 1,
    loop: true,
    dots: true,
    nav: true
  };
  $('.catalog__content-img__block').owlCarousel(sliderSettings);
  $('.catalog__content-img__slider').owlCarousel(sliderSettings); // $('.catalog__content-img__slider').owlCarousel(sliderSettings);

  $('.review__content-slider').owlCarousel(sliderSettings);
  /*
      political
   */

  var bodyFilter = document.querySelector('.body__filter'),
      political = document.querySelector('.political'),
      feedback = document.querySelector('.feedback'),
      politicalOpen = document.querySelector('p.politic'),
      feedbackOpen = document.querySelector('p.send'),
      politicalClose = document.querySelector('img.close'),
      feedbackClose = document.querySelector('span.close'),
      formTitle = document.querySelector('.feedback p'),
      inputValue = document.querySelector('.feedback input'),
      textareaValue = document.querySelector('.feedback textarea'),
      form = document.querySelector('.feedback form'),
      changeForm = function changeForm() {
    inputValue.value = '';
    textareaValue.value = '';

    for (var _i2 = 0; _i2 < form.children.length; _i2++) {
      form.children[_i2].style.opacity = '1';
    }

    formTitle.style.opacity = '0';
  },
      open = function open(block) {
    bodyFilter.style.cssText = 'background: rgba(0, 0, 0, .8); z-index: 9999';
    block.style.cssText = 'transform: translate(-50%, -50%) rotateX(0deg); z-index: 99999; opacity: 1';
    document.querySelector('html').style.overflowY = 'hidden';
  },
      close = function close(block) {
    bodyFilter.style.cssText = 'background: rgba(0, 0, 0, 0); z-index: -5';
    block.style.cssText = 'transform: translate(-50%, -50%) rotateX(-90deg); z-index: -5; opacity: 0';
    document.querySelector('html').style.overflowY = 'scroll';
    setTimeout(changeForm, 500);
  };

  inputValue.addEventListener('change', function () {
    inputValue.value;
  });
  textareaValue.addEventListener('change', function () {
    textareaValue.value;
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputValue.value !== '' && textareaValue.value !== '') {
      for (var _i3 = 0; _i3 < form.children.length; _i3++) {
        form.children[_i3].style.opacity = '0';
      }

      formTitle.style.opacity = '1';
    }
  });
  politicalOpen.addEventListener('click', function () {
    open(political);
  });
  feedbackOpen.addEventListener('click', function () {
    open(feedback);
  });
  bodyFilter.addEventListener('click', function () {
    close(political);
  });
  bodyFilter.addEventListener('click', function () {
    close(feedback);
  });
  politicalClose.addEventListener('click', function () {
    close(political);
  });
  feedbackClose.addEventListener('click', function () {
    close(feedback);
  });

  var toggleBucket = function toggleBucket() {
    var bucket = document.querySelector('a.bucket'),
        topOfWindow = window.pageYOffset + innerHeight,
        catalogTopPosition = document.querySelector('.catalog').offsetTop,
        photoTopPosition = document.querySelector('.photo').offsetTop,
        chooseTopPosition = document.querySelector('.choose').offsetTop;

    if (topOfWindow > catalogTopPosition && topOfWindow < photoTopPosition || topOfWindow > chooseTopPosition) {
      bucket.style.cssText = 'opacity: 0; z-index: -5;';
    } else {
      bucket.style.cssText = 'opacity: 1; z-index: 999;';
    }
  };
  /*
      slow scroll
   */


  var slowScroll = function slowScroll(href) {
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
      return false;
    });
  };

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    var href = $('#mobile-order').offset().top - innerHeight;
    slowScroll(href);
    window.addEventListener('scroll', function () {
      toggleBucket();
    });
    window.addEventListener('resize', function () {
      toggleBucket();
    });
  } else {
    var _href = $('#catalog').offset().top;
    slowScroll(_href);
  }
};