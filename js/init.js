const startBtn = document.getElementById('start');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');


let player = new Hero();
let gameOver = false;
let timeLeft = 5;
let score = 0;

function init() {
  document.addEventListener(
    'keydown',
    function (e) {
      checkKey(e, true);
    },
    false
  );

  document.addEventListener(
    'keyup',
    function (e) {
      checkKey(e, false);
    },
    false
  );

  startBtn.addEventListener('click', startGame);

  function startGame() {
    init()
      startBtn.style.display = 'none';
    const ghostInterval = setInterval(function () {
      if (!gameOver) {
        let ghost = new Ghost();
        ghost.create();
      }
    }, 2000);
  
    const countdown = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        timer.textContent = `${timeLeft} Seconds`;
      } else {
        previous.innerHTML = 'Your Previous Score is' + updateScore() 
        clearInterval(countdown);
        clearInterval(ghostInterval);
        gameOver = true;
        timer.textContent = 'Time\'s up!';
        document.removeEventListener('keydown', checkKey);
        document.removeEventListener('keyup', checkKey);
        
        startBtn.style.display = 'block'
        startBtn.innerHTML = 'RESTART'
      }
    }, 1000);
  
  }

}




function checkKey(e, isMoving) {
  if (isMoving && !gameOver) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39: //right
        player.move('right');
        e.preventDefault();
        break;
      case 37: //left
        player.move('left');
        e.preventDefault();
        break;
    }
  } else {
    player.stop();
  }
}


startBtn.addEventListener('click', startGame);

function startGame() {
  init()
    startBtn.style.display = 'none';
  const ghostInterval = setInterval(function () {
    if (!gameOver) {
      let ghost = new Ghost();
      ghost.create();
    }
  }, 2000);

  const countdown = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timer.textContent = `${timeLeft} Seconds`;
    } else {
      clearInterval(countdown);
      clearInterval(ghostInterval);
      gameOver = true;
      timer.textContent = 'Time\'s up!';
      document.removeEventListener('keydown', checkKey);
      document.removeEventListener('keyup', checkKey);
      startBtn.style.display = 'block'
      startBtn.innerHTML = 'RESTART'
    }
  }, 1000);

}
