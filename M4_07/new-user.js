function gotoIndex(){
    window.location = 'index.html';
}

async function getUserData() {
    const qsParams = new URLSearchParams(window.location.search);
    console.log(qsParams.get('id'));
    if (userId) {
        //modifica
        const response = await fetch(`${API_URL}users/${userId}`);
        const user = await response.json();

        nameInput.value = user.name;
    } else {
        //nuovo
    }

}

getUserData();