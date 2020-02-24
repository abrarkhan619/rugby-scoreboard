//scoring
const eventPoints = document.getElementById("eventPoints")
const homeScore = document.getElementById("homeScore")
const awayScore = document.getElementById("awayScore")

//buttons
const startGameButton = document.getElementById("startGameButton")
const homeTry = document.getElementById("homeTry")
const homeConversion = document.getElementById("homeConversion")
const homePenalty = document.getElementById("homePenalty")
const homeDropGoal = document.getElementById("homeDropGoal")

const awayTry = document.getElementById("awayTry")
const awayConversion = document.getElementById("awayConversion")
const awayPenalty = document.getElementById("awayPenalty")
const awayDropGoal = document.getElementById("awayDropGoal")

//timer
const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const gameOver = document.getElementById("gameOver")

//Stats
const homeTryStat = document.getElementById("homeTryStat")
const homeConversionStat = document.getElementById("homeConversionStat")
const homePenaltyStat = document.getElementById("homePenaltyStat")
const homeDropStat = document.getElementById("homeDropStat")

const awayTryStat = document.getElementById("awayTryStat")
const awayConversionStat = document.getElementById("awayConversionStat")
const awayPenaltyStat = document.getElementById("awayPenaltyStat")
const awayDropStat = document.getElementById("awayDropStat")



let pointsScored = 0
const tryPoints = 5;
const conversionPoints = 2;
const penaltyPoints = 3;
const dropGoalPoints = 3;
let tryStat = 1;
let conversionStat = 1;
let penaltyStat = 1;
let dropStat = 1;


// Function for timer
function countUpTimer() {
    let time = 0;
    countUp = setInterval(function(){
        // let time = 0;
        time++;
        seconds.textContent = time
    
        if (seconds.textContent % 60 == 0) {
            minutes.textContent++
            time = 0
        }

        if (minutes.textContent == 80) {
            if (homeScore.textContent > awayScore.textContent) {
                eventPoints.textContent = "HOME TEAM WINS"
            } else if (homeScore.textContent < awayScore.textContent) {
                eventPoints.textContent = "AWAY TEAM WINS"
            } else {
                eventPoints.textContent = "GAME OVER. IT'S A DRAW."
            }
            time = 0
            seconds.textContent = "00"
            // startGameButton.disabled = false;
        }

        // startGameButton.disabled = true;
    }, 1)
}

// On click button actions
startGameButton.addEventListener("click", () =>{
    // if (minutes.textContent > 0 || seconds.textContent > 0)
    // if (minutes.textContent == "80") {
    //     console.log("reset logging");
    //     startGameButton.disabled = false;
    //     time = 0
    //     minutes.textContent = 00
    //     countUpTimer()
    // } else if (seconds.textContent == 0 && minutes.textContent == 0) {
    //     console.log("start game");
    //     startGameButton.disabled = true;
    //     time = 0
    //     // minutes.textContent = 00
    //     countUpTimer()
    // }

    if (minutes.textContent == 80) {
        console.log("reset logging");
        // startGameButton.disabled = flase;
        time = 0;
        minutes.textContent = 0;
        seconds.textContent = 0;
        countUpTimer()
    } else if (seconds.textContent == 0 && minutes.textContent == 0) {
        console.log("start game");
        countUpTimer();
    }

    // if (seconds.textContent == 0 && minutes.textContent == 0) {
    //     console.log("start game");
        
    //     countUpTimer()
    //     startGameButton.disabled = true;
    // } else if (minutes.textContent == 80) {
    //     console.log("reset logging");
        
    //     startGameButton.enabled = false;
    //     time = 0
    //     minutes.textContent = 00
    //     countUpTimer()
    // }
})

homeTry.addEventListener("click", () =>{
    eventPoints.textContent = `HOME TEAM SCORED A TRY: ${tryPoints} POINTS`;
    homeScore.textContent = pointsScored += tryPoints
    homeTryStat.textContent = tryStat++;
})

homeConversion.addEventListener("click", () =>{
    eventPoints.textContent = `HOME TEAM SCORED A CONVERSION: ${conversionPoints} POINTS`;
    homeScore.textContent = pointsScored += conversionPoints
    homeConversionStat.textContent = conversionStat++;
})

homePenalty.addEventListener("click", () =>{
    eventPoints.textContent = `HOME TEAM SCORED A PENALTY: ${penaltyPoints} POINTS`;
    homeScore.textContent = pointsScored += penaltyPoints
    homePenaltyStat.textContent = penaltyStat++
})

homeDropGoal.addEventListener("click", () =>{
    eventPoints.textContent = `HOME TEAM SCORED A DROP GOAL: ${dropGoalPoints} POINTS`;
    homeScore.textContent = pointsScored += dropGoalPoints
    homeDropStat.textContent = dropStat++
})

awayTry.addEventListener("click", () =>{
    eventPoints.textContent = `AWAY TEAM SCORED A TRY: ${tryPoints} POINTS`;
    awayScore.textContent = pointsScored += tryPoints
    awayTryStat.textContent = tryStat++;
})

awayConversion.addEventListener("click", () =>{
    eventPoints.textContent = `AWAY TEAM SCORED A CONVERSION: ${conversionPoints} POINTS`;
    awayScore.textContent = pointsScored += conversionPoints
    awayConversionStat.textContent = conversionStat++;
})

awayPenalty.addEventListener("click", () =>{
    eventPoints.textContent = `AWAY TEAM SCORED A PENALTY: ${penaltyPoints} POINTS`;
    awayScore.textContent = pointsScored += penaltyPoints
    awayPenaltyStat.textContent = penaltyStat++
})

awayDropGoal.addEventListener("click", () =>{
    eventPoints.textContent = `AWAY TEAM SCORED A DROP GOAL: ${dropGoalPoints} POINTS`;
    awayScore.textContent = pointsScored += dropGoalPoints
    awayDropStat.textContent = dropStat++
})