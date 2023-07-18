var catButton = document.getElementById('cat-fact');
var dogFactbtn = document.getElementById('dog-fact')
var breedInputEl = document.querySelector(".search-breed");
var breedForm = document.querySelector("#breed-input");
var petType = document.querySelector("#pet-select");
var selectedPetType;
var notification = document.querySelector("#modal");
var notificationBtn = document.querySelector(".notification .delete");
var clearEl = document.querySelector("#clear");
var historyEl = document.querySelector(".search-history");
var searchHistoryDog = JSON.parse(localStorage.getItem("searchDog")) || [];
var searchHistoryCat = JSON.parse(localStorage.getItem("searchCat")) || [];

dogFactbtn.addEventListener('click', function() {
    
    fetch('https://dogapi.dog/api/v2/facts')
    .then (function(response) {
        return response.json()
    })
    .then (function (data) {
        var heroText = document.getElementById('hero-text')
        var dogFact = data.data[0].attributes.body
        heroText.innerText = dogFact
        heroText.classList.add('is-size-3')
    })

})
// --------Cat Button--------------------
catButton.addEventListener('click', function() {
    fetch('https://catfact.ninja/fact')
        .then( function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            var heroText = document.querySelector("#hero-text");
            heroText.textContent = data.fact;
            heroText.classList.add("is-size-3")

        })
})




        // function to get information from api on dog breed input
        function getInfoByDogBreed(breedName) {
            fetch('https://api.api-ninjas.com/v1/dogs?name=' + breedName, {
                method: 'GET',
                headers: { 'X-Api-Key': 'ClM+4cVtO1YtwmOO8xz1jw==0CKehjLoj6PIJUqT'},
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                }
                
            }) 
                .then(function(response) {
                    return response.json();
                })
                .then(function(breedData) {
                    console.log(breedData);

                    var container = document.querySelector(".breed-data");
                    
                    var centerDiv = document.createElement('div');
                    centerDiv.classList.add("is-flex", "is-flex-direction-column", "is-align-items-center");
                    container.appendChild(centerDiv);
                    // append h1 to contaier div and add classes
                    var h1 = document.createElement('h1');
                    h1.classList.add("is-size-2", "has-text-centered", "has-text-link", "has-text-weight-semibold")
                    centerDiv.appendChild(h1);

                    var h2 = document.createElement('h2');
                    h2.classList.add("is-size-3", "has-text-centered", "has-text-link")
                    centerDiv.appendChild(h2);

                    var petImg = document.createElement('img');
                        petImg.setAttribute("src", breedData[0].image_link);
                    centerDiv.appendChild(petImg);

                    // capitalize first letter of breed name
                    h1.innerText = breedName.charAt(0).toUpperCase() + breedName.slice(1);

                    h2.innerText = "On a scale of 1 to 5 (low to high)"

                    // create list items
                    var ul = document.createElement('ul');

                    // barking level
                    var li1 = document.createElement('li');
                    li1.innerText = "Barking Level: " + breedData[0].barking;

                    // coat length
                    var li2 = document.createElement('li');
                    li2.innerText = "Coat Length: " + breedData[0].coat_length;

                    // energy level
                    var li3 = document.createElement('li');
                    li3.innerText = "Energy Level: " + breedData[0].energy;

                    // good with children
                    var li4 = document.createElement('li');
                    li4.innerText = "Good with Children: " + breedData[0].good_with_children;

                    // good with other dogs
                    var li5 = document.createElement('li');
                    li5.innerText = "Good with other dogs: " + breedData[0].good_with_other_dogs;

                    // max weight male
                    var li6 = document.createElement('li');
                    li6.innerText = "Maximum Weight Male: " + breedData[0].max_weight_male + " pounds";

                    // max weight female
                    var li7 = document.createElement('li');
                    li7.innerText = "Maximum Weight Female: " + breedData[0].max_weight_female + " pounds";

                    // max life expectancy
                    var li8 = document.createElement('li');
                    li8.innerText = "Maximum Life Expectancy: " + breedData[0].max_life_expectancy + " years";

                    // trainability
                    var li9 = document.createElement('li');
                    li9.innerText = "Trainability: " + breedData[0].trainability;

                    // shedding
                    var li10 = document.createElement('li');
                    li10.innerText = "Shedding: " + breedData[0].shedding;

                    ul.appendChild(li1);
                    ul.appendChild(li2);
                    ul.appendChild(li3);
                    ul.appendChild(li4);
                    ul.appendChild(li5);
                    ul.appendChild(li6);
                    ul.appendChild(li7);
                    ul.appendChild(li8);
                    ul.appendChild(li9);
                    ul.appendChild(li10);
                    
                    container.appendChild(ul);

                }) .catch(function(error) {
                    console.log(error);
                    showModal();
                })
        }

        

    
        // function to get information from api on cat breed input
        function getInfoByCatBreed(breedName) {
            fetch('https://api.api-ninjas.com/v1/cats?name=' + breedName, {
                method: 'GET',
                headers: { 'X-Api-Key': 'ClM+4cVtO1YtwmOO8xz1jw==0CKehjLoj6PIJUqT'},
                contentType: 'application/json',
                success: function(result) {
                    console.log(result);
                }
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(breedData) {
                    console.log(breedData);

                    
        
                    var container = document.querySelector(".breed-data");
                    
                    var centerDiv = document.createElement('div');
                    centerDiv.classList.add("is-flex", "is-flex-direction-column", "is-align-items-center");
                    container.appendChild(centerDiv);
                    // append h1 to contaier div and add classes
                    var h1 = document.createElement('h1');
                    h1.classList.add("is-size-2", "has-text-centered", "has-text-link", "has-text-weight-semibold")
                    centerDiv.appendChild(h1);

                    var h2 = document.createElement('h2');
                    h2.classList.add("is-size-3", "has-text-centered", "has-text-link")
                    centerDiv.appendChild(h2);

                    var petImg = document.createElement('img');
                        petImg.setAttribute("src", breedData[0].image_link);
                    centerDiv.appendChild(petImg);

                    // capitalize first letter of breed name
                    h1.innerText = breedName.charAt(0).toUpperCase() + breedName.slice(1);

                    h2.innerText = "On a scale of 1 to 5 (low to high)"

                    // create list items
                    var ul = document.createElement('ul');

                    // intelligence
                    var li1 = document.createElement('li');
                    li1.innerText = "Intelligence Level: " + breedData[0].intelligence;

                    // grooming
                    var li2 = document.createElement('li');
                    li2.innerText = "Grooming : " + breedData[0].grooming;

                    // general health
                    var li3 = document.createElement('li');
                    li3.innerText = "General Health: " + breedData[0].general_health;

                    // good with children
                    var li4 = document.createElement('li');
                    li4.innerText = "Good with Children: " + breedData[0].children_friendly;

                    // good with other pets
                    var li5 = document.createElement('li');
                    li5.innerText = "Good with other pets: " + breedData[0].other_pets_friendly;

                    // max weight
                    var li6 = document.createElement('li');
                    li6.innerText = "Maximum Weight: " + breedData[0].max_weight + " pounds";

                    // max life expectancy
                    var li7 = document.createElement('li');
                    li7.innerText = "Maximum Life Expectancy: " + breedData[0].max_life_expectancy + " years";

                    // playfullness
                    var li8 = document.createElement('li');
                    li8.innerText = "Playfulness: " + breedData[0].playfulness;

                    // shedding
                    var li9 = document.createElement('li');
                    li9.innerText = "Shedding: " + breedData[0].shedding;

                    ul.appendChild(li1);
                    ul.appendChild(li2);
                    ul.appendChild(li3);
                    ul.appendChild(li4);
                    ul.appendChild(li5);
                    ul.appendChild(li6);
                    ul.appendChild(li7);
                    ul.appendChild(li8);
                    ul.appendChild(li9);
                    
                    container.appendChild(ul);

                }) .catch(function(error) {
                    console.log(error);
                    showModal();
                })
        }



// get user answer from breed input run functions
function getBreedInput(event) {
    event.preventDefault();
    var searchTerm = breedInputEl.value;
    clearCurrent();

    if (selectedPetType === 'cat') {
        getInfoByCatBreed(searchTerm);
        searchHistoryCat.push(searchTerm);
        localStorage.setItem("searchCat", JSON.stringify(searchHistoryCat));
    } else if (selectedPetType === 'dog') {
        getInfoByDogBreed(searchTerm);
        searchHistoryDog.push(searchTerm);
        localStorage.setItem("searchDog", JSON.stringify(searchHistoryDog));
    } 
    displaySearchHistory(searchTerm);
}

// function to show pop up modal
function showModal() {
    notification.classList.remove("hide");
}

function hideModal() {
    notification.classList.add("hide");
}


// function to listen for change on selected option of pet
petType.onchange = function changeListener() {
    selectedPetType = this.value;

}

breedForm.addEventListener("submit", getBreedInput);


// changeListener();

// function to clear search history
function clearHistory(event) {
    event.preventDefault();
    localStorage.removeItem("searchDog");
    localStorage.removeItem("searchCat");
    historyEl.innerHTML = "";
    return;
}


// display search history as buttons
function displaySearchHistory() {
    historyEl.innerHTML = '';

    for (i = 0; i < searchHistoryDog.length; i++) {
        var pastSearchEl = document.createElement("button");
        pastSearchEl.classList.add("button", "is-link", "is-light", "mt-2", "mr-1");
        pastSearchEl.textContent = searchHistoryDog[i];
        pastSearchEl.setAttribute("data-breed", searchHistoryDog[i]);
        historyEl.appendChild(pastSearchEl);
        

    }
    console.log(searchHistoryDog);
  

    for (i = 0; i < searchHistoryCat.length; i++) {
        var pastSearchEl = document.createElement("button");
        pastSearchEl.classList.add("button", "is-link", "is-light", "mt-2", "mr-1");
        pastSearchEl.textContent = searchHistoryCat[i];
        pastSearchEl.setAttribute("data-breed", searchHistoryCat[i]);
        historyEl.appendChild(pastSearchEl);

    }
    console.log(searchHistoryCat);
    return;
    
}

// function to display data from previous search buttons
var pastSearchData = function(event) {
    var breed = event.target.getAttribute("data-breed");
    if(breed) {
        clearCurrent();
        getInfoByDogBreed(breed);
        getInfoByCatBreed(breed);
    }
}

// clears current search when new search
function clearCurrent() {
    var currentPet = document.querySelector(".breed-data");
    currentPet.innerText = "";

    return;
}

// function to close notification popup when 'x' is clicked
notificationBtn.addEventListener("click", function() {
    hideModal();

})

displaySearchHistory();
historyEl.addEventListener("click", pastSearchData);
clearEl.addEventListener("click", clearHistory);





