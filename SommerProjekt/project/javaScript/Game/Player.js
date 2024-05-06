class Player {
    constructor({position,imageSrc,frame,frames}){
        //initialiesierung der übergebenen Werte
        this.imageSrc = imageSrc
        this.position = {
            x: position.x,
            y: position.y
        }
        this.frames = frames
        this.frame = frame
        this.current = 0
        this.now = 0

        //finals
        this.SPRITE_SPEED = 5
        this.PLAYER_SPEED = 3

        //Image erstellen
        this.image = new Image()
        this.image.src = imageSrc

        //Player direction
        this.direction = 0

        //Variables for Player
        this.forPlayer = {
            xR: false,
            xL: false,
            yT: false,
            yB: false
        }
    }
    changeSprite(imageSrc,movement) {
        this.image.src = imageSrc //new ImageSrc
        this.direction = movement
    }
    draw() {
        //draw Image
        ctx.drawImage(
            this.image,
            this.current,   // xcordinate of the crop img
            0,              // y cordinate of the crop img
            96,             // width of the crop img
            116,            //height of the crop img
            this.position.x,//x position of player
            this.position.y,//y position of player
            24,             //width of the whole img
            29,             //height of the whole img
            )
    }
    next(){
        this.current += this.frame
        if(this.current == this.frame* this.frames)this.current = 0
    }
    update() {
        if(this.now  % this.SPRITE_SPEED == 0)this.next()
        this.move()
        this.draw()
        this.now ++
        //console.log("Player position: X: "+this.position.x+"; Y: "+this.position.y)
    }
    move(){
        //Player Movement
        switch(this.direction){
            case 1:
                if(this.forPlayer.xR && this.position.x < 262){
                    this.position.x += this.PLAYER_SPEED
                }
                break
            case 2:
                if(this.forPlayer.yT && this.position.y > 4){
                    this.position.y -= this.PLAYER_SPEED
                }
                break
            case -1:
                if(this.forPlayer.xL && this.position.x >23){
                    this.position.x -= this.PLAYER_SPEED
                }
                break
            case -2:
                if(this.forPlayer.yB && this.position.y < 99){
                    this.position.y += this.PLAYER_SPEED
                }
                break
            default:
        }
        if(this.position.y <= 54 && this.forPlayer.x < -89 && (this.forPlayer.x  >= 212 && this.position.x <197)){
            this.position.y = 54
        }
    }
}