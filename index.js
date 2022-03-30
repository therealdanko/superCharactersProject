// GLOBALS
// require("dotenv").config()
// import dotenv from "dotenv"
// dotenv.config()
const URL              = 'https://www.superheroapi.com/api.php/1955715441283288/';
const fightButton      = document.getElementById("fight-button");
const userNextButton   = document.getElementById("user-next-button");
const enemyNextButton  = document.getElementById("enemy-next-button");
let currentUserHero;
let currentEnemyHero;


// fetches random hero data from superhero API
// player:   1 = user
//           2 = cpu
// randomHeroID use getRandomIntInclusive(1, 731)
function fetchRandomHero(player, randomHeroID) {
  fetch(`${URL}${randomHeroID}`)
    .then(res  => res.json())
    .then(data => {
      currentUserHero = data;
      loadHero(data, player);
    })
}

function fetchRandomEnemy(player, randomEnemyID) {
    fetch(`${URL}${randomEnemyID}`)
    .then(res  => res.json())
    .then(data => {
      currentEnemyHero = data;
      loadHero(data, player);
    })
}

// produces random hero ID to fetch
function randomNumber() {
  return Math.floor(Math.random() * 731)
}

// loads hero image and data based on user or cpu
// player:   1 = user
//           2 = cpu
function loadHero(data, player){
  // if player is the user (bottom)
  if(player === 1){

    for (stat in currentUserHero.powerstats) {
      if (currentUserHero.powerstats[stat] === 'null') {
        currentUserHero.powerstats[stat] = RNGRating(0,100);
      }
    }
    
    const userHeroImage = document.getElementById('user-image');
    userHeroImage.src = data.image.url;

    // fill in hero data
    // name
    document.getElementById('user-name').textContent = `Name : ${data.name}`;

    // powerstats
    document.getElementById('user-int').textContent = `Intelligence : ${data.powerstats.intelligence}`;
    document.getElementById('user-str').textContent = `Strength : ${data.powerstats.strength}`;
    document.getElementById('user-spd').textContent = `Speed : ${data.powerstats.speed}`;
    document.getElementById('user-dur').textContent = `Durability : ${data.powerstats.durability}`;
    document.getElementById('user-pow').textContent = `Power : ${data.powerstats.power}`;
    document.getElementById('user-com').textContent = `Combat : ${data.powerstats.combat}`;

    //bio
    document.getElementById('user-fullname').textContent  = `Full Name : ${data.biography["full-name"]}`;
    document.getElementById('user-alterego').textContent  = `Alter Ego : ${data.biography["alter-egos"]}`;
    document.getElementById('user-alignment').textContent = `Alignment : ${data.biography.alignment}`;

    //appearance
    document.getElementById('user-gender').textContent = `Gender : ${data.appearance.gender}`;
    document.getElementById('user-race').textContent   = `Race : ${data.appearance.race}`;
    document.getElementById('user-height').textContent = `Height : ${data.appearance.height[0]}, ${data.appearance.height[1]}`;
    document.getElementById('user-weight').textContent = `Weight : ${data.appearance.weight[0]}, ${data.appearance.weight[1]}`;
  } 

  // if player is the cpu (top)
  if(player === 2){

    for (stat in currentEnemyHero.powerstats) {
      if (currentEnemyHero.powerstats[stat] === 'null') {
        currentEnemyHero.powerstats[stat] = RNGRating(0,100);
      }
    }

    const enemyHeroImage = document.getElementById('enemy-image');
    enemyHeroImage.src = data.image.url;

    // fill in hero data
    // name
    document.getElementById('enemy-name').textContent = `Name : ${data.name}`;

    // powerstats
    document.getElementById('enemy-int').textContent = `Intelligence : ${data.powerstats.intelligence}`;
    document.getElementById('enemy-str').textContent = `Strength : ${data.powerstats.strength}`;
    document.getElementById('enemy-spd').textContent = `Speed : ${data.powerstats.speed}`;
    document.getElementById('enemy-dur').textContent = `Durability : ${data.powerstats.durability}`;
    document.getElementById('enemy-pow').textContent = `Power : ${data.powerstats.power}`;
    document.getElementById('enemy-com').textContent = `Combat : ${data.powerstats.combat}`;

    //bio
    document.getElementById('enemy-fullname').textContent  = `Full Name : ${data.biography["full-name"]}`;
    document.getElementById('enemy-alterego').textContent  = `Alter Ego : ${data.biography["alter-egos"]}`;
    document.getElementById('enemy-alignment').textContent = `Alignment : ${data.biography.alignment}`;

    //appearance
    document.getElementById('enemy-gender').textContent = `Gender : ${data.appearance.gender}`;
    document.getElementById('enemy-race').textContent   = `Race : ${data.appearance.race}`;
    document.getElementById('enemy-height').textContent = `Height : ${data.appearance.height[0]}, ${data.appearance.height[1]}`;
    document.getElementById('enemy-weight').textContent = `Weight : ${data.appearance.weight[0]}, ${data.appearance.weight[1]}`;
  }
}

