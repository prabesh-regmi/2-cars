function control(){
    document.onkeydown=(e)=>{
        // console.log(e.key);

        if(e.key=="a"){
            // this.left=false;
            cars[0].x=road.getLaneCenter(0);
        }else if(e.key=="d"){
                // this.right=false;
                cars[0].x=road.getLaneCenter(1);

        }else if(e.key=="ArrowLeft"){
            // this.right=false;
            cars[1].x=road.getLaneCenter(2);

        }else if(e.key=="ArrowRight"){
            // this.right=false;
            cars[1].x=road.getLaneCenter(3);

        }
    }
}