/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveLeft = function(){
        this.left = this.left- speed;
        console.log('ok: ' + this.left);
    }
    this.moveUp = function(){
        this.top -= speed;
        console.log('ok: ' + this.top);
    }
    this.moveDown = function(){
        this.top += speed;
        console.log('ok: ' + this.top);
    }

}

var hero = new Hero('https://product.hstatic.net/1000231532/product/mo_hinh_nendoroid__724_kakashi_hatake_-_naruto_shippuden_1afd100f4af546dba7d9d74ab824f5af.jpg', 20, 30, 200, 50);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    // if(hero.left == (window.innerWidth - hero.size)){
    //     hero.moveDown();
    // }
    if (hero.top < window.innerHeight){
        hero.moveDown();
    }
    // if (hero.top > window.innerHeight){
    //     hero.moveRight();
    // }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200)
}

start();