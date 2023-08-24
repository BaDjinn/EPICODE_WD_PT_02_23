const API_URL = 'http://localhost:3000/';

async function fetchUsers(){
    try{
        const response = await fetch(`${API_URL}users`);
        const data = await response.json();

        setTimeout(()=>{document.querySelector('.spinner-container').classList.add('d-none')
        displayUsers(data);},500)
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
                <td>
                    <button class="btn btn-success mb-3" onclick="editUser(${user.id})">Modifica</button>
                    <button class="btn btn-success mb-3" onclick="deleteUser(${user.id})">Cancella</button>
                </td>

            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function gotoNewUser (){
    window.location.href = 'new-user.html';
}

fetchUsers();
//event.preventDefault() impedisce al form di cancellarsi ricaricando la pagina

function editUser(userID){
    /*PATCH o PUT?
    con PATCH faccio l'update di un solo campo mentre PUT sovrascrivo tutto.*/
    window.location.href = `new-user.html?id=${userID}`
}

async function deleteUser(userID){
    if (confirm('Sei sicuro sicuro sicurissimo?')){
    try{
        await fetch(`${API_URL}users/${userID}`,{ method: 'DELETE'});
        window.location.href = 'index.html?status=cancel-ok';
    } catch(error){
        console.log(`Errore: ${error}`);
    }}
}


function handleAlertMessage(){
    const qsParams = new URLSearchParams(window.location.search);
    const status = qsParams.get('status');
    if(status && status==='create-ok') showAlert('create');
    if(status && status==='edit-ok') showAlert('update');
    if(status && status==='cancel-ok') showAlert('cancel');
}

function showAlert (){
    const alertCnt = document.getElementById('alert-container')
    alertCnt.style.display = 'block'
    alertCnt.innerHTML=actionType === 'create'
        ? 'Utente creato con successo'
        : 'Utente eliminato con successo'

        setTimeout(()=>{
            alertCnt.style.display= null;
        })
}