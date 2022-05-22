let woodCount = document.getElementById("wood-count")
let brickCount = document.getElementById("brick-count")
let wheatCount = document.getElementById("wheat-count")
let rockCount = document.getElementById("rock-count")
let sheepCount = document.getElementById("sheep-count")

let wood = document.getElementById("wood-bank")
let brick = document.getElementById("brick-bank")
let wheat = document.getElementById("wheat-bank")
let rock = document.getElementById("rock-bank")
let sheep = document.getElementById("sheep-bank")

//event listeners
wood.addEventListener('click', addWood)
brick.addEventListener('click', addBrick)
wheat.addEventListener('click', addWheart)
rock.addEventListener('click', addRock)
sheep.addEventListener('click', addSheep)



init()
function init () {
  woodCount.innerHTML = 0
  brickCount.innerHTML = 0
  wheatCount.innerHTML = 0
  rockCount.innerHTML = 0
  sheepCount.innerHTML = 0
}

function addWood () {
  console.log("add wood")
}

function addBrick () {
  console.log("add brick")
}

function addWheart () {
  console.log("add wheat")
}

function addRock () {
  console.log("add rock")
}

function addSheep () {
  console.log("add sheep")
}