document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.querySelector('button');

    submitButton.addEventListener('click', function () {
        if (validateForm()) {
            alert('Formulaire soumis avec succès');
        }
    });
     
    // création des bulles // 
    const body = document.querySelector('body');
    const bubblesContainer = document.createElement('div');
    bubblesContainer.classList.add('bubbles');
    body.appendChild(bubblesContainer);

    for (let i = 0; i < 10; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.animationDelay = `${Math.random()}s`;
        bubblesContainer.appendChild(bubble);
    }


    /* --- Fonction de vérification d'erreur dans le formulaire --- */

    
    function validateForm() {
        resetStyles();
        resetErrorMessages();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let hasError = false;

        /* -------------- Error Check  -------------- */

        
        if (email === '') {
            setError(emailInput, "Veuillez saisir votre email");
            hasError = true;
        } else if (!validateEmail(email)) {
            setError(emailInput, 'Veuillez saisir une adresse e-mail valide');
            hasError = true;
        }
        if (password === '') {
            setError(passwordInput, "Veuillez saisir votre mot de passe");
            hasError = true;
        } else if (password.length < 8 || password.length > 50) {
            setError(passwordInput, "Votre mot de passe doit contenir entre 8 et 50 caractères");
            hasError = true;
        }
      
        if (hasError) {
            return false;
        }

        return true;
        /* End function*/
    }
    /* --- Fonction d'affichage d'erreur dans le formulaire --- */

   
    function setError(input, errorMessageText) {
        input.classList.add('error');
        const errorMessageID = input.id + '-error';
        const errorMessageElement = document.getElementById(errorMessageID);
        errorMessageElement.textContent = errorMessageText;
        setTimeout(() => {
            input.classList.remove('error');
            errorMessageElement.textContent = '';
        }, 5000);
        
    }
    /* --- Fonction de réinitialisation des erreurs dans le formulaire --- */
  
    function resetErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => {
            errorMessage.textContent = '';
        });
        
    }
    /* --- Fonction de réinitialisation des styles dans le formulaire --- */
   
    function resetStyles() {
        const input = document.querySelectorAll('.champ input');
        input.forEach(function (input) {
            input.classList.remove('error');
        });
     
    }
    /* --- Fonction de vérification de l'adresse email --- */
    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
       
    }
});



