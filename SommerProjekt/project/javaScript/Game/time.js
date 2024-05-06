class time {
    constructor(){
        this.seconds = 0;
        this.hour = 6
        this.min = 0
        this.currentDay = 0
        this.currentColor = "rgba(255,100,0,"
        this.currentOpacity = 0.24

        //mornig, day, evening
        this.morning = true
        this.evening = true

        //img
        this.clockImage = new Image()
        this.clockImage.src = "./../img/clock/clock.png"

        this.zeigerImage = new Image()

        this.board = new Image()
        this.board.src = "./../img/week/Board.png"

        this.day = new Image()

        //board
        this.board = new Image()
        this.board.src = "./../img/week/Board.png"
        this.chain = new Image()
        this.chain.src = "./../img/week/chain.png"

        this.boardMin = new Image()
        this.boardHours1 = new Image()
        this.boardHours2 = new Image()

    }
    update(){
        this.seconds ++
        if(this.seconds % 7 == 0)this.min ++
        if(this.seconds == 42){
            this.seconds = 0
            this.min = 0
            this.hour ++
            console.log(this.hour +'hour')
        }
        if(this.hour < 8){
            this.currentColor = "rgba(255,100,0,"
            if(this.seconds % 7 == 0) this.currentOpacity -= 0.02
        } 
        else if(this.hour >= 18 && this.hour <= 24){
            this.currentColor = "rgba(37,40,80,"
            if(this.seconds % 7 == 0)this.currentOpacity += 0.02
        }
        if(this.hour == 24)this.sleep()
        
    }
    dayColors(){
        this.zeigerImage.src = "./../img/clock/zeigerK"+this.hour+".png"

        this.day.src = "./../img/week/weekDay"+((this.currentDay%7)+1)+".png"
        
        this.boardMin.src = "./../img/numbersForItem/" + this.min +".png"

        this.boardHours1.src = "./../img/numbersForItem/"+ this.hour % 10+".png"

        this.boardHours2.src = "./../img/numbersForItem/"+ Math.floor(this.hour / 10)+".png"

        ctx.drawImage(this.clockImage,15,10)
        ctx.drawImage(this.zeigerImage,27,20)
        
        ctx.drawImage(this.board,250,10)
        ctx.drawImage(this.day,260,22)
        ctx.drawImage(this.boardMin,269,13)
        ctx.drawImage(this.boardHours1,261,13)
        ctx.drawImage(this.boardHours2,256,13)

        ctx.drawImage(this.chain,250,0)

        ctx.fillStyle = this.currentColor + this.currentOpacity +")"
        ctx.fillRect(0, 0,1024,512)
    }
    sleep(){
        this.seconds = 0
        this.hour = 6
        this.min = 0
        this.currentDay ++
        this.currentColor = "rgba(255,100,0,"
        this.currentOpacity = 0.24
    }
}