// load all UI elements
function loadPage(){
  // init user and enemy hero images and data
  fetchRandomHero(1, Math.floor(Math.random() * 731));
  fetchRandomEnemy(2, Math.floor(Math.random() * 731));
}

// click event for player next button, loads in new char
function handleUserNext(){
  fetchRandomHero(1, Math.floor(Math.random() * 731));
}

// click event for enemy next button, loads in new char
function handleEnemyNext(){
  fetchRandomEnemy(2, Math.floor(Math.random() * 731));
}

function imgError(image) {
  image.onerror = "";
  image.src = "./404.jpg";
  return true;
}

// determines a winner and then loads in two new characters
// OR winner stays on the field
function handleFight(){  
  const winner = goldenAlgorithm();
  //console.log(`winner: ${winner}`);

  // user wins
  if (winner === 1)
  {
    fetchRandomEnemy(2, Math.floor(Math.random() * 731));
  }

  // cpu wins
  else
  {
    fetchRandomHero(1, Math.floor(Math.random() * 731));
  }
}

function goldenAlgorithm() {

  let userPowerLevel  =  ((currentUserHero.powerstats.intelligence * multiplier(0.7, 1.4)) +
                          (currentUserHero.powerstats.strength     * multiplier(0.5, 1.5)) +
                          (currentUserHero.powerstats.speed        * multiplier(0.4, 1.8)) +
                          (currentUserHero.powerstats.durability   * multiplier(0.9, 1.1)) +
                          (currentUserHero.powerstats.power        * multiplier(0.5, 1.3)) +
                          (currentUserHero.powerstats.combat       * multiplier(0.9, 1.1)))

  let enemyPowerLevel = ((currentEnemyHero.powerstats.intelligence * multiplier(0.7, 1.4)) +
                         (currentEnemyHero.powerstats.strength     * multiplier(0.5, 1.5)) +
                         (currentEnemyHero.powerstats.speed        * multiplier(0.4, 1.8)) +
                         (currentEnemyHero.powerstats.durability   * multiplier(0.9, 1.1)) +
                         (currentEnemyHero.powerstats.power        * multiplier(0.5, 1.3)) +
                         (currentEnemyHero.powerstats.combat       * multiplier(0.9, 1.1)))

  // console.log(`user: ${userPowerLevel}`);
  // console.log(`enemy: ${enemyPowerLevel}`);

  if(userPowerLevel >= enemyPowerLevel)
  {
    return 1;
  }
  else
  {
    return 2;
  }
}

function multiplier(min, max){
  return Math.random() * (max - min + 1) + min;
}

function RNGRating(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const init = () => {
  loadPage();
  fightButton.addEventListener("click", handleFight);
  userNextButton.addEventListener("click", handleUserNext);
  enemyNextButton.addEventListener("click", handleEnemyNext);
}

window.addEventListener('DOMContentLoaded', init);