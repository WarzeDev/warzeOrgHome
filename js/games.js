let gamesPopulated = false;
async function setupGames() {
    if (gamesPopulated) return;
    gamesPopulated = true;
    
    const targets = document.querySelectorAll('.gamegrid');

    const games = await fetch('/data/games.json').then(r => r.json());

    games.forEach((game) => {
        const target = Array.from(targets).find(t => t.dataset.gamecategory === game.category);
        target.innerHTML += `<a href="${game.url}">
            <img src="${game.icon}" alt="${game.name}">
            <h1>${game.name}</h1>
        </a>`;
    });
}