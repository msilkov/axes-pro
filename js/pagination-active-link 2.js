// Скрипт для активной ссылки в пагинации
// Проверяем адресс текущей страницы
let currentPage = window.location.href;

// получаем массив ссылок из пагинации
let linkHref = document.getElementsByClassName("pagination-top__page-link");

// перебираем массив ссылок по аттрибуту href
for (var i = 0; i < linkHref.length; i++) {
	if (linkHref[i].href === currentPage) {
		// если соответствует текущей странице, добавляем активный класс
		linkHref[i].classList.add("active");
	} else {
		// если нет, то убираем активный класс
		linkHref[i].classList.remove("active");
	}
}
