// Wait until the DOM is fully loaded before initializing the slider
document.addEventListener('DOMContentLoaded', () => {
	initSlider();
});

// Initializes the slider functionality
const initSlider = () => {
	const slider = document.querySelector('.slider');
	const nextBtn = document.querySelector('.next');
	const prevBtn = document.querySelector('.prev');
	let currentIndex = 0; // Tracks the current slide index
	const slides = slider.querySelectorAll('img');
	const totalSlides = slides.length;

	// Function to update the slider position based on the current index
	const updateSliderPosition = () => {
		slider.style.transition = 'transform 0.5s ease'; // Smooth transition effect
		slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the slider
	};

	// Event listener for the "next" button
	nextBtn.onclick = () => {
		currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide, loop back if at the end
		updateSliderPosition(); // Update slider position
	};

	// Event listener for the "previous" button
	prevBtn.onclick = () => {
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide, loop back if at the start
		updateSliderPosition(); // Update slider position
	};

	// Reset transition after sliding ends to prepare for looping effect
	slider.addEventListener('transitionend', () => {
		// If on the last slide, reset to the beginning
		if (currentIndex === totalSlides - 1) {
			slider.style.transition = 'none'; // Remove transition for seamless reset
			slider.append(slider.firstElementChild); // Move first slide to the end
			currentIndex--; // Adjust index
			slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Update position
		}
		// If on the first slide, reset to the end
		else if (currentIndex === 0) {
			slider.style.transition = 'none'; // Remove transition for seamless reset
			slider.prepend(slider.lastElementChild); // Move last slide to the start
			currentIndex++; // Adjust index
			slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Update position
		}
	});
};
