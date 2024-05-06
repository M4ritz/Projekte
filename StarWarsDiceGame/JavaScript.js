//Global Variable
let doItG = true;
let doItB = true;
let player1;
let player2;
let storage1,storage2,storage3,storage4;
let lockG = false;
let lockB = false;
let outp = document.getElementById('output');
let score1=0;
let score2=0;
let p1 = false;
let p2 = false;
let player1Dice;
let player2Dice;
const  balancedHP = 10_000;
const  recklessHP = 5_000;
const  carefullHP = 15_000;
const  balancedAT = 2_000;
const  recklessAT = 3_000;
const  carefullAT = 1_000;
let abillityUseG  =false;
let abillityUseB = false;

let player1HP;
let player1AT;

let player2HP;
let player2AT;
function helpOutput(){
   document.getElementById(`refresh`).style.display = "none";
   document.getElementById(`special`).style.opacity = "0";
   document.getElementById(`back`).style.display = "block";
   document.getElementById('helpOutput').style.marginTop = "-1vh";
   document.getElementById('helpOutput').style.height = "93vh";
   document.getElementById('helpOutput').style.width = "65vw";
   document.getElementById('helpOutput').style.opacity = "1";
   document.getElementById('helpOutput').style.backgroundImage=`url("./fantasy.jpeg")`;
   document.getElementById('helpOutput').style.backgroundSize=`contain`;
   
   document.getElementById('helpOutput').innerHTML = '</div>'+
   '<div class="content story">'+
   '<h3>Story</h3>' +
   '<img  src="./multimedia/repSign.png" alt="republikanisches Wappen" id="sign" width="55vw">' +
   '<p class="text">You are a Republic Admiral in the Harbor of your homeplanet and need to decide wich Space ship you will use to win the next space battle.</p><br><br>' +
   '<img  src="./multimedia/sepSigns.png" alt="Seperatistisches Wappen" id="sign" width="55vw">' +
   '<p class="text">You are a Seperatist Admiral in the Harbor of your military Station and need to decide wich Space ship you will use to win the next space battle.</p>' + 
   '</div>' +
   '<div class="content gamesense">' +
   '<h3>Gamesense</h3>' +
   '<p class="text">You can choose beetween 3 options. After that you will have your first Space Battle.</p><br>'+
   '<p class="text">option one: You can be recless have low heallth points, but you also have the most attack points</p><br>'+
   '<p class="text">option two: You can be balanced have normal heallth and attack points</p><br>'+
   '<p class="text">option three: You also can be carefull have high heallth points, but you also have low attack points</p></div>' ; 
}
function returnIt(){
   document.getElementById(`refresh`).style.display = "block";
   document.getElementById(`back`).style.display = "none";
   document.getElementById('helpOutput').style.marginTop = "1vh";
   document.getElementById(`special`).style.opacity = "1";
   document.getElementById('helpOutput').style.width = "49vw";
   document.getElementById('helpOutput').style.height = "10vh";
   document.getElementById('helpOutput').style.backgroundImage = "none";
   document.getElementById('helpOutput').style.backgroundColor = "rgba(255,255,255,0.5)";
   document.getElementById('helpOutput').innerHTML =
   `<div id="helpOutput1"><div id="button" onclick="helpOutput()"">?</div>`+
  `<div style="width: 30vw; margin-top: -4vh;">Good to see you Admiral<br>if you need help with the space ships just click me!`+
   `</div>`;
}

//////////////////////      LOCK IN SYSTEM      //////////////////

