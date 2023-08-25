const API_URL = 'http://localhost:3000/'

async function fetchUsers() {

  handleAlertMessage()

  try {
    const response = await fetch(`${API_URL}users`);
    const data = await response.json()

    // AGGIUNGERE UTENTI ALLA TABELLA
    setTimeout( () => {
      document.querySelector('.spinner-container').classList.add('d-none');
      displayUsers(data);
    }, 500)
    

  } catch (error) {
    console.log('Errore nel recupero degli utenti: ', error);
  }
}


function displayUsers(users) {
  
  const tableBody = document.getElementById('users-table-body');
  tableBody.innerHTML = ''

  users.forEach(user => {
    
    const row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
        <td>
          <button class="btn btn-primary" onclick="editUser(${user.id})">Modifica</button>
          <button class="btn btn-danger" onclick="deleteUser(${user.id})">Cancella</button>
        </td>
      </tr>
    `

    tableBody.innerHTML += row
  });

}

function addUser() {
 window.location.href = 'user-form.html' 
}

function editUser(userId) {
  window.location.href = `user-form.html?id=${userId}`
}

async function deleteUser(userId) {

  if (confirm('Sei sicuro di voler eliminare questo utente?')) {
    try {
      await fetch(`${API_URL}users/${userId}`, { method: 'DELETE' });
      window.location.href = 'index.html?status=cancel-ok';
    } catch (error) {
      console.log('Errore nel\'eleminazione dell\'utente: ', error);
    }
  }
  
}

function handleAlertMessage() {

  const qsParams = new URLSearchParams(window.location.search);
  const status = qsParams.get('status')

  if (status && status === 'create-ok') showAlert('create');
  if (status && status === 'edit-ok') showAlert('update');
  if (status && status === 'cancel-ok') showAlert('cancel');

  clearQueryString()

}

function showAlert(actionType) {
  const alertCnt = document.getElementById('alert-container');
  alertCnt.classList.remove('d-none');
  alertCnt.innerHTML = actionType === 'create'
    ? 'Utente creato con successo'
    : actionType === 'update'
      ? 'Utente modificato con successo'
      : 'Utente eliminato con successo'

  setTimeout( () => {
    alertCnt.classList.add('d-none');
  }, 4000)
}


function clearQueryString() {
  const url = new URL(window.location.href);
  url.search = '';
  window.history.replaceState({}, '', url.toString());
}

fetchUsers()