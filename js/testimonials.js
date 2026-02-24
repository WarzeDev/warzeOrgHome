const testimonials = [
    {
        name: 'Erik Sombroek',
        avatar: '/testimonials/eriksombroek.jpg',
        link: 'https://linkedin.com/in/eriksombroek',
        message: `I had the pleasure of working with Leonhard Tissen on our project, <a href="https://jollyworld.app">JollyWorld</a>, and I am thrilled to recommend him for his exceptional skills and contributions. Leonhard played a crucial role in the development of our game, showcasing not only his profound expertise in JavaScript but also his exceptional problem-solving abilities.<br><br>His proactive approach and creative thinking were instrumental in building several key utilities for JollyWorld. These tools not only enhanced our game's functionality but also significantly improved the overall user experience. His dedication to excellence was evident in every task he undertook.<br><br>One of Leonhard's most notable contributions was the enhancement of our game's modding section. His innovative solutions and technical proficiency brought new dimensions to this aspect of the game, greatly appreciated by both the team and the user community.<br><br>Beyond his technical abilities, Leonhard is a fantastic team member. His positive attitude and collaborative spirit make him a great asset to any team. His willingness to share knowledge and support his colleagues is commendable and fosters a productive and enjoyable work environment.<br><br>I wholeheartedly endorse Leonhard for his JavaScript expertise, proactive nature, creative problem-solving, and overall being a fantastic colleague. Any team would be fortunate to have him.`
    },
    {
        name: 'Laiba Tariq',
        avatar: '/testimonials/laibatariq.jpg',
        link: 'https://www.linkedin.com/in/laibatariq13/',
        message: `Leonhard is a highly creative individual with a vast skill set, going above and beyond to ensure the final result comes out as close to your original idea as possible.<br><br>Leonhard designed and set up <a href="https://laiba.warze.org">my portfolio website</a> for me and I had an optimized and perfect version on my hand within days! It even had an easy code for me to update my work on my own without needing any additional hands on deck.<br><br>I highly recommend him to anyone looking for a developer who knows everything under the sun, it was a great experience!`
    },
    {
        name: 'sadodeer',
        avatar: '/testimonials/sadodeer.webp',
        link: 'https://www.linkedin.com/in/sadodeer',
        message: `Warze is a super incredible guy and amazing to talk to, super chill and just the greatest vibes all around. His coding skills are absolutely amazing and his determination to solve and understand stuff in code is mesmerizing to witness. Warze has changed my life a lot for the better, cant believe i got so lucky to have such an amazing significant other!!`
    },
    {
        name: 'Citied',
        avatar: '/testimonials/citied.webp',
        link: `https://discord.com/users/430173597248651276`,
        message: `Does amazing work and I'm super happy with the result glad to have gone straight here for this wish you well bro.`
    },
    {
        name: 'MrShibaton',
        avatar: '/testimonials/mrshibaton.webp',
        link: 'https://mrshibaton.com',
        message: 'i like how community-focused Warze™ is. every project is something anyone can get in on :-). it\'s a unique flavor of online interaction. warze REALLY knows the value of exploration/curiosity. and of doing things out of an intrinsic appreciation for discovery itself. HIRE NOW!!!'
    },
    {
        name: 'Your Daily Tuna Sandwich',
        avatar: '/testimonials/yourdailytunasandwich.webp',
        link: 'https://discord.com/users/351737700078059521',
        message: `warze is a great man with a great mind and a great personality... and a great website. i can't believe i didn't discover WartOS sooner because it's such a bundle of joy, the things it offers are visually simple yet addictive (never thought i would actually spend 15 minutes slamming a cursor-powered moon against a super-wobbly earth). i don't know jack about coding but i can tell lots of hard work were put into it, and i respect the grind. wyatb :) 🫡`
    },
    {
        name: 'red',
        avatar: '/testimonials/red.webp',
        link: 'https://discord.com/users/1103616051159236618',
        message: `Besides the fact that warze is very skilled in coding, it's also a pleasure to communicate with him. His site has given me and others the opportunity to express our creativity and make our own subdomains. He also managed to create a decent community server`
    },
    {
        name: 'shaz',
        avatar: '/testimonials/shaz.webp',
        link: 'https://discord.com/users/157935991192027136',
        message: `Warze is an extremely knowledgeable & effective dev, created many cute little games to sink your time into, and has a knack for making some hilariously entertaining discord bots !`
    },
    {
        name: 'amorrya',
        avatar: '/testimonials/amorryamask.webp',
        link: 'https://ko-fi.com/everwinter',
        message: `made me a cool in game hat cosmetic which was better than i imagined. keep going!`,
        attachment: {
            preview: '/testimonials/amorryamask.webp',
            full: '/testimonials/amorryamask.png'
        }
    },
    {
        name: 'bluesandsnooze',
        avatar: '/testimonials/blueser.webp',
        link: 'https://discord.com/users/1190852834028171274',
        message: `I find myself using the applications on his website from time to time, especially his games. Really cool dude.`
    },
    {
        name: 'dotSepia',
        avatar: '/testimonials/dotsepia.webp',
        link: 'https://github.com/dotSepia',
        message: `Warze's coding skills are highly impressive. He has worked on a wide range of projects requiring strong technical knowledge and consistently demonstrates efficiency and precision in his work. He is able to implement user-requested features into his Discord bot within minutes, which speaks volumes about his skill level.<br>In addition to being a talented developer, Warze is also a great person overall. He is passionate, approachable, and enjoys sharing his interests with others. :)`
    },
    {
        name: 'sadobunny',
        avatar: '/testimonials/sadobunny.webp',
        link: 'https://ko-fi.com/sadobunny',
        message: `You're super awesome and cool. I love my stupid chungus developer 🩵 TAKE MY MONEY`
    },
    {
        name: 'Julppuu',
        avatar: '/testimonials/julppuu.webp',
        link: 'https://ko-fi.com/julppuu',
        message: `Thank you for the cool mods, now take my money &gt;:(`
    },
    {
        name: 'Everwintre',
        avatar: '/testimonials/everwintre.webp',
        link: 'https://ko-fi.com/everwinter',
        message: `keep up the good work`
    },
    {
        name: 'SuperGoldenMario',
        avatar: '/testimonials/supergoldenmario.webp',
        link: 'https://ko-fi.com/supergoldenmario',
        message: `Take my money funny dev man`
    },
    {
        name: 'Nekomata Okayun',
        avatar: '/testimonials/nekomataokayun.webp',
        link: 'https://ko-fi.com/W7W51O3W0N',
        message: 'The greatest dev that\'s ever lived'
    }
];

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
function populateTestimonials() {
    if (testimonialsPopulated) return;
    testimonialsPopulated = true;
    
    const target = document.querySelector('section[data-sectionid="testimonials"]');

    testimonials.forEach((testimonial) => {
        target.innerHTML += buildTestimonial(testimonial);
    });

    updateClickableImages()
}
