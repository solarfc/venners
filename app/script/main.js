let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    $('.gallery__content-block').twentytwenty();

    const sliderSettings = {
        items: 1,
        loop: true,
        dots: true,
        nav: true,
    };

    $('.catalog__content-img__slider').owlCarousel(sliderSettings);
    $('.review__content-slider').owlCarousel(sliderSettings);

    // /*
    //     change href on mobile
    //  */
    //
    // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
    //     document.querySelector('a.grande').href = '#formgrande';
    //     document.querySelector('a.lake').href = '#formlake';
    //     document.querySelector('a.lou').href = '#formlou';
    // }
};
