document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validations en direct
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const nomError = document.getElementById('nom-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    let isValid = true;

    if (nom.value.trim() === "") {
        nomError.textContent = "Le nom est requis";
        nomError.style.display = "block";
        isValid = false;
    } else {
        nomError.style.display = "none";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Veuillez entrer un email valide";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    if (password.value.length < 6) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (isValid) {
        alert("Inscription réussie !");
        this.reset();
    }
});
