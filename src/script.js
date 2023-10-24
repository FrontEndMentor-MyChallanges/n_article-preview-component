'use strict';

const btnAuthor = document.querySelector('.button-author');
const btnSocials = document.querySelector('.button-socials');
const socials = document.querySelector('.socials');
const tooltip = document.querySelector('.tooltip');
const arrowAuth = document.querySelector('.arrow-author').closest('.button-author');

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
// btnAuthor.addEventListener('click', function () {
// 	tooltip.classList.remove('hidden');
// 	tooltip.classList.add('flex');
// });

let isTooltip = false;

// arrowAuth.addEventListener('click', function (e) {
// const clicked = e.target.closest('.button-author');
// 	console.log(e.target);
// 	if (!isTooltip) {
// 		tooltip.classList.remove('hidden');
// 		tooltip.classList.add('flex');
// 		isTooltip = true;
// 	}
// });

arrowAuth.addEventListener('click', function (e) {
	tooltip.classList.toggle('hidden');
	tooltip.classList.toggle('flex');
	tooltip.classList.contains('flex') ? (isTooltip = true) : (isTooltip = false);
});

document.addEventListener('click', function (e) {
	const clicked = e.target;

	if (isTooltip && clicked.classList.contains('icon')) {
		tooltip.classList.remove('flex');
		tooltip.classList.add('hidden');
	}
});
