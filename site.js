const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

//const h2 = document.querySelector('#Welcome >h2')


const h2 = document.querySelector('#Welcome >h2')

if (isMorning){
    
    h2.textContent = "Good Mornig"
}
if (isAfternoon){
    h2.textContent = "Good Afternoon"
}
if (isEvening){
    h2.textContent = "Good Evening"
}

