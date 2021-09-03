const weatherSection = document.getElementById('weather-info');

const loadWeather = async () => {
    weatherSection.innerHTML = `
    <div class="text-center my-5 mx-auto">
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `;

    const searchField = document.getElementById('search-field');
    const searchInput = searchField.value;
    //searchField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=2b63c0ec704aeed8dba790b11e33e9fe`;

    if (searchField.value === '') {
        weatherSection.innerHTML = `
        <div class="text-danger text-center mx-auto my-5 py-5">
            <h1>Coudn't found anything.Please search again</h1>
        </div>
        `;
    }
    else {
        try {
            const res = await fetch(url);
            const data = await res.json();
            displayWeather(data);
        }
        catch (error) {
            weatherSection.innerHTML = `
            <div class="text-danger text-center mx-auto my-5 py-5">
                <h1>No Result Found</h1>
            </div>
            `;
        }
    }
    searchField.value = '';

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=2b63c0ec704aeed8dba790b11e33e9fe`)
    //     .then(res => res.json())
    //     .then(data => displayWeather(data));
};

const displayWeather = data => {
    console.log(data);
    const { name, main, weather, sys, dt } = data;
    //const weatherSection = document.getElementById('weather-info');
    weatherSection.innerHTML = `
    <div class="text-center text-white mx-auto my-5">
    <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="">
        <h1><i class="fas fa-map-marker-alt text-danger"></i> ${name}, ${sys.country}</h1>
        <h3><span>${parseFloat(main.temp - 273.15).toFixed(1)}</span>°C</h3>
        <h4 class="fw-light">${weather[0].main}</h4>
    </div>
    `;

};