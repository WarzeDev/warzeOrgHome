function updateClickableImages() {
	document.querySelectorAll('*[data-full]').forEach(img => {
		const full = img.dataset.full;
		img.removeAttribute('data-full');
		img.style.cursor = 'pointer';

		img.addEventListener('click', e => {
			e.preventDefault();

			const container = document.createElement('div');
			const fullImg = document.createElement('img');
			container.style.display = 'none';
			fullImg.src = full;
			container.appendChild(fullImg);
			document.body.appendChild(container);

			const viewer = new Viewer(container, {
				navbar: false,
				toolbar: false,
				title: false,
				hidden() {
					viewer.destroy();
					container.remove();
				}
			});

			viewer.show();
		});
	});
}

const gallery = {
	'amorrya': [
		'warzefurry.png',
		'warzeamonbar.png'
	],
	'sadodeer': [
		'warzesadodeer1.png',
		'warzesadodeer2.jpg',
		'warzesadodeer3.jpg',
		'warzepngtuber1.png',
		'warzesadodeerdupin.png',
		'warzesadodeerbed.jpg',
		'warzesadodeermatch1.jpg',
		'warzesadodeermatch4.jpg',
		'warzesadodeerclingy.jpg'
	],
	'sadobunny': [
		'warzebackrooms.png',
		'WarzeDiscordBannerGhost.png',
		'warzeheart.png',
		'warzesadobunnywinter.png',
		'warzemcskin.png',
		'warzesadobunnypfp.png',
		'warzeghostbirthday.png',
		'warzesummer.png',
	],
	'rax': [
		'warze_burning_rose_lol.png',
		'raid.png'
	],
	'hooch': [
		'warzecoat.png',
		'warzegardening.png',
		'warzette.png',
		'warzestore.png',
		'warzewater.png',
		'warzespongebob.png'
	],
	'dotsepia': [
		'warzedotsepia3d.png'
	],
}
let galleryLoaded = false;
function populateGallery() {
	if (galleryLoaded) return;
	galleryLoaded = true;
	
	Object.entries(gallery).forEach(([artist, images]) => {
		for (const image of images) {
			const img = document.createElement('img');
			const jpg = image.split('.')[0] + '.jpg';
			img.src = `/gallery/${artist}/r/${jpg}`;
			img.setAttribute('data-full', `/gallery/${artist}/${image}`);
			img.alt = `${image} by ${artist}`;
			document.querySelector(`.art[data-artist="${artist}"]`).appendChild(img);
		}
	});

	updateClickableImages();
}