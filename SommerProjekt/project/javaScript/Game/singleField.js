class singleField{
    constructor({imageSrc,x,y}){
        this.image = new Image()
        this.image.src = imageSrc
        
        this.position ={
            x: x,
            y: y
        }
    }
    draw(){
        ctx.drawImage(this.image,this.position.x,this.position.y)
    }
    update(){
        this.draw()
    }
    changeCoordinates(x,y){
        this.position ={
            x: x,
            y: y
        }
    }
}