function lockInB(box,box1,box2){
   if(box ==1){
      doItB = false;
      document.getElementById(`${player2}`).style.border = "thick solid rgb(26, 255, 0)";
      document.getElementById(`${storage1}`).style.opacity = "0";
      document.getElementById(`${storage2}`).style.opacity = "0";
      lockB = true;
      if(lockB && lockG){ 
         wholeGame();
      }
   } 
   if(doItB){
      document.getElementById(`${box}`).style.border = "thick solid rgb(255, 0, 0)";
      document.getElementById(`${box1}`).style.border = "none";
      document.getElementById(`${box2}`).style.border = "none";
      player2 = box;
      storage1 = box1;
      storage2 = box2;
   }
}
function lockInG(box,box1,box2){
   if(box ==1){
      document.getElementById(`${player1}`).style.border = "thick solid rgb(26, 255, 0)";
      document.getElementById(`${storage3}`).style.opacity = "0";
      document.getElementById(`${storage4}`).style.opacity = "0";
      lockG = true;
      if(lockB && lockG){ 
         wholeGame();
      }
   } 
   if(doItG){
      document.getElementById(`${box}`).style.border = "thick solid rgb(0, 33, 255)";
      document.getElementById(`${box1}`).style.bordeer = "none";
      document.getElementById(`${box2}`).style.border = "none";
      player1 = box;
      storage3 = box1;
      storage4 = box2;
   }
}
document.getElementById('title').innerHTML=
`<h1>Choose your Ship<h1>`
document.getElementById('chooseCharakter').innerHTML =
`<div class="choose" onclick="lockInG('rG','bG','cG')" id="rG"><h4>Stealth fighter</h4><p>HP: <span class="hp">5000</span></p> <p>AT: <span class="at">3000</span></p><p>Special Abillity: <span class="sp">25 percent Chance of not getting a hit if you lose</span></p></div>`+
`<div class="choose" onclick="lockInG('bG','rG','cG')" id="bG"><h4>Bounty Head Group</h4><p>HP: <span class="hp">10 000</span></p> <p>AT: <span class="at">2000</span></p><p>Special Abillity: <span class="sp">25 percent Chance of making double damage</span></p></div>`+
`<div class="choose" onclick="lockInG('cG','rG','bG')" id="cG"><h4>cruiser (from jedi)</h4><p>HP: <span class="hp">15 000</span></p> <p>AT: <span class="at">2000</span></p><p>Special Abillity: <span class="sp">25 percent Chance of getting half of the damage if you lose</span></p></div>`+
`<div></div>`+
`<div class="choose" onclick="lockInB('rB','bB','cB')" id="rB"><h4>fast figther (imperium)</h4><p>HP: <span class="hp">5000</span></p> <p>AT: <span class="at">3000</span></p><p>Special Abillity: <span class="sp">25 percent Chance of not getting a hit if you lose</span></p></div>`+
`<div class="choose" onclick="lockInB('bB','rB','cB')" id="bB"><h4>Bounty Head Group</h4><p>HP: <span class="hp">10 000</span></p> <p>AT: <span class="at">2000</span></p><p>Special Abillity: <span class="sp">25 percent Chance of making double damage</span></p></div>`+
`<div class="choose" onclick="lockInB('cB','bB','rB')" id="cB"><h4>Stardestroyer (imperium)</h4><p>HP: <span class="hp">15 000</span></p> <p>AT: <span class="at">2000</span></p><p>Special Abillity: <span class="sp">25 percent Chance of getting half of the damage if you lose</span></p></div>`+
`<div></div>`+
`<div onclick="lockInG('1','2','3')") class="lockIn">lock in</div>`+
`<div></div>`+
`<div></div>`+
`<div></div>`+
`<div onclick="lockInB('1','2','3')" class="lockIn">lock in</div>`+
`<div></div>`;



