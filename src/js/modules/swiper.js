const addSwiper = function () {
  new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 2000,
    spaceBetween: 40,
    slidesPerView: 2,
  });
}

export default addSwiper;

