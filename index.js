/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")
const lengthO = document.getElementById("length-output") 
const volumeO = document.getElementById("volume-output") 
const massO = document.getElementById("mass-output") 
const er = document.getElementById("error")


input.addEventListener("input", function () {
        if (isNaN(input.value)){
                er.innerHTML = `Please enter a number!`
        } else{
                er.innerHTML =""  
        lengthO.textContent = `${input.value} meters = ${(input.value*3.281).toFixed(2)} feet | ${input.value} feet = ${(input.value/3.281).toFixed(2)} meters`;
        volumeO.textContent = `${input.value} liters = ${(input.value*0.264).toFixed(2)} galons | ${input.value} galons = ${(input.value/0.264).toFixed(2)} liters`;
        massO.textContent = `${input.value} kilos = ${(input.value*2.204).toFixed(2)} pounds | ${input.value} pounds = ${(input.value/2.204).toFixed(2)} kilos`
        }
})

