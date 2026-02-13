function clearCanvases() {
	document.querySelectorAll('.stars').forEach((canvas) => canvas.remove());
}

function initializeStars() {
	clearCanvases();

	const starCount = Math.floor((window.innerWidth * window.innerHeight) / 6000);

	for (let ci = 0; ci < 5; ci ++) {
		const cvs = document.createElement('canvas');
		cvs.classList.add('stars');
		cvs.width = window.innerWidth + 100;
		cvs.height = window.innerHeight + 100;
		const ctx = cvs.getContext('2d');
		ctx.fillStyle = `white`;
		ctx.globalAlpha = (0.2 + ci / 10) * Math.random();
		cvs.setAttribute('data-stars-id', ci);
		for (let i = 0; i < starCount; i++) {
			ctx.beginPath();
			ctx.arc(Math.random() * cvs.width, Math.random() * cvs.height, 1 + ci / 4, 0, Math.PI * 2);
			ctx.fill();
		}
		document.body.appendChild(cvs);
	}
}

function setBackground(category) {
	const { background, stars } = categories[category];
	const previousBackground = document.querySelector('.currentBackground');
	const newBackground = document.getElementById(`bg${background}`);

	newBackground.style.zIndex = -4;

	previousBackground.style.opacity = 0;

	document.querySelectorAll('.stars').forEach((cvs) => {
		const multiplier = cvs.getAttribute('data-stars-id') / 5;
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
