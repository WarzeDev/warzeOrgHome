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

	window.location.hash = category;
	
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
		iframe.classList.add('cover');
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

// Make all sub categories clickable
document.querySelectorAll('.subCategory').forEach((category) => {
	category.addEventListener('click', (e) => {
		document.querySelectorAll('.selectedSubCategory').forEach((category) => {
			category.classList.remove('selectedSubCategory');
		});

		e.target.classList.add('selectedSubCategory');

		document.querySelectorAll('.subCategorySection').forEach((section) => {
			section.classList.add('hidden');
		});

		const newCategory = e.target.dataset.category;

		const finalHash = window.location.hash.replace('#', '').split('.')[0] + '.' + newCategory;
		window.location.hash = finalHash;

		document.getElementById(newCategory).classList.remove('hidden');

		if (newCategory === 'models') {
			setupModelImages();
		}
	});
});

let modelImagesSetup = false;
function setupModelImages() {
	if (modelImagesSetup) return;

	modelImagesSetup = true;


	const models = [
		'Acrobat Katana',
		'Amorrya Mask',
		'Bunny Totem',
		'Charlies Trident',
		'Crystal Totem',
		'Freaky Pumpkin',
		'Ice Dagger',
		'Ice Totem',
		'Mario Top Hat',
		'Millies Axe',
		'Mimikyu Winter Hat',
		'Moth Antennae',
		'Nether Totem',
		'Plompy',
		'Pumpkin Totem',
		'Red Spear',
		'Squidward Totem',
		'Tinee Horns',
		'Tinee Scythe',
		'Tinee Stave',
		'Wingul Hat',
		'Winter Hood'
	];

	const modelParentContainer = document.getElementById('modelsFlex');

	models.forEach((model) => {
		const modelContainer = document.createElement('div');
		modelContainer.classList.add('modelContainer');

		const img = document.createElement('img');
		const modelPath = model.toLowerCase().replaceAll(' ', '');
		img.src = `/models/webp/${modelPath}.webp`;
		img.alt = model;
		img.setAttribute('data-full', `/models/apng/${modelPath}.png`);
		modelContainer.appendChild(img);

		const p = document.createElement('p');
		p.innerText = model;
		modelContainer.appendChild(p);

		modelParentContainer.appendChild(modelContainer);
	});

	updateClickableImages();
}

updateClickableImages();

if (window.location.hash.length > 0) {
	document.querySelectorAll('.selectedCategory').forEach((category) => {
		category.classList.remove('selectedCategory');
	});
	const category = window.location.hash.replace('#', '').split('.')[0];
	const subCategory = window.location.hash.replace('#', '').split('.')[1];
	selectCategory(category);
	document.querySelector('[data-category="' + category + '"]').classList.add('selectedCategory');
	moveUnderlineToElement(document.getElementById('selectedCategory'));

	if (subCategory) {
		document.querySelector('[data-category="' + subCategory + '"]').click();
	}
} else {
	selectCategory(currentCategory);
	moveUnderlineToElement(document.getElementById('selectedCategory'));
}

function makeAllATagsTargetBlank() {
	document.querySelectorAll('a').forEach((a) => {
		a.target = '_blank';
	});
}
makeAllATagsTargetBlank();