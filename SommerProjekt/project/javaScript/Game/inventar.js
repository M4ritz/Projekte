class inventar{
    constructor(){
        this.items =    [2,1,6,3,4,0,0,0,0]
        this.quantaty = [1,1,1,5,5,0,0,0,0]
        this.active = 0
        this.imaages = ["./../img/inventarAndItems/inventar.png",       //0
                        "./../img/inventarAndItems/wateringCan.png",    //1
                        "./../img/inventarAndItems/hoe.png",            //2
                        "./../img/inventarAndItems/pastinakenSamen.png",//3
                        "./../img/inventarAndItems/knoblauchSamen.png", //4
                        "",                                             //5
                        "./../img/inventarAndItems/pick-axe.png",       //6
                        "./../img/inventarAndItems/pastinkakeItem.png", //7
                        "./../img/inventarAndItems/knoblauch.png"]      //8
        this.image = new Image()
        this.image.src = this.imaages[0]
        const nextSlot = 19;


        this.pathNumber = "./../img/numbersForItem/"
    }
    draw(){
        /*ctx.fillStyle = 'rgb(0,0,0)'
        ctx.fillRect(60, 130,180,15)
        for(let i = 0;i<9;i++){
            ctx.fillStyle = 'rgb(255,255,255)'
            ctx.fillRect(65 + (i*20),132.5,10,10)
        }*/
        ctx.drawImage(this.image,60,120)
        for(let slot = 0;slot<9;slot++){
            if(this.items[slot] != 0){
                let newImage = new Image();
                newImage.src = this.imaages[this.items[slot]]

                ctx.drawImage(newImage,71+(slot * 19),125)

                //calculates the quantaty
                if(this.quantaty[slot] >= 10){
                    //einerStelle allein
                    let ones = this.quantaty[slot] % 10
                    
                    //einer stelle img
                    let one = new Image();
                    one.src = this.pathNumber + ones + ".png"

                    //zehner stelle img
                    let ten = new Image();
                    ten.src = this.pathNumber + ((this.quantaty[slot] - ones)/10) + ".png"


                    //draw
                    ctx.drawImage(ten,77+(slot * 19),134)
                    ctx.drawImage(one,81+(slot * 19),134)
                    
                } else if(this.quantaty[slot] > 1){
                    //einerStelle allein
                    let ones = this.quantaty[slot] % 10
                    
                    //einer stelle img
                    let one = new Image();
                    one.src = this.pathNumber + ones + ".png"

                    //draw
                    ctx.drawImage(one,81+(slot * 19),134)
                }
            }
        }
    }
    update(){
        this.draw()
        this.current()
    }
    allowRemove(){
        if(this.items[this.active] == 6)return true
        return false
    }
    current(){
        let currentSlot = new Image();
        currentSlot.src = "./../img/inventarAndItems/currentSlot.png"
        ctx.drawImage(currentSlot,67+(this.active * 19),124)
    }
    changeSlot(newActive){
        this.active = newActive;
    }
    allowField(){
        if(this.items[this.active] == 2) return true
        return false
    }
    allowWater(){
        if(this.items[this.active] == 1) return true
        return false
    }
    allowSeed(){
        if(this.items[this.active] >= 3 && this.items[this.active] <= 5)return true
        return false
    }
    allowGetPlant(){
        if(this.items[this.active] == 0 || this.items[this.active] == 7)return true
        for(let i = 0; i < 9 ; i++){
            if(this.items[i] == 0)return true
        }
        return false
    }
}