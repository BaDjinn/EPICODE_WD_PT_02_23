const API_URL = 'http://localhost:3000/'

const form = document.getElementById('user-form');

const userIdInput = document.getElementById('user-id');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const phoneInput = document.getElementById('phone');
const cityInput = document.getElementById('city');
const companyInput = document.getElementById('company');


/* let ON_EDITING = false

function onEditUser() {
  const qsParams = new URLSearchParams(window.location.search);
  const userId = qsParams.get('id')
  ON_EDITING = !!userId
} */

form.addEventListener('submit', async (event) => {

  event.preventDefault();

  const isFormValid = handelFormValidation();
  if (!isFormValid) return false;


  const user = {
    name: nameInput.value,
    username: usernameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    address: {
      city: cityInput.value
    },
    company: {
      name: companyInput.value
    }
  }


  try {

    const URL = userIdInput.value 
      ? `${API_URL}users/${userIdInput.value}`
      : `${API_URL}users`

    const HTTP_METOD = userIdInput.value ? 'PUT' : 'POST'
      
    const response = await fetch(URL, {
      method: HTTP_METOD,
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })

    if (response.ok) {
      window.location.href = userIdInput.value 
        ? 'index.html?status=edit-ok' 
        : 'index.html?status=create-ok'
    } else {
      alert('Si è verificato un errore durante la creazione dell\'utente.')
    }
    
    
  } catch (error) {
    console.log('Errore durante il salvataggio: ', error);
    alert('Si è verificato un errore durante il salvataggio.')
  }
  
})


function handelFormValidation() {
  
  const validation = validateForm()
  let isValid = true;

  if (!validation.isValid) {

    for (const field in validation.errors) {
      const errorElement = document.getElementById(`${field}-error`)
      errorElement.textContent = '';
      errorElement.textContent = validation.errors[field]
    }

    isValid = false
    
  }

  return isValid

}

function validateForm() {
  const errors = {}

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const username = document.getElementById('username').value
  const phone = document.getElementById('phone').value
  const city = document.getElementById('city').value
  const company = document.getElementById('company').value

  if (!name) errors.name = "Il campo nome è obbligatorio."
  else errors.name = "";

  if (!email) errors.email = "Il campo email è obbligatorio."
  else if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Inserisci un indirizzo email valido" 
  else errors.email = "";

  if (!username) errors.username = "Il campo username è obbligatorio."
  else errors.username = "";

  if (!phone) errors.phone = "Il campo telefono è obbligatorio."
  else errors.phone = "";

  if (!city) errors.city = "Il campo città è obbligatorio."
  else errors.city = "";

  if (!company) errors.company = "Il campo azienda è obbligatorio."
  else errors.company = "";

  return {
    isValid: Object.values(errors).every(value => value === ''),
    errors
  }
  
}


function goBack() {
  window.location.href = 'index.html' 
}

function buildTitle(userId) {
  const pageTitle = document.getElementById('page-title');
  pageTitle.innerHTML = userId ? 'Modifica utente' : 'Crea nuovo utente';
}

async function getUserData() {
  const qsParams = new URLSearchParams(window.location.search);
  const userId = qsParams.get('id')

  buildTitle(userId);

  if (userId) {
    // MODIFICA UTENTE

    try {
      const response = await fetch(`${API_URL}users/${userId}`);
      const user = await response.json(); 
      
      setTimeout( () => {
        document.querySelector('.spinner-container').classList.add('d-none');
        document.querySelector('#user-form').classList.remove('d-none');
      }, 500)

      if (!('name' in user)) {
        console.log('L\'utente non esiste');
        return
      }
    
      userIdInput.value = user.id;
      nameInput.value = user.name;
      emailInput.value = user.email;
      usernameInput.value = user.username;
      phoneInput.value = user.phone;
      cityInput.value = user.address.city;
      companyInput.value = user.company.name;

    } catch (error) {
      console.log('Errore nel recupero degli utenti: ', error);
    }
    
    
  } else {
    // CREAZIONE UTENTE
    document.querySelector('.spinner-container').classList.add('d-none');
    document.querySelector('#user-form').classList.remove('d-none');
  }

  
}


getUserData()

