/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
const playerNum = [];
PLAYERS.forEach((info) => playerNum.push(info.number));

const playerName = [];
PLAYERS.forEach((info) => playerName.push(info.name));

const playerNickname = [];
PLAYERS.forEach((info) => playerNickname.push(info.nickname));

const playerPhoto = [];
PLAYERS.forEach((info) => playerPhoto.push(info.photo));


/***** Deliverable 4 *****/


PLAYERS.forEach(function(info){ 
    //Creates div tag in DOM
    const playerInfo = document.createElement("div");
    playerInfo.className = "player";
    //Creates h3 tag in DOM
    const keyname = document.createElement("h3");
    keyname.textContent = info.name;
    //Store keyname as a child of playerInfo div
    playerInfo.append(keyname);
    //Store playerInfo as a child of .player-container in HTML
    document.querySelector(".player-container").append(playerInfo);

    const imgTag = document.createElement("img");
    imgTag.src = player.photo;
});