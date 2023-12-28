let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let levelInfo = document.querySelector("h2");
 
document.addEventListener("keypress", function() { startGame() }, false);

let allBtns = document.querySelectorAll(".btn");

allBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let btn = this;
        btnFlash(btn);
        let userCol = btn.getAttribute("id");
    
        userSeq.push(userCol);
    })

})


function startGame() {
    if(started == false) {
        started = true;
        levelUp();
        h2.innerText(`Level ${level}`);
    }

}

function levelUp() {
    level++;

    activateColor();
    userSeq = [];

}


function check() {
    let n = level-1;
    let checkAns = false;
    for(let i=0; i<n; i++) {
        if(userSeq[i] == gameSeq[i]) {
            checkAns = true;
        } else {
            gameOver();
        }
    }
    
    if(checkAns) {
        levelUp();
    } 
}


function activateColor() {
    let arr = [ "red", "green", "blue", "purple"];

    let ranIndex = Math.floor(Math.random() * 3);
    let ranCol = arr[ranIndex];
    let btn = document.getElementsByClassName(`.${ranCol}`);
    btnFlash(btn);
    gameSeq.push(ranCol);

}

 function btnFlash(btn) {
    btn = this;
    btn.classList.add("flash");
    setTimeout( function() {
        btn.classList.remove("flash")
    }, 275);

}


function gameOver() {
    h2.innerHTML("Game Over... Press any key to start again!/n" + "Your score was " + level + ".");
    document.addEventListener("keypress", reset());

}

function reset() {
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}
