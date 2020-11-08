
const contactForm = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const button = document.querySelector("button");
const successMessage = document.querySelector("#successMessage");
const validationErrorMessage = document.querySelector("#validationErrorMessage");


contactForm.addEventListener("submit", validateContactForm);

function validateContactForm(event) {
    event.preventDefault();
    

    if (checkLength(name.value,0)===true){
        nameError.style.display = "none";
    }else{
        nameError.style.display = "block";
    }
    if (checkLength(subject.value,9)===true){
        subjectError.style.display = "none";
    }else{
        subjectError.style.display = "block";
    }

    if (checkLength(address.value,24)===true){
        addressError.style.display = "none";
    }else{
        addressError.style.display = "block";
    }

    if(validateEmail(email.value)===true) {
            emailError.style.display = "none";
        }else{
            emailError.style.display = "block";
        }

checkIfValidationIsTrue();


}

validateContactForm();


function checkIfValidationIsTrue() {
    if((validateEmail(email.value)) && (checkLength(address.value,24)) && (checkLength(subject.value,9))){
        successMessage.innerHTML = '<div class="successMessage">The contact form has been sent</div>';
        contactForm.reset();
    }else{
        successMessage.innerHTML = '<div class="validationErrorMessage">Please correct the marked fields</div>';
    }

}



function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    }else{
        return false;
    }
}