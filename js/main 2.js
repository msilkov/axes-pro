$(document).ready(function () {
	// слайдер в блоке партнеры моб версия
	$(".partners__slider-mobile").slick({
		prevArrow:
			'<button class="partners__slider-mobile-btn partners__slider-mobile-btnprev"><img src="./images/arrow-left-mob.svg" alt="влево"></button>',
		nextArrow:
			'<button class="partners__slider-mobile-btn partners__slider-mobile-btnnext"><img src="./images/arrow-right-mob.svg" alt="вправо"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});
	// слайдер в блоке услуг моб версия
	$(".services__slider-mobile").slick({
		prevArrow:
			'<button class="partners__slider-mobile-btn partners__slider-mobile-btnprev"><img src="./images/arrow-left-mob.svg" alt="влево"></button>',
		nextArrow:
			'<button class="partners__slider-mobile-btn partners__slider-mobile-btnnext"><img src="./images/arrow-right-mob.svg" alt="вправо"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	});
});
