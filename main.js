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



// let pointsScored = 0
let homePointsScored = 0;
let awayPointsScored = 0;
const tryPoints = 5;
const conversionPoints = 2;
const penaltyPoints = 3;
const dropGoalPoints = 3;

let tryStatHome = 1;
let conversionStatHome = 1;
let penaltyStatHome = 1;
let dropStatHome = 1;
let tryStatAway = 1;
let conversionStatAway = 1;
let penaltyStatAway = 1;
let dropStatAway = 1;

homeConversion.disabled = true;
awayConversion.disabled = true;
homeTry.disabled = true;
homePenalty.disabled = true;
homeDropGoal.disabled = true
awayTry.disabled = true;
awayPenalty.disabled = true;
awayDropGoal.disabled = true;

function defaultStats() {
    homePointsScored = 0;
    awayPointsScored = 0;

    tryStatHome = 1;
    conversionStatHome = 1;
    penaltyStatHome = 1;
    dropStatHome = 1;
    tryStatAway = 1;
    conversionStatAway = 1;
    penaltyStatAway = 1;
    dropStatAway = 1;

    homeTryStat.textContent = "00";
    homePenaltyStat.textContent = "00";
    homeConversionStat.textContent = "00";
    homeDropStat.textContent = "00"
    awayTryStat.textContent = "00";
    awayPenaltyStat.textContent = "00";
    awayConversionStat.textContent = "00";
    awayDropStat.textContent = "00"
}


// Function for timer
function countUpTimer() {
    let time = 0;
    countUp = setInterval(function () {
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
            homeConversion.disabled = true;
            awayConversion.disabled = true;
            homeTry.disabled = true;
            homePenalty.disabled = true;
            homeDropGoal.disabled = true
            awayTry.disabled = true;
            awayPenalty.disabled = true;
            awayDropGoal.disabled = true;
        }

        // startGameButton.disabled = true;
    }, 1)
}

function resetTimer() {
    console.log("clear timer");
    time = 0;
    minutes.textContent = 0;
    seconds.textContent = 0;

    homeScore.textContent = 0;
    awayScore.textContent = 0;
    homeScore.textContent = "00";
    awayScore.textContent = "00";

    defaultStats()
    clearInterval(countUp)
}

// On click button actions
startGameButton.addEventListener("click", () => {
    if (minutes.textContent == 80) {
        console.log("reset logging");
        eventPoints.textContent = "NEW GAME STARTS!";
        resetTimer();
        countUpTimer();
    } else if (seconds.textContent == 0 && minutes.textContent == 0) {
        console.log("start game");
        eventPoints.textContent = "LET THE GAME BEGIN!";
        countUpTimer();
    }

    homeTry.disabled = false;
    homePenalty.disabled = false;
    homeDropGoal.disabled = false;
    awayTry.disabled = false;
    awayPenalty.disabled = false;
    awayDropGoal.disabled = false;
})

homeTry.addEventListener("click", () => {
    eventPoints.textContent = `HOME TEAM SCORED A TRY: ${tryPoints} POINTS`;
    homeConversion.disabled = false;
    homeScore.textContent = homePointsScored += tryPoints;
    homeTryStat.textContent = tryStatHome++;
})

homeConversion.addEventListener("click", () => {
    eventPoints.textContent = `HOME TEAM SCORED A CONVERSION: ${conversionPoints} POINTS`;
    homeConversion.disabled = true;
    homeScore.textContent = homePointsScored += conversionPoints
    homeConversionStat.textContent = conversionStatHome++;
})

homePenalty.addEventListener("click", () => {
    eventPoints.textContent = `HOME TEAM SCORED A PENALTY: ${penaltyPoints} POINTS`;
    homeScore.textContent = homePointsScored += penaltyPoints
    homePenaltyStat.textContent = penaltyStatHome++
    homeConversion.disabled = true;
})

homeDropGoal.addEventListener("click", () => {
    eventPoints.textContent = `HOME TEAM SCORED A DROP GOAL: ${dropGoalPoints} POINTS`;
    homeScore.textContent = homePointsScored += dropGoalPoints
    homeDropStat.textContent = dropStatHome++
    homeConversion.disabled = true;
})

awayTry.addEventListener("click", () => {
    eventPoints.textContent = `AWAY TEAM SCORED A TRY: ${tryPoints} POINTS`;
    awayConversion.disabled = false;
    awayScore.textContent = awayPointsScored += tryPoints
    awayTryStat.textContent = tryStatAway++;
})

awayConversion.addEventListener("click", () => {
    eventPoints.textContent = `AWAY TEAM SCORED A CONVERSION: ${conversionPoints} POINTS`;
    awayConversion.disabled = true;
    awayScore.textContent = awayPointsScored += conversionPoints
    awayConversionStat.textContent = conversionStatAway++;
})

awayPenalty.addEventListener("click", () => {
    eventPoints.textContent = `AWAY TEAM SCORED A PENALTY: ${penaltyPoints} POINTS`;
    awayScore.textContent = awayPointsScored += penaltyPoints
    awayPenaltyStat.textContent = penaltyStatAway++
    awayConversion.disabled = true;
})

awayDropGoal.addEventListener("click", () => {
    eventPoints.textContent = `AWAY TEAM SCORED A DROP GOAL: ${dropGoalPoints} POINTS`;
    awayScore.textContent = awayPointsScored += dropGoalPoints
    awayDropStat.textContent = dropStatAway++
    awayConversion.disabled = true;
})