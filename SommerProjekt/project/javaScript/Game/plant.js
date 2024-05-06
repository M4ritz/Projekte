class plant{
    constructor(daysToGrow,imagess,continios,x,y,index){
            //initialisierung
            this.max = daysToGrow
            this.daysToGrow = daysToGrow
            this.sources = imagess
            if(this.continios != -1)this.continios = continios

            //image ans position
            this.image = new Image()

            //what plant it is
            this.index = index
            //calculates the first image
            this.image.src = this.sources[this.max-daysToGrow]
            this.position = {
                x: x,
                y: y
            }
        }
    draw(){
        ctx.drawImage(this.image,this.position.x,this.position.y)
    }
    update(x,y){
        if(this.max-this.daysToGrow >=3)y -= 16
        this.changeCoordinates(x,y)
        this.draw()
    }
    nextDay(){
        this.daysToGrow --
        this.image.src = this.sources[this.max-this.daysToGrow]
    }
    changeCoordinates(x,y){
        this.position = {
            x: x,
            y: y
        }  
    }  
    getPlant(){
        //inventar pluss
        console.log('plant got')
        //checks if there is a spot
            for(let i = 1; i < 9;i++){
                if(gameInventar.items[i] == 0||gameInventar.items[i]==this.index){
                    gameInventar.items[i] = this.index
                    console.log(gameInventar.items[i] , this.index)
                    gameInventar.quantaty[i] += 1
                    return true
                }
            }  
        return false
    }
}