document.addEventListener('DOMContentLoaded', function () {
	initSlider();
});

function initSlider() {
	let slider = document.querySelector('.slider');
	let nextBtn = document.querySelector('.next');
	let prevBtn = document.querySelector('.prev');
	nextBtn.onclick = () => {
		slider.append(slider.querySelector('img:first-child'));
	};
	prevBtn.onclick = () => {
		slider.prepend(slider.querySelector('img:last-child'));
	};
}