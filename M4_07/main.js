const API_URL = 'http://localhost:3000/';

async function fetchUsers(){
    try{
        const response = await fetch(`${API_URL}users`);
        const data = await response.json();

        displayUsers(data);
    } catch (error){
        console.log("Errore:",error);
    }
};


function displayUsers(data) {
    const tableBody = document.getElementById('users-table-body');
    tableBody.innerHTML = '';

    data.forEach(user => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.phone}</td>
                <td>${user.address.city}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function gotoNewUser (){
    window.location = 'new-user.html';
}

fetchUsers();
//event.preventDefault() impedisce al form di cancellarsi ricaricando la pagina