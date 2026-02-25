function buildTestimonial(testimonial) {
    const { name, avatar, link, message, attachment } = testimonial;
    const html = `
    <div class="testimonial">
        <a href="${link}" target="_blank">
            <img class="avatar" src="${avatar}" alt="${name}">
        </a>
        <div>
            <a href="${link}">
                <p class="name">${name}</p>
            </a>
            <p>${message}</p>
            ${attachment ? `
                <img src="${attachment.preview}" data-full="${attachment.full}" alt="${name}">
            ` : ''}
        </div>
    </div>
    `;
    return html;
}

let testimonialsPopulated = false;
async function populateTestimonials() {
    if (testimonialsPopulated) return;
    testimonialsPopulated = true;
    
    const target = document.querySelector('section[data-sectionid="testimonials"]');

    const testimonials = await fetch('/data/testimonials.json').then(r => r.json());

    testimonials.forEach((testimonial) => {
        target.innerHTML += buildTestimonial(testimonial);
    });

    updateClickableImages()
}
