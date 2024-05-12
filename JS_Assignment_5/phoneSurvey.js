
//Phone Survey Form
const btn = document.getElementById("submit")
const error = document.getElementById("errors-holder")
function ageChange(e) {
    let age = Number(e.target.value)
    console.log(age)
    if (age < 5) {
        btn.disabled = true
        error.textContent = 'You need to be at least 5 years old to participate'
    }
    else {
        btn.disabled = false
        error.textContent = ""
    }

}
function handleSubmit() {
    const ageInput = document.getElementById("q_age")
    const ownPhone = document.getElementById("q_owns_phone")
    const age = parseInt(ageInput.value)
    const resultHolder = document.getElementById("result-holder")
    if (ownPhone.checked) {
        if (age < 13) {
            resultHolder.textContent = 'You are too young to have a phone'
        }
        else {
            resultHolder.textContent = 'Use your phone in moderation'
        }
    }
    else {
        if (age < 13) {
            resultHolder.textContent = "You will get a phone so on"
        }
        else {
            resultHolder.textContent = "You should get a phone"
        }
    }
}
