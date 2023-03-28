function randomRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  }

class Ghost {
  constructor(){

  }
  create(){
    this.enemyTop = 0;
    this.ghostElement = document.createElement('div');
  
    this.ghostElement.style.position = 'absolute';
    this.ghostElement.style.top = this.enemyTop + 'px';
    this.ghostElement.style.left = randomRange(0, BG_WIDTH - GHOST_WIDTH) + 'px';
  
    this.ghostElement.style.width = GHOST_WIDTH + 'px';
    this.ghostElement.style.height = GHOST_HEIGHT + 'px';
    this.ghostElement.style.background = 'url("./images/ghost.png") no-repeat';
  
    bg.appendChild(this.ghostElement);
  
    window.requestAnimationFrame(() => {
      this.move(this.enemyTop, this.ghostElement);
    });
  }

  move() {
    this.enemyTop++;
  
    if (this.enemyTop > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      const ghostLeft = Number(this.ghostElement.style.left.split('px')[0]);
      const heroLeft = Number(player.hero.style.left.split('px')[0]);
  
      if (heroLeft < ghostLeft + GHOST_WIDTH && heroLeft + HERO_WIDTH > ghostLeft) {
        this.die();
        return;
      }
  
      if (this.enemyTop > BG_HEIGHT - GHOST_HEIGHT) {
        this.remove();
        return;
      }
    }
  
    this.ghostElement.style.top = this.enemyTop + 'px';
  
    window.requestAnimationFrame(() => {
      this.move();
    });
  }

  remove() {
    this.ghostElement.remove();
  }

  die() {
    this.ghostElement.style.backgroundPosition = '-45px';
  
    const soundEffect = new Audio('./audio/dying.wav');
    soundEffect.play();


// Update score when hero hits a ghost
    function updateScore() {
      score++;
      scoreElement.textContent = `SCORE: ${score}`;
    }

    updateScore();
      
    setTimeout(() => {
      this.remove(this.ghostElement);
    }, 3000);
  }

}


