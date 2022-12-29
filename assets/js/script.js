for(var x of document.querySelectorAll('.splide')) {
    var splide = new Splide(x, {
        perPage: 1,
        type: 'loop',
        arrows: false,
        autoplay: true,
    });
    splide.mount();
}