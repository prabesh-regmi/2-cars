const canvas = document.getElementById("two-car");
// const images = document.getElementById("images");
const redCar = document.getElementById("redcar");
const blueCar = document.getElementById("bluecar");
const scoreBlue = document.getElementById("score-blue");
const scoreRed = document.getElementById("score-red");
const squareBlue = document.getElementById("square-blue");
const squareRed = document.getElementById("square-red");
const scorePlace = document.getElementById("score");
const gameover=document.querySelector('.game-over');
const car1 = new Image();
car1.src = 'img/car-blue.svg';
const car2 = new Image();
car2.src = 'img/car-red.svg';
const obsImage = [scoreBlue, squareBlue, scoreRed, squareRed];


// redCar.style.display='none';

canvas.width = 400;
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9);
var score;
var cars ;
var obs ;




function StartGame() {
    inilzeGame();
    animate();

}


function inilzeGame() {
    score = 0;
    gameover.style = `visibility:hidden;`;
    cars = [new Car(road.getLaneCenter(1), 600, car1, 'left'),
    new Car(road.getLaneCenter(3), 600, car2, 'Right')
    ];
    obs = [];
    getObs(20);

}

function gameEnd() {
    gameover.style = `visibility:visible;`;
    document.querySelector('.game-score').innerHTML = score;
    window.addEventListener('keydown', n);
    function n(e) {
        window.removeEventListener('keydown', n);
        if (e.which === 32) {
            StartGame();
        }
        else {
            gameEnd()
        }
    }


}
window.addEventListener('load', StartGame);



function animate() {
    control();
    canvas.height = window.innerHeight;
    ctx.translate(0, -cars[0].y + canvas.height * 0.8);
    road.draw(ctx);
    for (let i = 0; i < obs.length; i++) {
        obs[i].draw(ctx);

    }
    for (let i = 0; i < cars.length; i++) {
        cars[i].draw(ctx);
        cars[i].update(obs);
        // console.log(cars[i].damaged);
    }
    scorePlace.innerHTML = score;
    !cars[0].damaged && !cars[1].damaged ? requestAnimationFrame(animate) : gameEnd();

}