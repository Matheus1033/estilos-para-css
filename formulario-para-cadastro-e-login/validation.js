const form = document.getElementById("form")
const firstname = document.getElementById("firstname-input")
const email = document.getElementById("email-input")
const password = document.getElementById("password-input")
const repeatPassword = document.getElementById("repeat-password-input")
const errorMessage = document.getElementById("error-massage")

form.addEventListener("submit", (e) => {
    let errors = []
    if(firstname){
        errors = getSifnupFormErrors(firstname.value, emial.value, password.value, repeatPassword.value)
    } else {
        errors = getLoginFormErrors(email.value, password.value)
    } if(errors.length > 0) {
        e.preventDefault()
        errorMessage.innerText = errors.join(". ")
    }
})
function getSifnupFormErrors(FN, EM, PW, RPW){
    let errors = []
    if(FN === ""|| FN == null){
        errors.push("Firstname is required")
        firstname.parentElement.classList.add("incorrect")
    } if(EM === ""|| EM == null){
        errors.push("Email is required")
        email.parentElement.classList.add("incorrect")
    } if(PW === ""|| PW == null){
        errors.push("Password is required")
        password.parentElement.classList.add("incorrect")
    } if(password.length < 8){
        errors.push("Password must have at least 8 characters")
        password.parentElement.classList.add("incorrect")
    }  if(PW !== RPW){
        errors.push("Password does not match reapeated password")
        password.parentElement.classList.add("incorect")
        repeatPassword.parentElement.classList.add("incorrect")
    }
    return errors;
}
const allInputs = [firstname, email, password, repeatPassword]

allInputs.forEach(input => {
    input.addEventListener("input", () => {
        if(input.parentElement.classList.countains("incorect")){
            input.parentElement.classList.remove("incorect")
            errorMessage.innerText = " "
        }
    })
})