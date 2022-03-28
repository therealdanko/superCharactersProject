
fetch("https://www.superheroapi.com/api.php/1955715441283288/222")
    .then(res => res.json())
    .then(superCharacter => buildChar(superCharacter))

const buildChar = (character) => {
    const characterBox = createElement('div')
    const characterImage = createElement('img')
    const characterName = createElement('h2')
    
}