function wholeGame(){
   if(player1 == 'rG'){
      player1AT = recklessAT;
      player1HP = recklessHP;
   }
   else if(player1 == 'bG'){
      player1AT = balancedAT;
      player1HP = balancedHP;
   }
   else if(player1 == 'cG'){
      player1AT = carefullAT;
      player1HP = carefullHP;
   }


   if(player2 == 'rB'){
      player2AT = recklessAT;
      player2HP = recklessHP;
   }
   else if(player2 == 'bB'){
      player2AT = balancedAT;
      player2HP = balancedHP;
   }
   else if(player2 == 'cB'){
      player2AT = carefullAT;
      player2HP = carefullHP;
   }

   document.body.style.backgroundImage = "url('./multimedia/battleWallpaper.jpeg')";
   document.getElementById('title').style.display = "none";
   document.getElementById('chooseCharakter').style.gridTemplateColumns = "20vw 15vw 15vw 15vw 20vw";
   document.getElementById('chooseCharakter').style.margin = "10vh";
      game();
}




      //Game
      function game(){
         player1Dice = newDice();
         player2Dice = newDice();
         res = checkTwoDices();
         if(res==1){
            player2HP -= player1AT;
            if(player1 == "bG"){ 
               abillityUseG = true;
               doubleDamage(2);
            }
            if(player1 == "cB"){ 
               abillityUseB = true;
               decreaseDamage(2);
            }
            else if(player1 == "rB"){ 
               abillityUseB = true;
               noDamage(2);
            }
         }
         else if(res==2){
            player1HP -= player2AT
            if(player1 == "cG"){ 
               abillityUseG = true;
               decreaseDamage(1);
            }
            else if(player1 == "rG"){
               abillityUseG = true;
               noDamage(1);
            }
            else if(player1 == "bB"){
               abillityUseB = true;
                doubleDamage(1);
               }
         };
      }

      //generate Random Number
      
      function newDice(){
         return Math.ceil(Math.random()*6);
      }
      //plays 15 matches
      


      function checkTwoDices(){
         
         document.getElementById('chooseCharakter').innerHTML =
         `<div id="character" style='background-Image: linear-gradient(11deg, rgb(0, 75, 75) 62%, rgba(0,0,0,0) 28%),url("./multimedia/fighter/Good/${player1}.png")'>`+
         `<p class="gameText">HP: <span class="hp">${player1HP}</span></p>`+
         `<p>AT: <span class="at">${player1AT}</span></p>`+
         `</div>`+
         '<div><p> PL1 : <div  id="one"></div></p></div>'+
         `<div id="fightButton" onclick="nextRound()">Fight</div>`+
         '<div><p> PL2 : <div  id="two"></div></p></div>'+
         `<div id="character" style='background-Image: linear-gradient(-11deg, rgb(0, 75, 75) 62%, rgba(0,0,0,0) 28%),url("./multimedia/fighter/bad/${player2}.png")'>`+
         `<p class="gameText">HP: <span class="hp">${player2HP}</span></p>`+
         `<p>AT: <span class="at">${player2AT}</span></p>`+
         `</div>`;
         document.getElementById('one').innerHTML = '<img src="./multimedia/Dice/PinClipart_cube_' + player1Dice + '.png" alt="wuerfel" width="100"></img>';
         document.getElementById('two').innerHTML = '<img src="./multimedia/Dice/PinClipart_cube_' + player2Dice + '.png" alt="wuerfel" width="100"></img>';
         if(abillityUseB){
            abillityUseB = false;
         }  
         if(abillityUseG){
            abillityUseB = false;
         }   
         
         if(player1Dice > player2Dice){
               return 1;
            } else if(player1Dice<player2Dice){
               return 2;
            } else{
               return 3;
         }
      }
      function endGame(Winner){
         document.getElementById('chooseCharakter').innerHTML =
         `<div id="character" style='background-Image: linear-gradient(11deg, rgb(0, 75, 75) 62%, rgba(0,0,0,0) 28%),url("./multimedia/fighter/Good/${player1}.png")'>`+
         `<p class="gameText">HP: <span class="hp">${player1HP}</span></p>`+
         `<p>AT: <span class="at">${player1AT}</span></p>`+
         `</div>`+
         '<div><p> PL1 : <div  id="one"></div></p></div>'+
         `<div id="fightButton" onclick="nextRound()">Fight</div>`+
         '<div><p> PL2 : <div  id="two"></div></p></div>'+
         `<div id="character" style='background-Image: linear-gradient(-11deg, rgb(0, 75, 75) 62%, rgba(0,0,0,0) 28%),url("./multimedia/fighter/bad/${player2}.png")'>`+
         `<p class="gameText">HP: <span class="hp">${player2HP}</span></p>`+
         `<p>AT: <span class="at">${player2AT}</span></p>`+
         `</div>`;
         document.getElementById('one').innerHTML = '<img src="./multimedia/Dice/PinClipart_cube_' + player1Dice + '.png" alt="wuerfel" width="100"></img>';
         document.getElementById('two').innerHTML = '<img src="./multimedia/Dice/PinClipart_cube_' + player2Dice + '.png" alt="wuerfel" width="100"></img>';
         if(Winner == 1){
         document.getElementById('chooseCharakter').innerHTML +=
         `<div id="finish">`+
         `<div> The good side of the Power won<br>Well done Admiral</div>`+
         `<a href="./homepage.html"><div>homepage</div></a>`+
         `</div>`;
         }
         if(Winner == 2){
         document.getElementById('chooseCharakter').innerHTML +=
         `<div id="finish">`+
         `<div> The evil side of the Power won<br>Well done Admiral</div>`+
         `<a class="playAgain" href="./homepage.html"><div class="playAgain">homepage</div></a>`+
         `</div>`;
         }
      }
      function percent(){
         return Math.ceil(Math.random()*100);
      }
      function decreaseDamage(pl){
            if(percent() <= 25){
               if(pl == 1){
                  player1HP += (player2AT/2);
               } else{
                  player2HP += (player1AT/2);
               }
            }
      }
      function noDamage(pl){
         if(percent() <= 25){
            if(pl == 1){
               player1HP += player2AT;
            } else{
               player2HP += player1AT;
            }
         }
      }
      function doubleDamage(pl){
         if(percent() <= 25){
            if(pl == 1){
               player1HP -= player2AT;
            } else{
               player2HP -= player1AT;
            }
         }
      }

      //makes another game
      function nextRound(){
         if(player1HP > 0 && player2HP > 0){
               game();
         } else{
            if(player1HP > 0){
               endGame(1);
            }else if(player2HP > 0){
               endGame(2);
            } 
         }
      }
      //makes a restart
      function restart(){
         score1 = 0;
         score2 = 0;
         p1 = false;
         p2 = false;
         outp.innerHTML = "";
         game();
      }