/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
/*jslint browser: true*/
/* jslint browser */
//javascript { "JSLint.skipBlankLines": true, "JSLint.options": { "vars": true, "browser": true } }; 

var currScore, activePlayer, scores,maxScore,gamePlay;

maxScore=10;

init();
//activePlayer=1;

document.querySelector(".btn-roll").addEventListener('click',function(){
    
    if(gamePlay)
        {
            var num=Math.floor(Math.random()*6)+1;
            var pth="img/dice-"+num+".png";
            document.querySelector(".dice").src = pth;
            document.querySelector(".dice").style.display="block";
            document.querySelector("#curr-"+activePlayer).style.fontSize="36px";
            if(num!=1)
                {
                    currScore+=num;
                    document.querySelector("#curr-"+activePlayer).textContent=currScore;
                }
            else
                {
                    document.querySelector(".dice").style.display="none";
                    nextPlayer();
                }
        }
});

document.querySelector(".btn-hold").addEventListener('click',function(){
    
    if(gamePlay)
        {
            scores[activePlayer-1]+=currScore;
            document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer-1];
            if(scores[activePlayer-1]>maxScore)
                {
                    document.querySelector(".pname").textContent="Winner!!!";
                    document.querySelector(".dice").style.display='none';
                    document.querySelector(".player"+activePlayer).classList.add("winner");
                    document.querySelector(".player"+activePlayer).classList.remove("active");
                    gamePlay=false;
                }
            else
                {
                    nextPlayer();
                }        
        }
});

function nextPlayer()
{
    document.querySelector("#curr-"+activePlayer).style.fontSize="26px";
    activePlayer=(activePlayer===1? 2:1);
    currScore=0;
//    document.querySelector(".dice").style.display="block";
    document.querySelector("#curr-1").textContent=0;
    document.querySelector("#curr-2").textContent=0;
    document.querySelector(".player1").classList.toggle('active');
    document.querySelector(".player2").classList.toggle('active');
}



document.querySelector(".btn-new").addEventListener('click',init);

function  init()
{
    scores=[0,0];
    currScore=roundScore=0;
    activePlayer=1;
    gamePlay=true;
    document.querySelector(".dice").style.display='none';
    document.querySelector(".player1 .pname").textContent="Player 1";
    document.querySelector(".player2 .pname").textContent="Player 2";
    document.querySelector(".player1").classList.remove("winner");
    document.querySelector(".player2").classList.remove("winner");
    document.querySelector(".player1").classList.remove("active");
    document.querySelector(".player2").classList.remove("active");
    document.querySelector(".player1").classList.add("active");
    document.getElementById("score-1").textContent=0;
    document.getElementById("score-2").textContent=0;
    document.getElementById("curr-1").textContent=0;
    document.getElementById("curr-2").textContent=0;
    
}