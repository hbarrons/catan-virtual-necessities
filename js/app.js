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

//event listeners
woodBank.addEventListener('click', addWood)
brickBank.addEventListener('click', addBrick)
wheatBank.addEventListener('click', addWheat)
rockBank.addEventListener('click', addRock)
sheepBank.addEventListener('click', addSheep)


//variables
let woodCount = 0
let brickCount = 0
let wheatCount = 0
let rockCount = 0
let sheepCount = 0 


init()
function init () {
  // woodPlayer.innerHTML = 0
  // brickPlayer.innerHTML = 0
  // wheatPlayer.innerHTML = 0
  // rockPlayer.innerHTML = 0
  // sheepPlayer.innerHTML = 0
  console.log("hit")
}

function addWood () {
  woodCount += 1
  console.log("woodCount", woodCount)
}

function addBrick () {
  brickCount += 1
  console.log("brickCount", brickCount)
}

function addWheat () {
  wheatCount += 1
  console.log("wheatCount", wheatCount)
}

function addRock () {
  rockCount += 1
  console.log("rockCount", rockCount)
}

function addSheep () {
  sheepCount += 1
  console.log("sheepCount", sheepCount)
}