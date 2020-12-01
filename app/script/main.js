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
        navText: [
            `<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.209 8.01557C25.209 8.50431 24.8128 8.90045 24.3241 8.90045H3.01477L8.59677 14.4773C8.76654 14.6471 8.854 14.8734 8.854 15.0998C8.854 15.3262 8.76654 15.5525 8.59677 15.7223C8.25207 16.067 7.6913 16.067 7.34661 15.7223L0.267506 8.63807C-0.0617542 8.30881 -0.0617542 7.72232 0.267506 7.38791L7.35175 0.308814C7.69644 -0.0358807 8.25722 -0.0358807 8.60191 0.308814C8.94661 0.653508 8.94661 1.21428 8.60191 1.55897L3.02506 7.13582H24.3292C24.818 7.13068 25.209 7.52682 25.209 8.01557Z" fill="white"/>
            </svg>`,
            `<svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.209 8.01557C25.209 8.50431 24.8128 8.90045 24.3241 8.90045H3.01477L8.59677 14.4773C8.76654 14.6471 8.854 14.8734 8.854 15.0998C8.854 15.3262 8.76654 15.5525 8.59677 15.7223C8.25207 16.067 7.6913 16.067 7.34661 15.7223L0.267506 8.63807C-0.0617542 8.30881 -0.0617542 7.72232 0.267506 7.38791L7.35175 0.308814C7.69644 -0.0358807 8.25722 -0.0358807 8.60191 0.308814C8.94661 0.653508 8.94661 1.21428 8.60191 1.55897L3.02506 7.13582H24.3292C24.818 7.13068 25.209 7.52682 25.209 8.01557Z" fill="white"/>
            </svg>`,

        ]
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
