document.addEventListener('DOMContentLoaded', () => {
	initSlider();
});

function initSlider() {
	const slider = document.querySelector('.slider');
	const nextBtn = document.querySelector('.next');
	const prevBtn = document.querySelector('.prev');
	if (!slider || !nextBtn || !prevBtn) return;

	nextBtn.onclick = () => {
		const firstImg = slider.firstElementChild;
		if (firstImg) slider.append(firstImg);
	};

	prevBtn.onclick = () => {
		const lastImg = slider.lastElementChild;
		if (lastImg) slider.prepend(lastImg);
	};
}
