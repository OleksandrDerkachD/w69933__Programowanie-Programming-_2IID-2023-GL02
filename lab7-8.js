function requiredValidation(field, errorField) {
    if (field.value || field.value ===''){
        errorField.innerHTML = 'to pole jest wymagane';
        return true;
 
}
    else {
    errorField.innerHTML = ' ';
    return false
    }
}
function validConfirmPassword(confirmPasswordField, passwordField, confirmPasswordErrorField) {
    if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordErrorField.innerHTML = 'Hasła nie pasują do siebie';
        return true;
    } else {
        confirmPasswordErrorField.innerHTML = '';
        return false;
    }
}
function radioRequiredValidation(radioFields, errorField) {
    let isChecked = false;
    radioFields.forEach(field => {
        if (field.checked) {
            isChecked = true;
        }
    });
    if (!isChecked) {
        errorField.innerHTML = 'Wybierz jedną z opcji';
        return true;
    } else {
        errorField.innerHTML = '';
        return false;
    }
}
function lengthValidation(field, minLength=0, errorField) {
    if (field.value.length < minLength) {
        errorField.innerHTML= `to pole musi mieć conajmniej ${minLength} znaków`;
        return true;
    } else {
        
    }
}
function emailValidation(field) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorField= document.querySelector(`[name='${field.name}'] + span.error`);
    if (emailRegex.test(field.value)) {
        errorField.innerHTML ='proszę'
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false
    }
}
const birthField = document.querySelector("[name='birthDate']");
const birthErrorField = document.querySelector("[name='birthDate'] + .error");
birthField.addEventListener('input', () => {
    if(!requiredValidation(birthField, birthErrorField))
    {
        validAge(birthField, birthErrorField);
    }
});
const phoneField = document.querySelector("[name='phone']");

phoneField.addEventListener('keypress', (event) => {
    const charCode = event.which || event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
});
 
const countryField = document.querySelector("[name='country']");
const provinceField = document.querySelector("[name='province']");
const provinceSelectField = document.querySelector("select[name='province']");
const provinceErrorField = document.getElementById('provinceError');

countryField.addEventListener('change', () => {
    if (countryField.value === "Polska") {
        provinceField.hidden = true;
        provinceSelectField.hidden = false;
        provinceField.disabled = true;
        provinceSelectField.disabled = false;
    } else {
        provinceField.hidden = false;
        provinceSelectField.hidden = true;
        provinceField.disabled = false;
        provinceSelectField.disabled = true;
    }
});
const addressField = document.querySelector("[name='address']");
const addressErrorField = document.querySelector("[name='address'] + .error");
const contactAddressField = document.querySelector("[name='contactAddress']");
const contactAddressErrorField = document.querySelector("[name='contactAddress'] + .error");

function validProvince(field) {
    const result = requiredValidation(field, provinceErrorField);
    addressField.disabled = result;
    contactAddressField.disabled = result;
}

addressField.addEventListener('input', () => {
    if(!requiredValidation(addressField, addressErrorField)){
        minLengthValidation(addressField,addressErrorField, 3);
    }
});
contactAddressField.addEventListener('input', () => {
    if(!requiredValidation(contactAddressField, contactAddressErrorField))
    {   
        minLengthValidation(contactAddressField, contactAddressErrorField, 3);
    }
});

const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");
checkboxField.addEventListener('change', () => {
    contactAddress.hidden = checkboxField.checked;
});
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm()) {
        alert('Sukces');
    }
});

function validateForm() {
    if (
        requiredValidation(nameField, nameErrorField) ||
        minLengthValidation(nameField, nameErrorField, 2) ||
        requiredValidation(surnameFiled, surnameFiledError) ||
        emailValidation(emailField, emailErrorField) ||
        passwordValidation(passwordFiled, passwrodErrorField) ||
        validConfirmPassword(confirmPasswordField, passwordFiled, confirmPasswordErrorField) ||
        radioRequiredValidation(genderFields, genderErrorField) ||
        requiredValidation(phoneField, phoneErrorField) ||
        minLengthValidation(phoneField, phoneErrorField, 9) ||
        maxLengthValidation(phoneField, phoneErrorField, 9) ||
        requiredValidation(birthField, birthErrorField) ||
        validAge(birthField, birthErrorField) ||
        requiredValidation(countyField, countyErrorField) ||
        ((!provinceSelectField.hidden && requiredValidation(provinceSelectField, provinceErrorField)) ||
            (!provinceField.hidden && requiredValidation(provinceField, provinceErrorField))) ||
        requiredValidation(addressField, addressErrorField) ||
        minLengthValidation(addressField, addressErrorField, 3) ||
        (!checkboxField.checked && (requiredValidation(contactAddressField, contactAddressErrorField) || minLengthValidation(contactAddressField, contactAddressErrorField, 3)))
    ) {
        return false;
    }

    return true;
}