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