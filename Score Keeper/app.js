const player1 = {
    display: document.querySelector('#p1Display'),
    addScore: document.querySelector('#p1AddScore'),
    score: 0
}
const player2 = {
    display: document.querySelector('#p2Display'),
    addScore: document.querySelector('#p2AddScore'),
    score: 0
}
const reset = document.querySelector('#reset');
const playTill = document.querySelector('#playTill');

let winningScore = 3;
let isGameOver = false;

playTill.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    funcReset()
})


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.addScore.disabled = true;
            opponent.addScore.disabled = true
        }
        player.display.innerText = player.score
    }
}

player1.addScore.addEventListener('click', function () {
    updateScores(player1, player2)
})
player2.addScore.addEventListener('click', function () {
    updateScores(player2, player1)
})

reset.addEventListener('click', funcReset);

function funcReset() {
    isGameOver = false;
    for (p of [player1, player2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.addScore.disabled = false
    }
}
