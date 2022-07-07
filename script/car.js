

class Car{
    constructor(x,y,car,position){
        this.x=x;
        this.y=y;
        this.width=car.width;
        this.height=car.height;
        this.position=position;
        this.car=car;
        // this.controls=new Controls(position);
        this.carSpeed=Math.min(15,5+Math.floor(score/5));
        this.readings=[];
        this.damaged=false;
        // this.polygon=[];
        
    }

update(obs){
    // this.#move();
    this.y-=this.carSpeed;
    this.carSpeed=Math.min(13,5+Math.floor(score/7));
    this.polygon=this.#createPolygon();
    this.damaged=this.#assessDamage(obs);

    this.reaidngs=[];
    // for(let i=0;i<this.)
 
    
}
#assessDamage(obs){
    // console.log(borders[0]);
    // console.log(this.polygon);
    
    for(let i=0;i<obs.length;i++){
        if(polysIntersect(this.polygon,obs[i].polygon)){
            if (obs[i].type==='food'){
                obs.splice(i,1);
                createObs(obs.length);
                score+=1;
            } else{

                return true;
            }

        }
            if (cars[0].y+140<obs[i].y-obs[i].height){
                if(obs[i].type==="food"){
                    return true;
                }
                else{
                    obs.splice(i,1);
                    createObs(obs.length);
                }
                
    
            }

    }
    return false;
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



    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.car,
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
    }
}