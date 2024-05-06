class field{
    constructor(){
        //Variable Initialisierung
        this.PLAYER_SPEED = 3
        this.direction = 0
        this.fieldDirection =0
        this.position = {
            x:32,
            y:128
        }
        this.playerPosition = {
            x : 0,
            y : 0
        }
        this.backgroundPosition = {
            x : 0,
            y : 0
        }
        //Array with field data
        this.fieldOverview= [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ]

        //Array with plant data
        this.plants = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ]
    }
    draw(){
        //Show the selcted field
        //Checking the Array for fields
        //let newimage = "./../img/field/select.png"
        //let x1 =1 ,y1 =1;
        //let preview = new singleField({newimage,x1,y1})
        
        for(let i = 0;i<11;i++){
            for(let j = 0;j<28;j++){
                if(this.fieldOverview[i][j] != 0){
                    if(this.fieldOverview[i][j] == 20) this.fieldOverview[i][j] = 0
                    let imageSrc = "./../img/field/field" + this.fieldOverview[i][j] + ".png"

                    let x= this.position.x+(16*j)
                    let y=this.position.y+(16*i)
                    
                    let newField = new singleField({imageSrc,x,y})
                    newField.update()
                }
                if(this.plants[i][j] != 0 ){
                    let x= this.position.x+(16*j)
                    let y=this.position.y+(16*i)
                    this.plants[i][j].update(x,y)
                }
            }
        }
        
    }
    update(){
        //console.log("x: "+this.position.x+", y:"+this.position.y)
        this.fieldMove()
        this.draw()
    }
    fieldMove(){
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
        if(curentBackground.onFarm)this.farm()
    }
    farm(){
        //left
        if(this.position.x > 32||this.playerPosition.x < 140){
            this.position.x = 32
        }
        //right
        if(this.position.x < -179||this.playerPosition.x > 140){ 
            this.position.x = -179
        }
        //top
        if(this.position.y > 128 || this.playerPosition.y < 60){ 
            this.position.y = 128
        }
        //bottem
        if(this.position.y < -72 || this.playerPosition.y > 60){
            this.position.y = -72
        }
        if(this.position.x <= -56 && this.playerPosition.y <51){
            this.position.x = -56
        }
    }
    changeDirection(movement){
        this.direction = movement
    }
    changeFieldDirection(movement){
        this.fieldDirection =movement
    }
    removeField(){
        let finalPosition={
            x: Math.round(((this.backgroundPosition.x-this.playerPosition.x+5) * (-1)- 32)/16),
            y: Math.round(((this.backgroundPosition.y-this.playerPosition.y) * (-1)-129)/16)
        }
        
        //checks the directionand replaces the field
        if(this.fieldDirection == 2  && this.fieldOverview[finalPosition.y][finalPosition.x]     != 0)    this.fieldOverview[finalPosition.y][finalPosition.x] = 0
        if(this.fieldDirection == -2 && this.fieldOverview[finalPosition.y+2][finalPosition.x]   != 0)   this.fieldOverview[finalPosition.y+2][finalPosition.x] = 0
        if(this.fieldDirection == 1  && this.fieldOverview[finalPosition.y+1][finalPosition.x+1] != 0)    this.fieldOverview[finalPosition.y+1][finalPosition.x+1] = 0
        if(this.fieldDirection == -1 && this.fieldOverview[finalPosition.y+1][finalPosition.x- 1]!= 0)   this.fieldOverview[finalPosition.y+1][finalPosition.x- 1] = 0
        this.checkFieldsForConnections()
    }
    newField(){
        //calculates the position of the field
        let finalPosition={
            x: Math.round(((this.backgroundPosition.x-this.playerPosition.x+5) * (-1)- 32)/16),
            y: Math.round(((this.backgroundPosition.y-this.playerPosition.y) * (-1)-129)/16)
        }
        //console.log('X: '+finalPosition.x+', Y: '+finalPosition.y)

        //calculates the direction of the field and if it is not already a field
        if(this.fieldDirection == 2  && this.fieldOverview[finalPosition.y][finalPosition.x]     == 0)    this.fieldOverview[finalPosition.y][finalPosition.x] = 1
        if(this.fieldDirection == -2 && this.fieldOverview[finalPosition.y+2][finalPosition.x]   == 0)   this.fieldOverview[finalPosition.y+2][finalPosition.x] = 1
        if(this.fieldDirection == 1  && this.fieldOverview[finalPosition.y+1][finalPosition.x+1] == 0)    this.fieldOverview[finalPosition.y+1][finalPosition.x+1] = 1
        if(this.fieldDirection == -1 && this.fieldOverview[finalPosition.y+1][finalPosition.x- 1]== 0)   this.fieldOverview[finalPosition.y+1][finalPosition.x- 1] = 1
        this.checkFieldsForConnections()
    }
    waterAField(){
        
        let finalPosition={
            x: Math.round(((this.backgroundPosition.x-this.playerPosition.x+5) * (-1)- 32)/16),
            y: Math.round(((this.backgroundPosition.y-this.playerPosition.y) * (-1)-129)/16)
        }
        console.log('hi1')

        if(this.fieldDirection == 2 && this.fieldOverview[finalPosition.y][finalPosition.x] != 0 && this.fieldOverview[finalPosition.y][finalPosition.x] < 11)    this.fieldOverview[finalPosition.y][finalPosition.x] += 20
        if(this.fieldDirection == -2 && this.fieldOverview[finalPosition.y+2][finalPosition.x] != 0 && this.fieldOverview[finalPosition.y+2][finalPosition.x] < 11)   this.fieldOverview[finalPosition.y+2][finalPosition.x] += 20
        if(this.fieldDirection == 1 && this.fieldOverview[finalPosition.y+1][finalPosition.x+1] != 0 && this.fieldOverview[finalPosition.y+1][finalPosition.x+1] < 11)    this.fieldOverview[finalPosition.y+1][finalPosition.x+1] += 20
        if(this.fieldDirection == -1 && this.fieldOverview[finalPosition.y]+1[finalPosition.x-1] != 0 && this.fieldOverview[finalPosition.y+1][finalPosition.x-1] < 11)   this.fieldOverview[finalPosition.y+1][finalPosition.x- 1] += 20
    }
    checkFieldsForConnections(){
        console.log('fields Connection')
        for(let i = 0;i<11;i++){
            for(let j = 0;j<28;j++){
                
                if(this.fieldOverview[i][j] != 0){
                    //info represents the field number of the Image (look in img/field)
                    let info = 0;

                    //checks how many fields are around the current field
                    let count = 0;
                    if(this.fieldOverview[i+1] != null && this.fieldOverview[i+1][j] != 0) count ++
                    if(this.fieldOverview[i-1] != null &&this.fieldOverview[i-1][j] != 0) count ++
                    if(this.fieldOverview[i][j-1] != null &&this.fieldOverview[i][j-1] != 0) count ++
                    if(this.fieldOverview[i][j+1] != null &&this.fieldOverview[i][j+1] != 0) count ++

                    //checks if the current field is watered
                    let water = false
                    if(this.fieldOverview[i][j] > 10)water = true 
                    //if there ar more than 3 fields the image is a whole field
                    if(count >= 3) info = 4

                    //if the count is 2 it is a corner piece
                    else if(count == 2){
                        if(this.fieldOverview[i+1] != null && this.fieldOverview[i][j+1] != null &&this.fieldOverview[i+1][j] != 0 && this.fieldOverview[i][j+1] != 0) info = 7
                        else if(this.fieldOverview[i-1] != null && this.fieldOverview[i][j+1] != null &&this.fieldOverview[i-1][j] != 0 && this.fieldOverview[i][j+1] != 0) info = 10
                        else if(this.fieldOverview[i-1] != null && this.fieldOverview[i][j-1] != null &&this.fieldOverview[i][j-1] != 0 && this.fieldOverview[i-1][j] != 0) info = 9
                        else if(this.fieldOverview[i+1] != null && this.fieldOverview[i][j-1] != null &&this.fieldOverview[i][j-1] != 0 && this.fieldOverview[i+1][j] != 0) info = 8
                        else info = 4
                    }

                    //if the count is 1 it's just a single piece
                    else if(count == 1){
                        if(this.fieldOverview[i+1] != null &&this.fieldOverview[i+1][j] != 0 ) info = 2
                        else if(this.fieldOverview[i-1] != null &&this.fieldOverview[i-1][j] != 0) info = 6
                        else if(this.fieldOverview[i][j-1] != null &&this.fieldOverview[i][j-1] != 0) info = 5
                        else if(this.fieldOverview[i][j+1] != null &&this.fieldOverview[i][j+1] != 0) info = 3
                        else info = 4
                    }

                    //at last if evrything is not true it's a lonely field
                    else info = 1 
                    
                    if(water) info +=20
                    this.fieldOverview[i][j] = info
                }
            }
        }
    }
    plant(index){
        //calculates the position of the field
        let finalPosition={
            x: Math.round(((this.backgroundPosition.x-this.playerPosition.x+5) * (-1)- 32)/16),
            y: Math.round(((this.backgroundPosition.y-this.playerPosition.y) * (-1)-129)/16)
        }
        //console.log('X: '+finalPosition.x+', Y: '+finalPosition.y)

        this.plantDirectory = [
            ['error'],
            ["Pastinake",4,["./../img/inventarAndItems/pastinakeD0.png","./../img/inventarAndItems/pastinakeD1.png","./../img/inventarAndItems/pastinakeD2.png","./../img/inventarAndItems/pastinakeD3.png","./../img/inventarAndItems/pastinakeD4.png"],-1,7],
            ["Knoblauch",4,["./../img/inventarAndItems/knoblauchD0.png","./../img/inventarAndItems/knoblauchD1.png","./../img/inventarAndItems/knoblauchD2.png","./../img/inventarAndItems/knoblauchD3.png","./../img/inventarAndItems/knoblauchD4.png"],-1,8],
            ["Weizen",4,["imageSrc"],-1,9],
            ["Tomaten",11,["imageSrc"],4,10]
        ]

        let info = this.plantDirectory[index]

        let x= this.position.x+(16*finalPosition.x)
        let y=this.position.y+(16*finalPosition.y)
        
        //calculates the direction of the field and if it is not already a field
        let done = false
        if(this.fieldDirection == 2  && this.fieldOverview[finalPosition.y][finalPosition.x]     != 0){
            this.plants[finalPosition.y][finalPosition.x] = new plant(info[1],info[2],info[3],x,y,info[4])
            done = true
        }    
        if(this.fieldDirection == -2 && this.fieldOverview[finalPosition.y+2][finalPosition.x]   != 0){
            this.plants[finalPosition.y+2][finalPosition.x] = new plant(info[1],info[2],info[3],x,y,info[4])  
            done = true
        }   
        if(this.fieldDirection == 1  && this.fieldOverview[finalPosition.y+1][finalPosition.x+1] != 0){
            this.plants[finalPosition.y+1][finalPosition.x+1] = new plant(info[1],info[2],info[3],x,y,info[4])
            done = true
        }    
        if(this.fieldDirection == -1 && this.fieldOverview[finalPosition.y+1][finalPosition.x- 1]!= 0){
            this.plants[finalPosition.y+1][finalPosition.x- 1] = new plant(info[1],info[2],info[3],x,y,info[4])
            done = true
        }   
        if(done){
            gameInventar.quantaty[gameInventar.active] --
            if(gameInventar.quantaty[gameInventar.active] == 0) gameInventar.items[gameInventar.active] = 0
        }
    }
    getPlant(){
        let finalPosition={
            x: Math.round(((this.backgroundPosition.x-this.playerPosition.x+5) * (-1)- 32)/16),
            y: Math.round(((this.backgroundPosition.y-this.playerPosition.y) * (-1)-129)/16)
        }
        
        //checks first if ont looking field is a plant, if yes than it checks if the plant is done growing if yes it gets the plant in the inventar than it deletes itself
        if(this.fieldDirection == 2  && this.plants[finalPosition.y][finalPosition.x]     != 0 && this.plants[finalPosition.y][finalPosition.x].daysToGrow == 0)        if(this.plants[finalPosition.y][finalPosition.x].getPlant())            this.plants[finalPosition.y][finalPosition.x] = 0       , console.log('done')
        if(this.fieldDirection == -2 && this.plants[finalPosition.y+2][finalPosition.x]   != 0 && this.plants[finalPosition.y+2][finalPosition.x].daysToGrow == 0)      if(this.plants[finalPosition.y+2][finalPosition.x].getPlant())          this.plants[finalPosition.y+2][finalPosition.x] = 0     , console.log('done')
        if(this.fieldDirection == 1  && this.plants[finalPosition.y+1][finalPosition.x+1] != 0 && this.plants[finalPosition.y+1][finalPosition.x+1].daysToGrow == 0)    if(this.plants[finalPosition.y+1][finalPosition.x+1].getPlant())        this.plants[finalPosition.y+1][finalPosition.x+1] = 0   , console.log('done')
        if(this.fieldDirection == -1 && this.plants[finalPosition.y+1][finalPosition.x- 1]!= 0 && this.plants[finalPosition.y+1][finalPosition.x-1].daysToGrow == 0)    if(this.plants[finalPosition.y+1][finalPosition.x- 1].getPlant())       this.plants[finalPosition.y+1][finalPosition.x-1] = 0   , console.log('done')

    }
    nextDay(){
        for(let i = 0;i<11;i++){
            for(let j = 0;j<28;j++){
                if(this.plants[i][j] != 0  ){
                    if(this.fieldOverview [i][j] <= 20) this.plants[i][j] = 0
                    else this.plants[i][j].nextDay()
                }
                if(this.fieldOverview[i][j] > 20) this.fieldOverview[i][j] -= 20
            }
        }
        gameClock.sleep()
    }
}