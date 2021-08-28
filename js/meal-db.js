const searchFoods = () => {
    const searchField = document.getElementById('search-food');
    const searchInput = searchField.value;

    if (searchInput == '') {
        alert('Please input something');
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals));
    }
}


const displaySearchResult = meals => {
    const foodsContainer = document.getElementById('display-food');
    foodsContainer.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const { idMeal, strMeal, strMealThumb, strInstructions } = meal;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
          <img src="${strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${strMeal}</h5>
            <button onclick="singleMealDetails('${idMeal}')" class="btn btn-primary w-100">See Details</button>
          </div>
        </div>
        `;
        foodsContainer.appendChild(div);
    });
}

const singleMealDetails = meal => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]));
}


const displayMealDetails = singleMeal => {
    window.scroll(0, 40);
    // console.log(singleMeal);
    const detailsContainer = document.getElementById('meal-details');
    detailsContainer.textContent = '';
    const { strMeal, strMealThumb, strInstructions, strYoutube } = singleMeal;

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <div class="row g-3">
        <div class="col-md-4">
            <img src="${strMealThumb}" class="img-fluid rounded-start"
                                alt="mealPicture">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strInstructions.slice(0, 200)}</p>
                <a href="${strYoutube}" target="_blank"><button class="btn btn-success">Recipe Video</button></a>
            </div>
        </div>
    </div>
    `;
    detailsContainer.appendChild(detailsDiv);
}