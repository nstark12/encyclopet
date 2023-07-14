// CatButton API 

var catButton = document.getElementById('cat-fact');

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


