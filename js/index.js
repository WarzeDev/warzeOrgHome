const background = document.getElementById('background');
const earth = document.getElementById('earthContainer');

const underline = document.getElementById('navUnderline');

let currentCategory = 'home';
let lastCategorySelection = 0;

function resize() {
	initializeStars();
}

resize();

window.addEventListener('resize', resize);

function getSelectedCategoryButton() {
	return document.querySelector('#navBarDesktop .selectedCategory');
}

let underlinedElementPosition = getSelectedCategoryButton().getBoundingClientRect();

function showCategory(category) {
	const categoryElement = document.getElementById(category);
	categoryElement.classList.remove('hidden');
	setTimeout(() => {
		categoryElement.style.opacity = 1;
	}, 10);
}

function hideCategory(category) {
	const categoryElement = document.getElementById(category);
	categoryElement.style.opacity = 0;
	setTimeout(() => {
		categoryElement.classList.add('hidden');
	}, 250);
}

function selectCategory(category) {
	const { hueShift, color } = categories[category];
	earth.style.filter = `hue-rotate(${hueShift}deg)`;
	document.documentElement.style.setProperty('--highlight', color);
	
	if (category !== currentCategory) {
		hideCategory(currentCategory);
		showCategory(category);
		setBackground(category);
	}
	setTitle(category);
	currentCategory = category;

	if (category === 'home') {
		earth.style.filter = `sepia(1) brightness(0.7) saturate(10.5) hue-rotate(-32deg)`;
	} else {
		earth.style.filter = `hue-rotate(${hueShift}deg)`;
	}
}

function moveUnderlineToElement() {
	const selectedCategoryButton = getSelectedCategoryButton();

	if (selectedCategoryButton === null) return;
	
	pos = selectedCategoryButton.getBoundingClientRect();

	underline.style.width = `${pos.width}px`;
	underline.style.left = `${pos.left}px`;
	underline.style.top = `80px`;
}

// Make all categories clickable
document.querySelectorAll('.category').forEach((category) => {
	category.addEventListener('click', (e) => {
		const now = performance.now();
		if (now < lastCategorySelection + 550) return;
		lastCategorySelection = now;

		document.querySelectorAll('.selectedCategory').forEach((category) => {
			category.classList.remove('selectedCategory');
		});

		e.target.classList.add('selectedCategory');

		const newCategory = e.target.dataset.category;

		selectCategory(newCategory);

		moveUnderlineToElement();

		hideMobileNavBarDrawer();
	});
});

// Initial category
selectCategory(currentCategory);
moveUnderlineToElement(document.getElementById('selectedCategory'));

// Hide PC only games if on mobile
if ('ontouchstart' in window) {
	document.querySelectorAll('.pcOnly').forEach((element) => {
		element.remove();
	});
	earth.remove();
}

// Make thumbnails turn into youtube embeds on click
document.querySelectorAll('.thumb').forEach((thumbnail) => {
	thumbnail.addEventListener('click', (e) => {
		const iframe = document.createElement('iframe');
		iframe.src = `https://www.youtube.com/embed/${e.target.dataset.video}`;
		iframe.frameborder = '0';
		iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
		iframe.allowFullscreen = true;
		e.target.parentElement.replaceChild(iframe, e.target);
	});
});

// Copy contents from <aside> to <footer>
const footer = document.querySelector('footer');
const aside = document.querySelector('aside');

footer.innerHTML = aside.innerHTML;

function loadEarthVideo() {
	const earthContainer = document.getElementById('earthContainer');
	earthContainer.style.display = 'block';
	earthContainer.innerHTML = `
	<video autoplay muted loop id="earth" preload="none">
		<source src="/earth/earthcropsmallfast.mp4" type="video/mp4">
	</video>
	<svg width="256" height="256" viewBox="0 0 4 4" id="earthSunglasses">
		<path d="M 0 2 A 1 1, 0, 0, 0, 2 2 L 1 2 Z" fill="black"></path>
		<path d="M 2 2 A 1 1, 0, 0, 0, 4 2 L 1 2 Z" fill="black"></path>
	</svg>`;
	const video = document.getElementById('earth');
	video.playbackRate = 0.5;
}

// Load earth video
window.addEventListener('load', loadEarthVideo);