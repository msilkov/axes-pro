let popupBg = document.querySelector(".popup_place_crnrstr");
let popup = document.querySelector(".popup__container_place_crnrstr");
let openPopupButtons = document.querySelectorAll(".open-popup");

openPopupButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();
		popupBg.classList.add("active");
	});
});

document.addEventListener("click", (e) => {
	if (e.target === popupBg) {
		popupBg.classList.remove("active");
	}
});
