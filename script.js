const modal = document.querySelector(".modal");
const mask = document.querySelector(".modal");

setInterval(function(){

    let now = new Date();
    now = now.getTime();

    let target = new Date("25 november 2023 16:00:00");
    target = target.getTime();

    let distance = target - now;

    let days = parseInt(distance / (1000 * 60 * 60 * 24));
    let hours = parseInt( (distance / (1000 * 60 * 60)) - (days * 24));
    let minutes = parseInt( (distance / (1000 * 60)) - (hours * 60) - (days * 24 * 60));
    let seconds = parseInt( (distance / (1000)) - (minutes * 60) - (hours * 60 * 60) - (days * 24 * 60 * 60));
    
    document.querySelectorAll(".days-remaining").forEach(item=>{
        item.innerHTML = days;
    })
    document.querySelectorAll(".hours-remaining").forEach(item=>{
        item.innerHTML = hours;
    })
    document.querySelectorAll(".minutes-remaining").forEach(item=>{
        item.innerHTML = minutes;
    })
    document.querySelectorAll(".seconds-remaining").forEach(item=>{
        item.innerHTML = seconds;
    })
    
}, 1000);


document.querySelector(".btn-modal").addEventListener("click", function(e){
    e.preventDefault()
    modal.classList.add("show");
    mask.classList.add("show")
})


document.querySelector(".modal .modal-header img").addEventListener("click", function(e){
    e.preventDefault()
    modal.classList.remove("show");
})