/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header);

/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS);

// const playerInfo = document.createElement("div");
// playerInfo.className = "player";

const playerNum = [];
PLAYERS.forEach((info) => playerNum.push(info.number));

const playerName = [];
PLAYERS.forEach((info) => playerName.push(info.name));

const playerNickname = [];
PLAYERS.forEach((info) => playerNickname.push(info.nickname));

const playerPhoto = [];
PLAYERS.forEach((info) => playerPhoto.push(info.photo));

console.log(playerNum);

const whatever = PLAYERS.map(function () {
  const playerInfo = document.createElement("div");
  playerInfo.className = "player";
  const keyname = document.createElement("h3");

  keyname.textContent = "Hello";
  playerInfo.append(keyname);

  document.querySelector(".player-container").append(playerInfo);
});

/***** Deliverable 4 *****/
