class backgroundImage{
    constructor({imageSrc,position}){
        //finals
        this.PLAYER_SPEED = 3

        //Initialition VAriables
        this.playerPosition = {
            x : 0,
            y : 0
        }
        this.image = new Image()
        this.image.src = imageSrc
        this.position = {
            x: position.x,
            y: position.y
        }

        this.direction = 0

        //Variables for Player
        this.forPlayer = {
            xR: false,
            xL: false,
            yT: false,
            yB: false,
            x: 0,
            y: 0
        }

        this.onFarm = true
        this.way = false
        this.village = false
        this.house = false

    }
    draw(){
        ctx.drawImage(this.image,this.position.x,this.position.y)
    }
    //function to move the background
    backgroundMove(){
        switch(this.direction){
            case 1:
                this.position.x -= this.PLAYER_SPEED
                break
            case 2:
                this.position.y += this.PLAYER_SPEED
                break
            case -1:
                this.position.x += this.PLAYER_SPEED
                break
            case -2:
                this.position.y -= this.PLAYER_SPEED
                break
            default:
        }
        if(this.onFarm)this.farmM()
    }
    farmM(){
        //left
        if(this.position.x > 0||this.playerPosition.x < 140){
            this.position.x = 0
            this.forPlayer.xL = true
            this.forPlayer.xR = true
        }
        //right
        else if(this.position.x < -212||this.playerPosition.x > 140){ 
            this.position.x = -212
            this.forPlayer.xR = true
            this.forPlayer.xL = true
        }
        //reset
        else{
            this.forPlayer.xR = false
            this.forPlayer.xL = false
        }
        //top
        if(this.position.y > 0 || this.playerPosition.y < 60){ 
            this.position.y = 0
            this.forPlayer.yT = true
            this.forPlayer.yB = true
        }
        //Bottem
        else if(this.position.y < -200 || this.playerPosition.y > 60){
            this.position.y = -200
            this.forPlayer.yB = true
            this.forPlayer.yT = true
        } 
        //reset
        else{
            this.forPlayer.yB = false
            this.forPlayer.yT = false
        }
        console.log(this.position.x)
        if(this.position.x < -89 && this.playerPosition.y <48){
            this.position.x = -89
        }        
    }
    update(farm,house,wayToVillage,village){
        //data
        //console.log('xL: '+this.forPlayer.xL+', xR: '+this.forPlayer.xR+'|| Backgroundposition x: '+this.position.x+', y: '+this.position.y+'|| Playeerposition x: '+this.playerPosition.x+', y: '+this.playerPosition.y)

        this.onFarm = farm
        this.house = house
        this.way = wayToVillage
        this.village = village
        this.backgroundMove()
        this.draw()
        this.forPlayer.x = this.position.x
        this.forPlayer.y = this.position.y
    }
    changeDirection(movement){
        this.direction = movement
    }
}