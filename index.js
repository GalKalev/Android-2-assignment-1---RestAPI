document.getElementById('fetchButton').addEventListener('click', async () => {
    try {


        const response = await fetch('http://localhost:3001/games');

        if (!response.ok) {
            throw new Error(`http error status: ${response.status}`);
        }
        const data = await response.json();

        const titles = data.map(game => game.title).join("\n");
        const thumbnails = data.map(game => game.thumbnail).join("\n");
        const shortDescriptions = data.map(game => game.short_description).join("\n");

        const arrTitles = titles.split("\n");
        const arrThumbnails = thumbnails.split("\n");
        const arrShortDescriptions = shortDescriptions.split("\n");

        const arrGame = [];

        for (let i = 0; i < arrTitles.length; i++) {
            arrGame.push(new GameClass(arrTitles[i], arrThumbnails[i], arrShortDescriptions[i]));
        }

        arrGame.forEach(url => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card');

            cardContainer.style.margin = '5%';

            const imgElemnt = document.createElement('img');
            imgElemnt.src = url.thumbnail;
            imgElemnt.alt = 'SVG image';
            imgElemnt.width = 100;
            imgElemnt.height = 100;

            const h2Title = document.createElement('h2');
            h2Title.innerText = url.title;

            const h3ShortDes = document.createElement('h3');
            h3ShortDes.innerText = url.shortDescription;

            cardContainer.appendChild(imgElemnt);
            cardContainer.appendChild(h2Title);
            cardContainer.appendChild(h3ShortDes);

            document.getElementById('svgContainer').appendChild(cardContainer);
        });
    } catch (error) {
        console.log('fetch error index');
    }

});