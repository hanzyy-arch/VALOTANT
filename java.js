let player = document.getElementById("player");
let ghost = document.getElementById("ghost");
let gameBoard = document.getElementById("game-board");

let playerPosition = { x: 175, y: 175 };
let ghostPosition = { x: 100, y: 100 };

function startGame() {
    player.style.left = `${playerPosition.x}px`;
    player.style.top = `${playerPosition.y}px`;
    ghost.style.left = `${ghostPosition.x}px`;
    ghost.style.top = `${ghostPosition.y}px`;

    document.addEventListener("keydown", movePlayer);
    moveGhost();
}

function movePlayer(event) {
    const playerSpeed = 10;
    if (event.key === "ArrowLeft") {
        playerPosition.x -= playerSpeed;
    }
    if (event.key === "ArrowRight") {
        playerPosition.x += playerSpeed;
    }
    if (event.key === "ArrowUp") {
        playerPosition.y -= playerSpeed;
    }
    if (event.key === "ArrowDown") {
        playerPosition.y += playerSpeed;
    }

    player.style.left = `${playerPosition.x}px`;
    player.style.top = `${playerPosition.y}px`;

    checkCollision();
}

function moveGhost() {
    const ghostSpeed = 5;
    setInterval(() => {
        let randomDirection = Math.random();
        if (randomDirection < 0.25) {
            ghostPosition.x += ghostSpeed;
        } else if (randomDirection < 0.5) {
            ghostPosition.x -= ghostSpeed;
        } else if (randomDirection < 0.75) {
            ghostPosition.y += ghostSpeed;
        } else {
            ghostPosition.y -= ghostSpeed;
        }

        ghost.style.left = `${ghostPosition.x}px`;
        ghost.style.top = `${ghostPosition.y}px`;

        checkCollision();
    }, 100);
}

function checkCollision() {
    if (Math.abs(playerPosition.x - ghostPosition.x) < 50 && Math.abs(playerPosition.y - ghostPosition.y) < 50) {
        alert("Game Over! The ghost caught you.");
        resetGame();
    }
}

function resetGame() {
    playerPosition = { x: 175, y: 175 };
    ghostPosition = { x: 100, y: 100 };
    player.style.left = `${playerPosition.x}px`;
    player.style.top = `${playerPosition.y}px`;
    ghost.style.left = `${ghostPosition.x}px`;
    ghost.style.top = `${ghostPosition.y}px`;
}
