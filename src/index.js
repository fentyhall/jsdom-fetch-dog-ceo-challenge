function fetchDogImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(json => {
            json.message.forEach(img => renderDogImages(img));
        });
} 

function renderDogImages(dogPic) {
    const dogImageContainer = document.getElementById('dog-image-container');
    const createImg = document.createElement('img');
    createImg.src = dogPic;
    createImg.style = 'height: 150px;'
    dogImageContainer.appendChild(createImg);
}

function fetchDogBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl) 
        .then(response => response.json()) 
        .then(json => {
            breeds = Object.keys(json.message);
            breeds.forEach(breed => renderDogBreeds(breed));
            updateBreedLists();
        })
}

function updateBreedLists() {
    let breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function(event) {
        let letter = event.target.value;

        newBreedsList = breeds.filter(breed => breed.startsWith(letter));
        updateLists(newBreedsList);
    })
}

function renderDogBreeds(dogBreed) {
    const dogUl = document.getElementById('dog-breeds');
    const createLi = document.createElement('li');
    createLi.innerText = dogBreed;
    dogUl.appendChild(createLi);
    
    createLi.addEventListener('click', updateColor);
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages();
    fetchDogBreeds();
})

function updateColor(event) {
    event.target.style.color = 'firebrick';
}

function updateLists(breeds) {
    let newUl = document.getElementById('dog-breeds');
    newUl.innerText = '';
    
    breeds.forEach(breed => {
        let newLi = document.createElement('li');
        newLi.innerText = breed;
        newUl.appendChild(newLi);
    });
}