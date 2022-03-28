// GLOBALS
const URL         = 'https://www.superheroapi.com/api.php/1955715441283288/';
const RANDOM_HERO = getRandomIntInclusive(1, 731);

// fetches random hero data from superhero API
// player:   1 = user
//           2 = cpu
// randomHeroID use getRandomIntInclusive(1, 731)
function fetchRandomHero(player, randomHeroID) {
  fetch(`${URL}${randomHeroID}`)
    .then(res  => res.json())
    .then(data => loadHero(data, player));
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

    const userHeroData = document.getElementById('user-info');
    // fill in data
  }
  // if player is the cpu (top)
  else if(player === 2){
    const enemyHeroImage = document.getElementById('enemy-image');
    enemyHeroImage.src = data.image.url;

    const enemyHeroData = document.getElementById('enemy-info');
    // fill in data
  }
}

// load all UI elements
function initPage(){
  // init user and enemy hero images and data
  fetchRandomHero(1, RANDOM_HERO);
  fetchRandomHero(2, randomNumber());
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
function handleFight(){
  ;
}

const init = () => {
  initPage();
  handlePlayerNext();
  handleEnemyNext();
  handleFight();
}

init();