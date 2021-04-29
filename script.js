let id = document.getElementById("id")
let password = document.getElementById("password")
let cardPassword = document.getElementById("cardPassword")
let mailPassword = document.getElementById("mailpassword")
let telPassword = document.getElementById("telcode")
let pcPassword = document.getElementById("pccode")

const input = document.getElementById("code")
const btn = document.getElementById("btn")

const h4 = document.getElementById("h4")
const h42 = document.getElementById("h42")
const h43 = document.getElementById("h43")

const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const p4 = document.getElementById("p4")
const p5 = document.getElementById("p5")
const p6 = document.getElementById("p6")
const p7 = document.getElementById("p7")
const p8 = document.getElementById("p8")
const p9 = document.getElementById("p9")
const p10 = document.getElementById("p10")

const bad = document.getElementById("bad")
const bad2 = document.getElementById("bad2")

btn.addEventListener("click", function () {
    const inputType = /@[A-Z]+[0-9]+-+[0-9]+[A-Z]+-+[A-Z]+-+[0-7]+#/g
    const remplace = /[A-Z-@#]/g

    if (input.value == "") {
        bad.classList.add("is-active")
        setTimeout(() => {
            location.reload()
        }, 2000);
    } else if (inputType.test(input.value)==false) {
        bad2.classList.add("is-active")
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
    else {
        document.getElementById("h1").style.display = "none"

        const inputValue = input.value
        const newInputValue = inputValue.replace(remplace, "")

        console.log(newInputValue);

        const newId = parseInt(newInputValue) + 3995969882
        let newPassword = parseInt(newInputValue) + 30682
        newPassword = "0" + newPassword
        const cardPass = parseInt(newInputValue) - 30027
        const newMailPass = 19017474 + parseInt(newInputValue) +"Gb or Gb@"
        const pcCode = 19017474 + parseInt(newInputValue)
        const telcode = 257463 + parseInt(newInputValue)
    
        setTimeout(() => {
            h4.classList.add("is-active")
        }, 500);
    
        setTimeout(() => {
            p1.classList.add("is-active")
            id.innerHTML = " " + newId
        }, 1000);
    
        setTimeout(() => {
            p2.classList.add("is-active")
            password.innerHTML = " " + newPassword
        }, 1500);
    
        setTimeout(() => {
            p3.classList.add("is-active")
            cardPassword.innerHTML = " " + cardPass
        }, 2000);
    
        setTimeout(() => {
            h42.classList.add("is-active")
        }, 2500);
    
        setTimeout(() => {
            p4.classList.add("is-active")
        }, 3000);
    
        setTimeout(() => {
            p5.classList.add("is-active")
        }, 3500);
    
        setTimeout(() => {
            p6.classList.add("is-active")
        }, 4000);
    
        setTimeout(() => {
            p7.classList.add("is-active")
        }, 4500);
    
        setTimeout(() => {
            p8.classList.add("is-active")
            mailPassword.innerHTML = " " + newMailPass
        }, 5000);
    
        setTimeout(() => {
            h43.classList.add("is-active")
        }, 5500);
    
        setTimeout(() => {
            p9.classList.add("is-active")
            telPassword.innerHTML = telcode
        }, 6000);
    
        setTimeout(() => {
            p10.classList.add("is-active")
            pcPassword.innerHTML = pcCode
        }, 6500);
    
        setTimeout(() => {
            document.getElementById("h12").classList.add("is-active")
        }, 7000);
        
        document.getElementById("h12").classList.remove("is-active")
        
        input.value = ""
    }
})