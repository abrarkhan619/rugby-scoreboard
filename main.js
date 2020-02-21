const eventPoints = document.getElementById("eventPoints")
const totalScore = document.getElementById("totalScore")
const startGameButton = document.getElementById("startGameButton")
const tryScored = document.getElementById("tryScored")
const conversionScored = document.getElementById("conversionScored")
const penalty = document.getElementById("penalty")
const dropGoal = document.getElementById("dropGoal")
const seconds = document.getElementById("seconds")
const minutes = document.getElementById("minutes")
const gameOver = document.getElementById("gameOver")
const homeTryStat = document.getElementById("homeTryStat")
const homeConversionStat = document.getElementById("homeConversionStat")
const homePenaltyStat = document.getElementById("homePenaltyStat")
const homeDropStat = document.getElementById("homeDropStat")



let pointsScored = 0
const tryPoints = 5;
const conversionPoints = 2;
const penaltyPoints = 3;
const dropGoalPoints = 3;
let tryStat = 1;
let conversionStat = 1;
let penaltyStat = 1;
let dropStat = 1;


// let time = 0;
// let countUp = setInterval(function(){

//     ++time;
//     seconds.textContent = time

//     if (seconds.textContent % 60 == 0) {
//         minutes.textContent++
//         time = 0
//     }

// }, 10)


function countUpTimer() {
    let time = 0;
    countUp = setInterval(function(){

        ++time;
        seconds.textContent = time
    
        if (seconds.textContent % 60 == 0) {
            minutes.textContent++
            time = 0
        }

        if (minutes.textContent == 80) {
            gameOver.textContent = "Game Over"
            time = 0
            seconds.textContent = "00"
        }

        if (seconds.textContent.length == 1) {
            seconds = "0" + seconds
        }

        if (minutes.textContent.length == 1) {
            minutes = "0" + minutes
        }
    }, 1000)
}

startGameButton.addEventListener("click", () =>{
    countUpTimer()
})


tryScored.addEventListener("click", () =>{
    eventPoints.textContent = `Home team scored a try: ${tryPoints} points`;
    totalScore.textContent = pointsScored += tryPoints
    homeTryStat.textContent = tryStat++;
})
conversionScored.addEventListener("click", () =>{
    eventPoints.textContent = `Home team scored a conversion: ${conversionPoints} points`;
    totalScore.textContent = pointsScored += conversionPoints
    homeConversionStat.textContent = conversionStat++;
})
penalty.addEventListener("click", () =>{
    eventPoints.textContent = `Home team scored a penalty: ${penaltyPoints} points`;
    totalScore.textContent = pointsScored += penaltyPoints
    homePenaltyStat.textContent = penaltyStat++
})
dropGoal.addEventListener("click", () =>{
    eventPoints.textContent = `Home team scored a drop goal: ${dropGoalPoints} points`;
    totalScore.textContent = pointsScored += dropGoalPoints
    homeDropStat.textContent = dropStat++
})