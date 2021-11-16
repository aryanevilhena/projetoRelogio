let digitalElement = document.querySelector('.digital')
let segundosElement = document.querySelector('.p_s')
let minutoElement = document.querySelector('.p_m')
let horaElement = document.querySelector('.p_h')

function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`

    let secondsDeg = ((360/60) * seconds) - 90
    let minuteDeg = ((360/60) * minute) - 90
    let hourDeg = ((360/12) * hour) - 90
    
    segundosElement.style.transform = `rotate(${secondsDeg}deg)`
    minutoElement.style.transform = `rotate(${minuteDeg}deg)`
    horaElement.style.transform = `rotate(${hourDeg}deg)`

}

function fixZero(time){
    return time < 10 ? `0${time}` : time
}
setInterval(updateClock, 1000)
updateClock()