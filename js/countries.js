function loadCountries() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

loadCountries();

function displayCountries(countries) {
    const countriesSection = document.getElementById('countries');
    for (const country  of countries) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('col-4')
        div.innerHTML = `
            <div class=" m-3 p-3 border border-3 border-warning rounded
                shadow-lg">
                <h5>Country name: ${country.name}</h5>
                <h6>Capital: ${country.capital}</h6>
                <button onclick ="loadCountryByName('${country.name}')"  class="btn btn-success">Details</button>
            </div>
        `;
        countriesSection.appendChild(div);

    }
}

function loadCountryByName(name) {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

function displayCountryDetails(country) {
    const detailsDiv = document.getElementById('country-details');
    detailsDiv.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div>
        <h4>Country name: ${country.name}</h4>
        <p>Capital: ${country.capital}</p>
        <P>Population: ${country.population}</P>
        <img width="150px" src="${country.flag}">
    </div>    
    `
    detailsDiv.appendChild(div);
}