let ageInput = document.getElementById('age-input')
ageInput.onchange((e)=>{
    let age = Number(e.target.value)
    if(age>120 && age < 2){
        return document.getElementsByClassName('result-container').innerText("Plaese provide an age between 2 and 120")
    }
})

let heightInput = document.getElementById('height-input')
heightInput.onchange((e)=>{
    let height = e.target.value
    if(isNaN(Number(height)) && !(Number(height)>0)){
        return document.getElementById('err-height').innerText("only positive numbers allowed")
    }
})

let weightInput = document.getElementById('weight-input')
weightInput.onchange((e)=>{
    let weight = e.target.value
    if(isNaN(Number(weight)) && !(Number(weight)>0)){
        return document.getElementById('err-weight').innerText("only positive numbers allowed")
    }
})

let calcBtn = document.getElementById('calc-btn')
calcBtn.onclick((e)=>{
    let BMI = weightInput.target.value / heightInput.target.value * 10000;
    return document.getElementById('result-container').innerText(`BMI = ${BMI} kg/metre.square`)
})