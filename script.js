const gameContainer = document.querySelector('.game-container');
const snowflakesContainer = document.querySelector('.snowflakes');
const player = document.querySelector('.player');
const scoreDisplay = document.getElementById('score');

let score = 0;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const startPosition = Math.random() * window.innerWidth;
    snowflake.style.left = startPosition + 'px';

    snowflakesContainer.appendChild(snowflake);

    const fallSpeed = Math.random() * 4 + 2;
    const animationDuration = Math.random() * 3 + 2;

    snowflake.style.animationDuration = `${animationDuration}s`;

    snowflake.addEventListener('animationiteration', () => {
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
    });

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });

    snowflake.addEventListener('mousedown', () => {
        snowflake.remove();
        score++;
        scoreDisplay.textContent = score;
    });
}

setInterval(createSnowflake, 1000);

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === 'ArrowLeft') {
        const currentLeft = player.offsetLeft;
        const newLeft = currentLeft - 20;
        if (newLeft > 0) {
            player.style.left = newLeft + 'px';
        }
    } else if (key === 'ArrowRight') {
        const currentLeft = player.offsetLeft;
        const newLeft = currentLeft + 20;
        const maxWidth = gameContainer.clientWidth - player.clientWidth;
        if (newLeft < maxWidth) {
            player.style.left = newLeft + 'px';
        }
    }
});