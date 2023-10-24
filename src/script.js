'use strict';

const btnAuthor = document.querySelector('.button-author');
const btnSocials = document.querySelector('.button-socials');
const socials = document.querySelector('.socials');
const tooltip = document.querySelector('.tooltip');

// Show/hide socials on mobile
btnAuthor.addEventListener('click', function () {
	if (window.innerWidth < 768) {
		socials.classList.remove('hidden');
		socials.classList.add('flex');
	}
});

btnSocials.addEventListener('click', function () {
	if (window.innerWidth < 768) {
		socials.classList.remove('flex');
		socials.classList.add('hidden');
	}
});

// listen to resize browser and hide socials if > 768px (tooltip on bigger screen)
window.addEventListener('resize', function (e) {
	if (e.target.innerWidth > 768) {
		socials.classList.remove('flex');
		socials.classList.add('hidden');
	}
});

// Show/hide tooltip
btnAuthor.addEventListener('mouseenter', function () {
	tooltip.classList.remove('hidden');
	tooltip.classList.add('flex');
});

document.addEventListener('click', function (e) {
	const clicked = e.target;
	if (e.target.classList.contains('icon') || !clicked.closest('.tooltip')) {
		tooltip.classList.remove('flex');
		tooltip.classList.add('hidden');
	}
});
