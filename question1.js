//Question 1

const form = document.querySelector("#contactForm");

form.addEventListener("submit", validForm);

function validForm(event) {
    event.preventDefault();
    console.log("The form was submitted");

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}

function checkInput(value) {
    const trimmedValue = value.trim();
    
    if (trimmedValue.length >= 2) {
        return true;
    } else {
        return false;
    }
}