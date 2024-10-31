document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const motdepasse = document.getElementById('motdepasse').value.trim();

    let hasError = false;
    clearErrors();

    if (nom === "") {
        showError('nom', "Le nom est requis.");
        hasError = true;
    }

    if (email === "") {
        showError('email', "L'email est requis.");
        hasError = true;
    } else if (!validateEmail(email)) {
        showError('email', "L'email n'est pas valide.");
        hasError = true;
    }

    if (motdepasse === "") {
        showError('motdepasse', "Le mot de passe est requis.");
        hasError = true;
    } else if (motdepasse.length < 8) {
        showError('motdepasse', "Le mot de passe doit contenir au moins 8 caractères.");
        hasError = true;
    }

    if (!hasError) {
        console.log('Nom:', nom);
        console.log('Email:', email);
        console.log('Mot de passe:', motdepasse);

        document.getElementById('inscriptionForm').reset();
        alert("Inscription réussie !");
    }
});

function showError(field, message) {
    const inputField = document.getElementById(field);
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    inputField.parentElement.appendChild(errorMessage);
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.remove());
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
