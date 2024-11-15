import validator from "validator";

function validateEmail(email){
    return validator.isEmail(email)
}

console.log(validateEmail("gourav"))