
// fetch("https://www.superheroapi.com/api.php/1955715441283288/222")
//     .then(res => res.json())
//     .then(superCharacter => console.log(superCharacter))

// const buildChar = (character) => {
//     const characterBox = createElement('div')
//     const characterImage = createElement('img')
//     const characterName = createElement('h2')
    
// }


const results = getRandomIntInclusive(1, 731)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

function fetchRandomCharacter(){
    fetch(`https://www.superheroapi.com/api.php/1955715441283288/${results}`)
    .then(res => res.json())
    .then(character) 
}
fetchRandomCharacter()

