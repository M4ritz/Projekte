const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

/* ------ Initialisieren von Klassen  ------*/
const background = new backgroundImage({
    position: { 
        x:0,
        y:0,
    },
    imageSrc: './../img/landscape/spawn.png'
})
const player = new Player({
    position: {
        x:140,
        y:60,
    },
    frame: 111,
    frames:3,
    imageSrc: '../img/playerSprite/idle_unten.png'
})
const fields = new field
const gameInventar = new inventar
const gameClock = new time;

/* ----- for switching backgrounds */
let farm = true;
let house = false;
let wayToVillage = false;
let village = false;
//each one represents a background , ... , if it is true it will process the given background borders and images

//clock
//need to make an extrafunction bc gameClock.update without () is not working
function updateClock(){
    gameClock.update()
}
setInterval(updateClock,1000)
/* ------ Initialisieren vom Spieler  ------*/
curentBackground = background
function gameLoop() {
    //console.log('repo')
    window.requestAnimationFrame(gameLoop)
    //Player position is given to the Background
    curentBackground.playerPosition = player.position
    fields.playerPosition = player.position

    //Backgroundposition is given to fields
    fields.backgroundPosition = curentBackground.position

    //Background Variable is given to Player
    player.forPlayer = curentBackground.forPlayer

    curentBackground.update(farm,house,wayToVillage,village)
    if(farm)fields.update()

    //always needs to update
    player.update()
    gameInventar.update()
    gameClock.dayColors()
}
window.requestAnimationFrame(gameLoop)

// Keylistener

//      Key object (overview of the key status)
const keys = {
    w:{
        pressed: false
    },
    d: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    }
}
//      Keydown event changes the keys object to true (if the key is pressed it will be set to true)
window.addEventListener('keydown', () => {
    switch(event.key){
        case 'd'||'D':
            keys.d.pressed = true
            player.changeSprite('../img/playerSprite/gehen_rechts.png',1)
            curentBackground.changeDirection(1)
            fields.changeDirection(1)
        break
        case 'a'||'A':
            keys.a.pressed = true
            player.changeSprite('../img/playerSprite/gehen_links.png',-1)
            curentBackground.changeDirection(-1)
            fields.changeDirection(-1)
            break
        case 's'||'S':
            keys.s.pressed = true
            player.changeSprite('../img/playerSprite/gehen_unten.png',-2)
            curentBackground.changeDirection(-2)
            fields.changeDirection(-2)
            break
        case 'w'||'W':
            keys.w.pressed = true
            player.changeSprite('../img/playerSprite/gehen_oben.png',2)
            curentBackground.changeDirection(2)
            fields.changeDirection(2)
            break
        //action key
            case 'j':
            //checks if he can make a field
            if(gameInventar.allowField()){
                fields.newField()
            }

            //checks if he can water a field
            if(gameInventar.allowWater()){
                fields.waterAField()
            }

            //checks if he can remove a field
            if(gameInventar.allowRemove()){
                fields.removeField()
            }
            if(gameInventar.allowSeed()){
                fields.plant(gameInventar.items[gameInventar.active]-2)
            }
            break
        //getPlant
        case 'e'||'E':
            if(gameInventar.allowGetPlant()){
                fields.getPlant()
            }
            break
        //change Inventar slot
        case '1':
            gameInventar.changeSlot(0)
            break
        case '2':
            gameInventar.changeSlot(1)
            break
        case '3':
            gameInventar.changeSlot(2)
            break
        case '4':
            gameInventar.changeSlot(3)
            break
        case '5':
            gameInventar.changeSlot(4)
            break
        case '6':
            gameInventar.changeSlot(5)
            break
        case '7':
            gameInventar.changeSlot(6)
            break
        case '8':
            gameInventar.changeSlot(7)
            break
        case '9':
            gameInventar.changeSlot(8)
            break
     }
    })
//      Keyup event changes the keys object to false (if the key is no longer pressed it will be set to false)
    window.addEventListener('keyup', () => {
        switch(event.key){
            case 'd':
                keys.d.pressed = false
                player.changeSprite('../img/playerSprite/idle_rechts.png',0)
                curentBackground.changeDirection(0)
                fields.changeFieldDirection(1)
                fields.changeDirection(0)
                break
            case 'a':
                keys.a.pressed = false
                player.changeSprite('../img/playerSprite/idle_links.png',0)
                curentBackground.changeDirection(0)
                fields.changeFieldDirection(-1)
                fields.changeDirection(0)

                break
            case 's':
                keys.s.pressed = false
                player.changeSprite('../img/playerSprite/idle_unten.png',0)
                curentBackground.changeDirection(0)
                fields.changeFieldDirection(-2)
                fields.changeDirection(0)

                break
            case 'w':
                keys.w.pressed = false
                player.changeSprite('../img/playerSprite/idle_oben.png',0)
                curentBackground.changeDirection(0)
                fields.changeFieldDirection(2)
                fields.changeDirection(0)

                break
        }
    })