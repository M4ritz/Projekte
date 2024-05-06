////// ADIO /////
let homepage = new Audio("./Multimedia/sounds/homepage.mp3");
let cyberpunk = new Audio("./Multimedia/sounds/cyberpunk.mp3");
let japaN = new Audio("./Multimedia/sounds/japan.wav");
let programminG = new Audio("./Multimedia/sounds/programming.wav");
let christmaS = new Audio("./Multimedia/sounds/christmas.wav");
let junglE = new Audio("./Multimedia/sounds/jungle.wav");
let legO = new Audio("./Multimedia/sounds/lego.wav");
homepage.play();
homepage.currentTime = 2;
let wrong = new Audio("./Multimedia/sounds/wrong.wav");
let draw = new Audio("./Multimedia/sounds/draw.wav");
homepage.volume=0.5;
cyberpunk.volume=0.5;
japaN.volume=0.5;
programminG.volume=0.5;
christmaS.volume=0.5;
junglE.volume=0.5;
legO.volume=0.5;

///// Game //////
let gameMatrix =[
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]
let Status = true;
let Won = false;
let winO = 0;
let winX = 0;
let every = 0;
let theme = "";

/////////// THEMES ///////
function cyberPunk(){
    document.body.style.backgroundImage = "url(./Multimedia/cPWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    theme = "cP";
    homepage.pause();
    cyberpunk.play();
    cyberpunk.loop = true;
    startGame();
}
function lego(){
    document.body.style.backgroundImage = "url(./Multimedia/lWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    theme = "l";
    homepage.pause();
    legO.play();
    legO.loop = true;
    startGame();
}
function christmas(){
    document.body.style.backgroundImage = "url(./Multimedia/cHWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    theme = "cH";
    homepage.pause();
    christmaS.play();
    christmaS.loop = true;
    startGame();
}
function japan(){
    document.body.style.backgroundImage = "url(./Multimedia/jWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    theme = "j";
    homepage.pause();
    japaN.play();
    japaN.loop = true;
    startGame();
}
function nature(){
    document.body.style.backgroundImage = "url(./Multimedia/nWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    theme = "n";
    homepage.pause();
    junglE.play();
    junglE.loop = true;
    startGame();
}
function programming(){
    document.body.style.backgroundImage = "url(./Multimedia/pWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    theme = "p";
    homepage.pause();
    programminG.play();
    programminG.loop = true;
    startGame();
}
function startGame(){
    resetGame();
    document.getElementById('themeSelector').style.display = "none"
    document.getElementById('game').style.display = "flex"
    document.getElementById('circle').style.backgroundImage = `url('./Multimedia/${theme}O.jpg')`;
    document.getElementById('cross').style.backgroundImage = `url('./Multimedia/${theme}X.jpg')`;
}
function checkStatus(box,x,y){
    wrong.currentTime = 0;
    draw.currentTime = 0;
    if(!Won){
    if(gameMatrix[x][y] == -1){
        if(Status){
            console.log("O")
            document.getElementById('cross').style.opacity= "1";
            document.getElementById('circle').style.opacity= "0.5";
            draw.play();
            box.innerHTML = `<img id="img" src="./Multimedia/${theme}O.jpg" style="opacity:0.8;">`;
            Status = false;
            gameMatrix[x][y] = 10;
            every ++;
        } else{
            document.getElementById('circle').style.opacity= "1";
            document.getElementById('cross').style.opacity= "0.5";
            console.log("X")
            draw.play();
            box.innerHTML = `<img id="img" src="./Multimedia/${theme}X.jpg" style="opacity:0.8;">"`;
            Status = true;
            gameMatrix[x][y] = 5;
            every ++;
        }
        if(gameMatrix[x][0]+gameMatrix[x][1]+gameMatrix[x][2]== 30||gameMatrix[0][y]+gameMatrix[1][y]+gameMatrix[2][y]== 30||gameMatrix[0][0]+gameMatrix[1][1]+gameMatrix[2][2]== 30||gameMatrix[0][2]+gameMatrix[1][1]+gameMatrix[2][0]==30){
            document.getElementById('cross').style.border= "solid red 1vw";
            document.getElementById('circle').style.border= "solid green 1vw";
            document.getElementById('circle').style.opacity= "1";
            document.getElementById('cross').style.opacity= "0.5";
            winO ++;
            Won= true;
            console.log("O wins");
            document.getElementById("main").style.opacity ="0.7";
            setTimeout(menu,1500);
        } else if(gameMatrix[x][0]+gameMatrix[x][1]+gameMatrix[x][2]== 15||gameMatrix[0][y]+gameMatrix[1][y]+gameMatrix[2][y]== 15||gameMatrix[0][0]+gameMatrix[1][1]+gameMatrix[2][2]== 15||gameMatrix[0][2]+gameMatrix[1][1]+gameMatrix[2][0]==15){
            document.getElementById('cross').style.border= "solid green 1vw";
            document.getElementById('circle').style.border= "solid red 1vw";
            document.getElementById('cross').style.opacity= "1";
            document.getElementById('circle').style.opacity= "0.5";
            winX ++;
            Won= true;
            console.log("X wins");
            document.getElementById("main").style.opacity ="0.7";
            setTimeout(menu,1500);
        } else if(every == 9){
            document.getElementById('cross').style.opacity= "0.7";
            document.getElementById('circle').style.opacity= "0.7";
            document.getElementById("main").style.opacity ="0.7";
            setTimeout(menu,1500)
        }
    } else{ 
        wrong.play();
        box.classList.remove('wrong');
        box.offsetHeight;
        box.classList.add('wrong');
    }
    }
}
function menu(){
    document.getElementById('cO').innerHTML = `O: ${winO}`;
    document.getElementById('cX').innerHTML = `X: ${winX}`;
    document.getElementById('menu').style.display = 'block';
}
function themeSelect(){
    document.getElementById('menu').innerHTML = 
    `<a href="./start.html"><div class="but">HOME</div></a>
    <div class="but" onclick="resetScore()">RESET SCORE</div>
    <div class="but" onclick="nextGame()">NEXT GAME</div>`;
    allAudioStop(); 
    homepage.play(); 
    document.body.style.backgroundImage = "url(./Multimedia/neutralWallpaper.gif)";
    document.body.style.backgroundSize = "cover";
    document.getElementById('game').style.display = "none";
    document.getElementById('themeSelector').style.display = "block";
    document.getElementById('menu').style.display = 'none';
}
function resetGame(){
    document.getElementById('cross').style.border= "";
    document.getElementById('circle').style.border= "";
    gameMatrix =[
        [-1,-1,-1],
        [-1,-1,-1],
        [-1,-1,-1]
    ]
    Won=false;
    every = 0;
    document.getElementById("main").style.opacity ="1";
    if(Status){
        document.getElementById('cross').style.opacity= "0.5";
        document.getElementById('circle').style.opacity= "1";
    } else{
        document.getElementById('circle').style.opacity= "0.5";
        document.getElementById('cross').style.opacity= "1";
    }

    document.getElementById('main').innerHTML =
    `<div id="box1" class="box" onclick="checkStatus(this,0,0)"></div>
    <div id="box2" class="box" onclick="checkStatus(this,0,1)"></div>
    <div id="box3" class="box" onclick="checkStatus(this,0,2)"></div>
    <div id="box4" class="box" onclick="checkStatus(this,1,0)"></div>
    <div id="box5" class="box" onclick="checkStatus(this,1,1)"></div>
    <div id="box6" class="box" onclick="checkStatus(this,1,2)"></div>
    <div id="box7" class="box" onclick="checkStatus(this,2,0)"></div>
    <div id="box8" class="box" onclick="checkStatus(this,2,1)"></div>
    <div id="box9" class="box" onclick="checkStatus(this,2,2)"></div>`;
}
function resetScore(){
    winO = 0;
    winX = 0;
    document.getElementById('cO').innerHTML = `O: ${winO}`;
    document.getElementById('cX').innerHTML = `X: ${winX}`;
}
function nextGame(){
    document.getElementById('menu').innerHTML = 
        `<div class="but" style="background-color:rgba(0,0,0,0);background-image: url('./Multimedia/${theme}Wallpaper.gif')" onclick="oldTheme()">KEEP THEME</div>
        <div class="but" onclick="themeSelect()">NEW THEME</div>`;      
}
function oldTheme(){
    document.getElementById('menu').style.display = 'none';
    document.getElementById('menu').innerHTML = 
    `<a href="./start.html"><div class="but">HOME</div></a>
    <div class="but" onclick="resetScore()">RESET SCORE</div>
    <div class="but" onclick="nextGame()">NEXT GAME</div>`;
    startGame();
}
function allAudioStop(){
    homepage.pause();
    homepage.currentTime = 2;
    cyberpunk.pause();
    cyberpunk.currentTime = 2;
    japaN.pause();
    japaN.currentTime = 2;
    programminG.pause();
    programminG.currentTime = 2;
    christmaS.pause();
    christmaS.currentTime = 2;
    junglE.pause();
    junglE.currentTime = 2;
    legO.pause();
    legO.currentTime = 2;
}