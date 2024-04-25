let h = document.querySelector("h2")
let p = document.querySelector("h3");

setInterval(()=>{
    let date = new Date();
    let time = "Time: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    h.innerHTML = time

    let month = date.getMonth() + 1;
    let today = "Day: " + date.getDate() + "/" + month + "/" + date.getFullYear();
    p.innerHTML = today
}, 1000)
