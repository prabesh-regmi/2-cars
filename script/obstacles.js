class Obstacle {
    constructor(x, y, img, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.position;
        this.img = img;
        this.width = img.width;
        this.height = img.height;
        this.polygon = this.#createPolygon();


        // this.left = x - img.width / 2;
        // this.right = x + img.width / 2;
        // this.top = y - img.height / 2;
        // this.bottom = y + img.height / 2;


        // const topLeft = { x: this.left, y: this.top }
        // const bottomLeft = { x: this.right, y: this.top }
        // const topRight = { x: this.left, y: this.bottom }
        // const bottomRight = { x: this.right, y: this.bottom }
        // // console.log(topLeft,bottomLeft,topRight);

        // this.borders = [
        //     [topLeft, bottomLeft],
        //     [topRight, bottomRight],
        //     [topLeft, topRight],
        //     [bottomLeft, bottomRight]
        // ];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.drawImage(this.img,
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
    }
    #createPolygon(){
        const points=[];
        points.push({
            x:this.x-this.width/2,
            y:this.y-this.height/2,
        })
        points.push({
            x:this.x-this.width/2,
            y:this.y+this.height/2,
        })
        points.push({
            x:this.x+this.width/2,
            y:this.y-this.height/2,
        })
        points.push({
            x:this.x+this.width/2,
            y:this.y+this.height/2,
        })
        // console.log(points);
        return points;
    }
}
function getObs(n) {
    for (let i = 0; i < n; i++) {
        createObs(i);
    }
}
function createObs(n) {
    const lane = getRandomNumber(4);
    var imgNum;
    lane < 2 ? imgNum = getRandomNumber(2) : imgNum = getRandomNumber(2) + 2;
    var y;
    n == 0 ? y = getRandomNumber(100) : y = obs[n - 1].y - getRandomNumber(50) - 200;
    var type;
    if(imgNum === 2 || imgNum === 0){
        type = "food" 
    }else{

        type = "obstacle";
    } 
    obs.push(new Obstacle(road.getLaneCenter(lane),
        y,
        obsImage[imgNum],
        type));
}