/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS);

const playerInfo = document.createElement("div");
playerInfo.className = "player";

const playerNum = []; 
PLAYERS.forEach(info => playerNum.push(info.number));

/***** Deliverable 4 *****/
