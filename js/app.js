let woodPlayerCount = document.getElementById("wood-count")
let brickPlayerCount = document.getElementById("brick-count")
let wheatPlayerCount = document.getElementById("wheat-count")
let rockPlayerCount = document.getElementById("rock-count")
let sheepPlayerCount = document.getElementById("sheep-count")
let woodBank = document.getElementById("wood-bank")
let brickBank = document.getElementById("brick-bank")
let wheatBank = document.getElementById("wheat-bank")
let rockBank = document.getElementById("rock-bank")
let sheepBank = document.getElementById("sheep-bank")
let woodPlayer = document.getElementById("wood-player")
let brickPlayer = document.getElementById("brick-player")
let wheatPlayer = document.getElementById("wheat-player")
let rockPlayer = document.getElementById("rock-player")
let sheepPlayer = document.getElementById("sheep-player")
let selectDevCard = document.getElementById("bank-dev-cards")
let addDevCardBtn = document.getElementById("add-dev-card")
let playerDevCard = document.getElementById("player-dev-cards")
let useDevCardBtn = document.getElementById("use-dev-card")


//variables
let woodCount = 0
let brickCount = 0
let wheatCount = 0
let rockCount = 0
let sheepCount = 0 
let devCardCount = 1

//event listeners
woodBank.addEventListener('click', addWood)
brickBank.addEventListener('click', addBrick)
wheatBank.addEventListener('click', addWheat)
rockBank.addEventListener('click', addRock)
sheepBank.addEventListener('click', addSheep)
woodPlayer.addEventListener('click', subtractWood)
brickPlayer.addEventListener('click', subtractBrick)
wheatPlayer.addEventListener('click', subtractWheat)
rockPlayer.addEventListener('click', subtractRock)
sheepPlayer.addEventListener('click', subtractSheep)
addDevCardBtn.addEventListener('click', addDevCard)
useDevCardBtn.addEventListener('click', useDevCard)






init()
function init () {
  woodPlayerCount.innerHTML = parseInt(woodCount)
  brickPlayerCount.innerHTML = parseInt(brickCount)
  wheatPlayerCount.innerHTML = parseInt(wheatCount)
  rockPlayerCount.innerHTML = parseInt(rockCount)
  sheepPlayerCount.innerHTML = parseInt(sheepCount)
  console.log("hit")
}

function addWood () {
  woodCount += 1
  woodPlayerCount.innerHTML = parseInt(woodCount)
}

function addBrick () {
  brickCount += 1
  brickPlayerCount.innerHTML = parseInt(brickCount)
}

function addWheat () {
  wheatCount += 1
  wheatPlayerCount.innerHTML = parseInt(wheatCount)
}

function addRock () {
  rockCount += 1
  rockPlayerCount.innerHTML = parseInt(rockCount)
}

function addSheep () {
  sheepCount += 1
  sheepPlayerCount.innerHTML = parseInt(sheepCount)
}

function subtractWood () {
  if (woodCount > 0) {
    woodCount -= 1
  }
  woodPlayerCount.innerHTML = parseInt(woodCount)
}

function subtractBrick () {
  if (brickCount > 0) {
    brickCount -= 1
  }
  brickPlayerCount.innerHTML = parseInt(brickCount)
}

function subtractWheat () {
  if (wheatCount > 0) {
    wheatCount -= 1
  }
  wheatPlayerCount.innerHTML = parseInt(wheatCount)
}

function subtractRock () {
  if (rockCount > 0) {
    rockCount -= 1
  }
  rockPlayerCount.innerHTML = parseInt(rockCount)
}

function subtractSheep () {
  if (sheepCount > 0) {
    sheepCount -= 1
  }
  sheepPlayerCount.innerHTML = parseInt(sheepCount)
}

function addDevCard () {
  let devCard = selectDevCard.options[selectDevCard.selectedIndex].value
  console.log(devCard)
  $('#player-dev-cards').append(`<option value="${devCard}">${devCard}</option>`)  



  // devCard.text = selectDevCard.options[selectDevCard.selectedIndex].value
  // console.log(devCardCount)
  // playerDevCard.add(devCard, devCardCount)
  // devCardCount += 1
  // console.log(devCardCount)
}

function useDevCard () {
  let usedDevCard = playerDevCard.options[playerDevCard.selectedIndex].value
  console.log(usedDevCard)
}


