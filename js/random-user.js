const loadUsersData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUsersData(data.results[0]));
}

const displayUsersData = user => {
    // console.log(user);
    const { name, email, picture, dob, location, phone } = user;
    document.getElementById('img').src = `${picture.medium}`;

    document.getElementById('get-name').addEventListener('mouseover', function () {
        document.getElementById('intro').innerText = 'Hi, My Name is'
        document.getElementById('details').innerText = `${name.title} ${name.first} ${name.last}`;
    });
    document.getElementById('get-email').addEventListener('mouseover', function () {
        document.getElementById('intro').innerText = 'My email address is';
        document.getElementById('details').innerText = `${email}`;
    });
    document.getElementById('get-birthday').addEventListener('mouseover', function () {
        document.getElementById('intro').innerText = 'My Birthday is';
        document.getElementById('details').innerText = `${dob.date}`;
    });
    document.getElementById('get-address').addEventListener('mouseover', function () {
        document.getElementById('intro').innerText = 'My address is';
        document.getElementById('details').innerText = `${location.country}`;
    });
    document.getElementById('get-phone').addEventListener('mouseover', function () {
        document.getElementById('intro').innerText = 'My Phone Nuber is';
        document.getElementById('details').innerText = `${phone}`;
    });
}
