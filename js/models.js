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
		'Seb Tophat',
		'Sebtral Bow',
		'Sebtral Relik',
		'Sebtral Spear',
		'Sebtral Wand',
		'Squidward Totem',
		'Tinee Horns',
		'Tinee Scythe',
		'Tinee Stave',
		'Wingul Hat',
		'Winter Hood',
	];

    const modelComments = {
        'Acrobat Katana': 'Reskin',
        'Freaky Pumpkin': 'Edit',
        'Ice Dagger': 'Reskin',
        'Ice Totem': 'Edit',
        'Mimikyu Winter Hat': 'Edit',
        'Red Spear': 'Reskin',
        'Tinee Stave': 'Edit',
        'Wingul Hat': 'Edit',
        'Winter Hood': 'Reskin',
		'Seb Tophat': 'Reskin',
    };

    const commentColors = {
        'Reskin': '#66898550',
        'Edit': '#73a18150'
    };

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

        const comment = modelComments[model];
        if (comment) {
            const commentElement = document.createElement('p');
            commentElement.innerText = '*' + comment;
            commentElement.style.backgroundColor = commentColors[comment];
            commentElement.classList.add('comment');
            modelContainer.appendChild(commentElement);
        }

		const p = document.createElement('p');
		p.innerText = model;
		modelContainer.appendChild(p);

		modelParentContainer.appendChild(modelContainer);
	});

	updateClickableImages();
}