const tableBody = document.querySelector('#usersTable tbody');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = user.id;
            row.insertCell(1).textContent = user.name;
            row.insertCell(2).textContent = user.email;
            row.insertCell(3).textContent = user.username;
        });
    })
    .catch(error => console.error('Error fetching data:', error));