var gameSeq = [];
var userSeq = [];
var started = false;
var level = 0;
var checkAns = false;
const h2 = document.querySelector("h2");
var time = 1000;
const allBtns = document.querySelectorAll(".btn");
const start = document.getElementsByClassName('start')[0];
const restart = document.getElementsByClassName('restart')[0];


start.addEventListener('click', startGame);

allBtns.forEach(function(btn) {
    btn.addEventListener('click', function () {
        let bttn = this.getAttribute("id");
        btnFlash(btn);
        let userCol = bttn;
        userSeq.push(userCol);
       
    });

});

 function btnFlash(btn) {
    
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash")
    }, 70);
    

}
function activateColor() {
    let arr = [ "red", "green", "blue", "purple"];

    let ranIndex = Math.floor(Math.random() * 3);
    let ranCol = arr[ranIndex];
    let btn = document.getElementsByClassName(ranCol)[0];   
    btnFlash(btn);
    gameSeq.push(ranCol);
    

}


function reset() {
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
    h2.innerText = "Start Game!";
    time = 1000;
    checkAns = false;
    start.classList.remove('hidden');
    restart.classList.add('hidden');

}


function gameOver() {
    started = false;
    h2.innerText = "Game Over... Press any key to start again! " + "Your score was " + level + ".";
    restart.classList.remove('hidden');
    restart.addEventListener('click', reset);

}

function updateRound() {
    
    if(checkAns) {
        setTimeout(() => {
            levelUp();
        }, 100);
    } else {
        gameOver();
       
    }
}

function check() {
    if(started) {
        
        let n = level-1;
        checkAns=false;
        for(let i=0; i<=n; i++) {
            if(userSeq[i] == gameSeq[i]) {
                checkAns = true;
            } else {
                gameOver();
            }
        }
        updateRound();
    }
}


function levelUp() {
    if(started) {
        level++;
        time+=1500;
        userSeq = [];
        h2.innerText = "Level " + level;
        if(level == 1){
            activateColor();
        } else {
            
            activateColor();
        }
        
        setTimeout(function() {
            check();
        }, time);
    }

  
}


 function startGame() {
    if(started == false) {
        started = true;
        levelUp();
        h2.innerText = "Level " + level;
        start.classList.add('hidden');
    }

}







