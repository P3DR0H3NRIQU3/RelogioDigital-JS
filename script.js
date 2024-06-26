document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        let now = new Date();

        let hours = now.getHours().toString().padStart(2, '0'); 
        let minutes = now.getMinutes().toString().padStart(2, '0'); 
        let seconds = now.getSeconds().toString().padStart(2, '0'); 

        let hourElement = document.getElementById('hour');
        let minuteElement = document.getElementById('min');
        let secondElement = document.getElementById('sec');

        console.log(hourElement, minuteElement, secondElement); 
        if (!hourElement || !minuteElement || !secondElement) {
            console.error('Um ou mais elementos não foram encontrados no DOM.');
            return;
        }
        hourElement.textContent = hours;
        minuteElement.textContent = minutes;
        secondElement.textContent = seconds;
        let body = document.querySelector("body")
        if (hourElement.textContent < 12 || hourElement > 5) {
            body.style.backgroundImage = "url(img/dia.jpg)"
        } 
        if (hourElement.textContent >= 12 || hourElement < 18) {
            body.style.backgroundImage = "url(img/tarde.jpg)"
        } 
        if (hourElement.textContent >= 18 || hourElement.textContent <= 5) {
            body.style.backgroundImage = "url(img/noite.jpg)"  
        } 
    }

    updateClock();
    setInterval(updateClock, 1000);
});
