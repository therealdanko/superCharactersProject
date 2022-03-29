// GLOBALS
const URL         = 'https://www.superheroapi.com/api.php/1955715441283288/';
const RANDOM_HERO = getRandomIntInclusive(1, 731);
const RANDOM_ENEMY = randomNumber();
const fightButton = document.getElementById("fight-button")

// fetches random hero data from superhero API
// player:   1 = user
//           2 = cpu
// randomHeroID use getRandomIntInclusive(1, 731)
function fetchRandomHero(player, randomHeroID) {
  fetch(`${URL}${randomHeroID}`)
    .then(res  => res.json())
    .then(data => {
        loadHero(data, player)
    });
}

function fetchRandomEnemy(player, randomEnemyID) {
    fetch(`${URL}${randomEnemyID}`)
    .then(res  => res.json())
    .then(data => {
        loadHero(data, player)
    });
}

// produces random hero ID to fetch
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// produces random hero ID to fetch
function randomNumber() {
  let resultA;
  resultA = Math.floor(Math.random() * 731)
  
  return resultA;
}

let resultA = Math.floor(Math.random() * 731)
let resultB = Math.floor(Math.random() * 731)
console.log(resultA, resultB)

// loads hero image and data based on user or cpu
// player:   1 = user
//           2 = cpu
function loadHero(data, player){
  // if player is the user (bottom)
  if(player === 1){
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
    document.getElementById('user-fullname').textContent = `Full Name : ${data.biography["full-name"]}`;
    document.getElementById('user-alterego').textContent = `Alter Ego : ${data.biography["alter-egos"]}`;
    document.getElementById('user-alignment').textContent = `Alignment : ${data.biography.alignment}`;

    //appearance
    document.getElementById('user-gender').textContent = `Gender : ${data.appearance.gender}`;
    document.getElementById('user-race').textContent = `Race : ${data.appearance.race}`;
    document.getElementById('user-height').textContent = `Height : ${data.appearance.height[0]}, ${data.appearance.height[1]}`;
    document.getElementById('user-weight').textContent = `Weight : ${data.appearance.weight[0]}, ${data.appearance.weight[1]}`;
  }
  // if player is the cpu (top)
  else if(player === 2){
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
    document.getElementById('enemy-fullname').textContent = `Full Name : ${data.biography["full-name"]}`;
    document.getElementById('enemy-alterego').textContent = `Alter Ego : ${data.biography["alter-egos"]}`;
    document.getElementById('enemy-alignment').textContent = `Alignment : ${data.biography.alignment}`;

    //appearance
    document.getElementById('enemy-gender').textContent = `Gender : ${data.appearance.gender}`;
    document.getElementById('enemy-race').textContent = `Race : ${data.appearance.race}`;
    document.getElementById('enemy-height').textContent = `Height : ${data.appearance.height[0]}, ${data.appearance.height[1]}`;
    document.getElementById('enemy-weight').textContent = `Weight : ${data.appearance.weight[0]}, ${data.appearance.weight[1]}`;
  }
}

// load all UI elements
function loadPage(){
  // init user and enemy hero images and data
  fetchRandomEnemy(2, RANDOM_ENEMY);
  fetchRandomHero(1, RANDOM_HERO);
}

// click event for player next button, loads in new char
function handlePlayerNext(){
  ;
}

// click event for enemy next button, loads in new char
function handleEnemyNext(){
  ;
}

// determines a winner and then loads in two new characters
// OR winner stays on the field
fightButton.addEventListener("click", handleFight)
function handleFight(){
    const userHeroImage = document.getElementById('user-image')
    userHeroImage.src = ""
    const enemyHeroImage = document.getElementById('enemy-image')
    enemyHeroImage.src = "";
    initPage()
    console.log("herro")
    //  initPage()
}

const init = () => {
  loadPage();
  handlePlayerNext();
  handleEnemyNext();
}

init();