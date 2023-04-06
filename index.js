let homeScore = 0;
let guestScore = 0;

let homePoints = document.getElementById("home-score")
let guestPoints = document.getElementById("guest-score")

function addPointHome() {
    homeScore += 1;
    homePoints.textContent = homeScore;
}

function add2PointsHome() {
    homeScore += 2;
    homePoints.textContent = homeScore;
}

function add3PointsHome() {
    homeScore += 3;
    homePoints.textContent = homeScore;
}

function addPointGuest() {
    guestScore += 1;
    guestPoints.textContent = guestScore;
}

function add2PointsGuest() {
    guestScore += 2;
    guestPoints.textContent = guestScore;
}

function add3PointsGuest() {
    guestScore += 3;
    guestPoints.textContent = guestScore;
}