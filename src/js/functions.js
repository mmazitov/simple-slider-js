document.addEventListener('DOMContentLoaded', function () {
	initSlider();
});

function initSlider() {
	const slider = document.querySelector('.slider');
	const nextBtn = document.querySelector('.next');
	const prevBtn = document.querySelector('.prev');
	let currentIndex = 0;
	const slides = slider.querySelectorAll('img');
	const totalSlides = slides.length;

	// Update the transform position based on the current index
	function updateSliderPosition() {
		slider.style.transition = 'transform 0.5s ease';
		slider.style.transform = `translateX(-${currentIndex * 100}%)`;
	}

	nextBtn.onclick = () => {
		currentIndex = (currentIndex + 1) % totalSlides;
		updateSliderPosition();
	};

	prevBtn.onclick = () => {
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		updateSliderPosition();
	};

	// Reset transition to none after the animation to prepare for looping
	slider.addEventListener('transitionend', () => {
		if (currentIndex === totalSlides - 1) {
			slider.style.transition = 'none';
			slider.append(slider.firstElementChild); // Move first slide to end
			currentIndex--;
			slider.style.transform = `translateX(-${currentIndex * 100}%)`;
		} else if (currentIndex === 0) {
			slider.style.transition = 'none';
			slider.prepend(slider.lastElementChild); // Move last slide to start
			currentIndex++;
			slider.style.transform = `translateX(-${currentIndex * 100}%)`;
		}
	});
}
