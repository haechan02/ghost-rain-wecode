class Hero {
    constructor(){
        this.hero = document.getElementById('hero');
        this.left = Number(getComputedStyle(this.hero).left.split('px')[0]);
        this.speed = 30;
    }

    move(direction){
        if(direction === 'right') {
            this.hero.className = 'right';
            this.setLeft(this.speed);
        } else if (direction === 'left') {
            this.hero.className = 'left';
            this.setLeft(-this.speed);
        }
    }


    setLeft(speed) {
        // const currentLeft = Number(getComputedStyle(hero).left.split('px')[0]);
        
        let newleft = this.left + speed;

        if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return;

        this.hero.style.left = newleft + 'px';
        this.left = newleft;
    }

    stop(){
        this.hero.className = 'stop';
    }
}

