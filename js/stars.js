function initializeStars() {
	const starCount = Math.floor((window.innerWidth * window.innerHeight) / 2000);
	const layers = 5;

	for (let ci = 0; ci < layers; ci ++) {
		const depth = ci / (layers - 1);

		let cvs;
		if (document.querySelector(`#stars${ci}`)) {
			cvs = document.querySelector(`#stars${ci}`);
		} else {
			cvs = document.createElement('canvas');
			document.body.appendChild(cvs);
			cvs.setAttribute('data-stars-id', ci);
			cvs.classList.add('stars');
			cvs.id = `stars${ci}`;
		}
		cvs.width = window.innerWidth + 150;
		cvs.height = window.innerHeight + 150;
		const ctx = cvs.getContext('2d');
		ctx.globalAlpha = 1;
		ctx.clearRect(0, 0, cvs.width, cvs.height);
		ctx.globalAlpha = 0.1 + depth * 0.1;
		ctx.fillStyle = `white`;
		const size = 0.5 + ci / layers;
		for (let i = 0; i < starCount; i++) {
			ctx.beginPath();
			ctx.arc(Math.random() * cvs.width, Math.random() * cvs.height, size, 0, Math.PI * 2);
			ctx.fill();
		}
	}
}

function setBackground(category) {
	const { background, stars } = categories[category];
	const previousBackground = document.querySelector('.currentBackground');
	const newBackground = document.getElementById(`bg${background}`);

	newBackground.style.zIndex = -4;

	previousBackground.style.opacity = 0;

	document.querySelectorAll('.stars').forEach((cvs) => {
		const multiplier = cvs.getAttribute('data-stars-id') / 1.2 + 0.2;
		const x = stars[0] * multiplier;
		const y = stars[1] * multiplier;
		cvs.style.transform = `translateY(-${y}px) translateX(-${x}px)`;
	});

	setTimeout(() => {
		newBackground.style.zIndex = '';

		newBackground.classList.add('currentBackground');
		previousBackground.classList.remove('currentBackground');

		previousBackground.style.opacity = 1;
	}, 500);
}
